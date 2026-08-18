"use client";

import { FormEvent, ReactNode, useState } from "react";

type Item = {
  id: number;
  name?: string;
  email?: string;
  comment?: string;
  message?: string;
  subject?: string;
  page?: string;
  status: string;
  title?: string;
  slug?: string;
  created_at?: string;
};

type LinkedInDraft = {
  id: number;
  tarih: string;
  icerik: string;
  kaynakBaslik: string;
  kaynakUrl?: string;
  gorselUrl?: string;
  videoUrl?: string;
};

type Data = { comments: Item[]; messages: Item[]; posts: Item[]; subscribers: Item[] };
type Tab = "posts" | "comments" | "messages" | "subscribers" | "linkedin" | "fikirler";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [data, setData] = useState<Data | null>(null);
  const [drafts, setDrafts] = useState<LinkedInDraft[]>([]);
  const [fikirler, setFikirler] = useState({ bugunOneri: "", gunlukFikirler: "" });
  const [error, setError] = useState("");
  const [tab, setTab] = useState<Tab>("posts");
  const [commentFilter, setCommentFilter] = useState<"all" | "pending" | "approved" | "rejected">("all");

  const load = async () => {
    try {
      const [r, dr, fr] = await Promise.all([
        fetch("/api/admin"),
        fetch("/api/admin/linkedin-drafts"),
        fetch("/api/admin/fikirler"),
      ]);
      if (!r.ok || !dr.ok || !fr.ok) throw new Error();
      setData(await r.json());
      setFikirler(await fr.json());
      const { drafts: rows } = await dr.json();
      setDrafts(
        rows.map(
          (d: {
            id: number;
            tarih: string;
            icerik: string;
            kaynak_baslik: string;
            kaynak_url?: string;
            gorsel_url?: string;
            video_url?: string;
          }) => ({
            id: d.id,
            tarih: d.tarih,
            icerik: d.icerik,
            kaynakBaslik: d.kaynak_baslik,
            kaynakUrl: d.kaynak_url ?? undefined,
            gorselUrl: d.gorsel_url ?? undefined,
            videoUrl: d.video_url ?? undefined,
          })
        )
      );
    } catch {
      setError("Veriler yüklenirken hata oluştu.");
    }
  };

  const saveDraft = async (updated: LinkedInDraft) => {
    await fetch("/api/admin/linkedin-drafts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    await load();
  };

  const deleteDraft = async (id: number) => {
    if (!confirm("Bu taslağı kalıcı olarak silmek istediğine emin misin?")) return;
    await fetch("/api/admin/linkedin-drafts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await load();
  };

  const login = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const r = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!r.ok) {
      setError("Parola yanlış.");
      return;
    }
    await load();
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setData(null);
    setPassword("");
  };

  const updateStatus = async (type: string, id: number, status: string) => {
    await fetch("/api/admin", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, id, status }),
    });
    await load();
  };

  const postSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const f = new FormData(e.currentTarget);
    const r = await fetch("/api/admin/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(f)),
    });
    if (!r.ok) {
      setError("Yazı kaydedilemedi; bağlantı adı (slug) benzersiz olmalı.");
      return;
    }
    e.currentTarget.reset();
    await load();
    setTab("posts");
  };

  if (!data) {
    return (
      <main className="min-h-screen bg-slate-50 p-6 pt-24">
        <section className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-xl">
          <p className="font-semibold text-orange-500">KORAY AKDAĞ</p>
          <h1 className="mb-6 mt-2 text-3xl font-black">Yönetici Girişi</h1>
          <form onSubmit={login} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Yönetici parolası"
              className="w-full rounded-xl border p-3"
              required
            />
            <button className="w-full rounded-xl bg-orange-500 p-3 font-bold text-white transition hover:bg-orange-600">
              Giriş Yap
            </button>
            {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
          </form>
        </section>
      </main>
    );
  }

  const pendingComments = data.comments.filter((x) => x.status === "pending").length;

  const filteredComments = data.comments.filter((c) => {
    if (commentFilter === "all") return true;
    return c.status === commentFilter;
  });

  return (
    <main className="min-h-screen bg-slate-50 p-4 pt-24 sm:p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-semibold tracking-widest text-orange-500">KORAY AKDAĞ</p>
            <h1 className="text-3xl font-black text-[#071A2F]">Yönetim Paneli</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={load}
              className="rounded-xl border bg-white px-5 py-2.5 font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
            >
              🔄 Yenile
            </button>
            <button
              onClick={logout}
              className="rounded-xl border bg-white px-5 py-2.5 font-semibold text-red-600 shadow-sm transition hover:bg-red-50"
            >
              🚪 Çıkış Yap
            </button>
          </div>
        </header>

        {/* NAVIGATION TABS */}
        <nav className="mb-8 flex flex-wrap gap-2">
          {[
            ["posts", "Blog Yazıları"],
            ["comments", `Yorumlar (${pendingComments} Bekleyen)`],
            ["messages", `İletişim Mesajları (${data.messages.length})`],
            ["subscribers", `Aboneler (${data.subscribers.length})`],
            ["linkedin", `LinkedIn Taslakları (${drafts.length})`],
            ["fikirler", "Fikirler"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id as Tab)}
              className={`rounded-xl px-5 py-3 font-bold transition ${
                tab === id
                  ? "bg-[#071A2F] text-white shadow-md"
                  : "bg-white text-[#071A2F] hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* BLOG POSTS TAB */}
        {tab === "posts" && (
          <>
            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-[#071A2F]">Yeni Blog Yazısı</h2>
              <form onSubmit={postSubmit} className="space-y-4">
                <input
                  name="title"
                  required
                  placeholder="Başlık"
                  className="w-full rounded-xl border p-3 text-gray-800"
                />
                <input
                  name="slug"
                  required
                  placeholder="Bağlantı adı (Slug): ornek-yazi-slug"
                  pattern="[a-z0-9-]+"
                  className="w-full rounded-xl border p-3 text-gray-800"
                />
                <textarea
                  name="excerpt"
                  required
                  placeholder="Kısa özet / açıklama"
                  className="w-full rounded-xl border p-3 text-gray-800"
                />
                <textarea
                  name="content"
                  required
                  rows={10}
                  placeholder="Yazı içeriği"
                  className="w-full rounded-xl border p-3 text-gray-800"
                />
                <div className="flex items-center gap-3">
                  <select name="status" className="rounded-xl border p-3 text-gray-800">
                    <option value="draft">Taslak Kaydet</option>
                    <option value="published">Yayınla</option>
                  </select>
                  <button className="rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600">
                    Kaydet
                  </button>
                </div>
              </form>
            </section>

            <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">Mevcut Blog Yazıları</h2>
              {data.posts.length ? (
                <div className="divide-y">
                  {data.posts.map((x) => (
                    <div key={x.id} className="py-4 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <b className="text-lg text-[#071A2F]">{x.title}</b>
                        <p className="text-sm text-gray-500">/blog/{x.slug}</p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          x.status === "published"
                            ? "bg-green-100 text-green-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {x.status === "published" ? "Yayında" : "Taslak"}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <Empty text="Henüz eklenmiş veritabanı blog yazısı yok." />
              )}
            </section>
          </>
        )}

        {/* COMMENTS TAB */}
        {tab === "comments" && (
          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[#071A2F]">Yorum Yönetimi</h2>
                <p className="text-sm text-gray-600">
                  Onaylanan yorumlar ilgili blog yazısının altında yayınlanır.
                </p>
              </div>

              {/* Status Filter */}
              <div className="flex gap-2 rounded-xl bg-slate-100 p-1 text-sm font-semibold">
                <button
                  onClick={() => setCommentFilter("all")}
                  className={`rounded-lg px-3 py-1.5 transition ${
                    commentFilter === "all" ? "bg-white text-[#071A2F] shadow" : "text-gray-600"
                  }`}
                >
                  Tümü ({data.comments.length})
                </button>
                <button
                  onClick={() => setCommentFilter("pending")}
                  className={`rounded-lg px-3 py-1.5 transition ${
                    commentFilter === "pending" ? "bg-white text-orange-600 shadow" : "text-gray-600"
                  }`}
                >
                  Bekleyen ({pendingComments})
                </button>
                <button
                  onClick={() => setCommentFilter("approved")}
                  className={`rounded-lg px-3 py-1.5 transition ${
                    commentFilter === "approved" ? "bg-white text-green-600 shadow" : "text-gray-600"
                  }`}
                >
                  Onaylanan
                </button>
                <button
                  onClick={() => setCommentFilter("rejected")}
                  className={`rounded-lg px-3 py-1.5 transition ${
                    commentFilter === "rejected" ? "bg-white text-red-600 shadow" : "text-gray-600"
                  }`}
                >
                  Reddedilen
                </button>
              </div>
            </div>

            {filteredComments.length ? (
              <div className="space-y-4">
                {filteredComments.map((x) => (
                  <article key={x.id} className="rounded-2xl border p-5 shadow-xs bg-slate-50/50">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3">
                      <div>
                        <span className="font-bold text-lg text-[#071A2F]">{x.name}</span>
                        <span className="ml-3 text-sm text-gray-500">({x.email})</span>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${
                          x.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : x.status === "rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {x.status === "approved"
                          ? "Onaylandı"
                          : x.status === "rejected"
                          ? "Reddedildi"
                          : "Bekliyor"}
                      </span>
                    </div>

                    <div className="my-3">
                      <p className="text-xs font-semibold text-orange-600">
                        Blog Sayfası: <span className="font-mono">{x.page}</span>
                      </p>
                      <p className="mt-2 text-gray-800 whitespace-pre-line">{x.comment}</p>
                      {x.created_at && (
                        <p className="mt-2 text-xs text-gray-400">
                          Tarih: {new Date(x.created_at).toLocaleString("tr-TR")}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t">
                      {x.status !== "approved" && (
                        <button
                          onClick={() => updateStatus("comment", x.id, "approved")}
                          className="rounded-lg bg-green-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-700"
                        >
                          ✅ Onayla
                        </button>
                      )}
                      {x.status !== "rejected" && (
                        <button
                          onClick={() => updateStatus("comment", x.id, "rejected")}
                          className="rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-amber-700"
                        >
                          🚫 Reddet
                        </button>
                      )}
                      <button
                        onClick={() => updateStatus("comment", x.id, "deleted")}
                        className="rounded-lg bg-red-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-red-700"
                      >
                        🗑️ Sil
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <Empty text="Bu filtreye uygun kayıtlı yorum bulunamadı." />
            )}
          </section>
        )}

        {/* MESSAGES TAB */}
        {tab === "messages" && (
          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-[#071A2F]">İletişim Mesajları</h2>
            {data.messages.length ? (
              <div className="space-y-4">
                {data.messages.map((x) => (
                  <article key={x.id} className="rounded-2xl border p-5 shadow-xs">
                    <div className="flex items-center justify-between border-b pb-2">
                      <b className="text-lg text-[#071A2F]">{x.name}</b>
                      <span className="text-sm text-gray-500">{x.email}</span>
                    </div>
                    <p className="mt-3 font-semibold text-orange-600">{x.subject}</p>
                    <p className="mt-1 text-gray-800 whitespace-pre-line">{x.message}</p>
                    <div className="mt-3 flex items-center justify-between">
                      {x.created_at ? (
                        <p className="text-xs text-gray-400">
                          {new Date(x.created_at).toLocaleString("tr-TR")}
                        </p>
                      ) : (
                        <span />
                      )}
                      <button
                        onClick={() => {
                          if (confirm("Bu mesajı kalıcı olarak silmek istediğinize emin misiniz?")) {
                            updateStatus("message", x.id, "deleted");
                          }
                        }}
                        className="rounded-lg bg-red-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-red-700"
                      >
                        🗑️ Sil
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <Empty text="Henüz veritabanına kaydedilmiş iletişim mesajı yok." />
            )}
          </section>
        )}

        {/* LINKEDIN TAB */}
        {tab === "linkedin" && (
          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#071A2F]">LinkedIn Taslakları</h2>
              <p className="text-sm text-gray-600">
                Otomatik paylaşılmaz. Metni oku, istersen kendi cümlenle/anekdotunla
                düzenle, sonra kopyalayıp kendi LinkedIn hesabından paylaş.
              </p>
            </div>
            {drafts.length ? (
              <div className="space-y-4">
                {drafts.map((d) => (
                  <LinkedInDraftCard key={d.id} draft={d} onSave={saveDraft} onDelete={deleteDraft} />
                ))}
              </div>
            ) : (
              <Empty text="Henüz LinkedIn taslağı yok." />
            )}
          </section>
        )}

        {/* SUBSCRIBERS TAB */}
        {tab === "subscribers" && (
          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#071A2F]">Güncel Gelişmeler Aboneleri</h2>
              <p className="text-sm text-gray-600">
                Güncel Gelişmeler sayfasından e-posta bırakan ziyaretçiler. Şu an sadece kayıt tutuluyor; otomatik bildirim e-postası gönderimi henüz devrede değil.
              </p>
            </div>
            {data.subscribers.length ? (
              <div className="divide-y">
                {data.subscribers.map((x) => (
                  <div key={x.id} className="flex flex-wrap items-center justify-between gap-2 py-3">
                    <span className="font-semibold text-[#071A2F]">{x.email}</span>
                    <div className="flex items-center gap-3">
                      {x.created_at && (
                        <span className="text-xs text-gray-400">
                          {new Date(x.created_at).toLocaleString("tr-TR")}
                        </span>
                      )}
                      <button
                        onClick={() => updateStatus("subscriber", x.id, "deleted")}
                        className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-red-700"
                      >
                        🗑️ Sil
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Empty text="Henüz abone yok." />
            )}
          </section>
        )}

        {/* FİKİRLER TAB */}
        {tab === "fikirler" && (
          <div className="space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-2xl font-bold text-[#071A2F]">Bugünün Önerisi</h2>
              <p className="mb-5 text-sm text-gray-600">
                Fikir Avcısı ajanının her gün 15:00&apos;te öne çıkardığı tek öneri.
              </p>
              {fikirler.bugunOneri ? (
                <Markdown text={fikirler.bugunOneri} />
              ) : (
                <Empty text="Henüz bugünün önerisi oluşmadı." />
              )}
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-2xl font-bold text-[#071A2F]">Günlük Fikirler Arşivi</h2>
              <p className="mb-5 text-sm text-gray-600">
                Her gün eklenen 3-5 aday fikrin tam araştırma dökümü, en yeni en üstte.
              </p>
              {fikirler.gunlukFikirler ? (
                <Markdown text={fikirler.gunlukFikirler} />
              ) : (
                <Empty text="Henüz kaydedilmiş fikir yok." />
              )}
            </section>
          </div>
        )}
      </div>
    </main>
  );
}

function Empty({ text }: { text: string }) {
  return <p className="rounded-xl bg-slate-50 p-5 text-gray-600">{text}</p>;
}

function formatInline(line: string) {
  const parts = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a
          key={i}
          href={link[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-orange-600 hover:underline"
        >
          {link[1]}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function Markdown({ text }: { text: string }) {
  const lines = text.split("\n");
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length) {
      blocks.push(
        <ul key={`ul-${blocks.length}`} className="list-disc space-y-1 pl-6 text-gray-800">
          {listItems.map((item, i) => (
            <li key={i}>{formatInline(item)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((raw, i) => {
    const line = raw.trimEnd();
    if (/^\s*---\s*$/.test(line)) {
      flushList();
      blocks.push(<hr key={i} className="my-4 border-gray-200" />);
    } else if (line.startsWith("### ")) {
      flushList();
      blocks.push(
        <h4 key={i} className="mt-4 text-base font-bold text-[#071A2F]">
          {formatInline(line.slice(4))}
        </h4>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      blocks.push(
        <h3 key={i} className="mt-6 text-xl font-bold text-[#071A2F]">
          {formatInline(line.slice(3))}
        </h3>
      );
    } else if (line.startsWith("# ")) {
      flushList();
      blocks.push(
        <h2 key={i} className="mt-6 text-2xl font-black text-[#071A2F]">
          {formatInline(line.slice(2))}
        </h2>
      );
    } else if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      blocks.push(
        <p key={i} className="text-gray-800">
          {formatInline(line)}
        </p>
      );
    }
  });
  flushList();

  return <div className="space-y-2">{blocks}</div>;
}

function LinkedInDraftCard({
  draft,
  onSave,
  onDelete,
}: {
  draft: {
    id: number;
    tarih: string;
    icerik: string;
    kaynakBaslik: string;
    kaynakUrl?: string;
    gorselUrl?: string;
    videoUrl?: string;
  };
  onSave: (updated: typeof draft) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}) {
  const [copied, setCopied] = useState(false);
  const [postState, setPostState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [postError, setPostError] = useState("");
  const [editing, setEditing] = useState(false);
  const [draftText, setDraftText] = useState(draft.icerik);
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    await onSave({ ...draft, icerik: draftText });
    setSaving(false);
    setEditing(false);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(draft.icerik);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard erişimi engellenmişse sessizce geç
    }
  };

  const publish = async () => {
    if (!confirm("Bu yazı gerçekten LinkedIn hesabında yayınlanacak. Emin misin?")) return;
    setPostState("sending");
    setPostError("");
    try {
      const r = await fetch("/api/linkedin/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          icerik: draft.icerik,
          gorselUrl: draft.gorselUrl,
          videoUrl: draft.videoUrl,
        }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Bilinmeyen hata");
      setPostState("done");
    } catch (e) {
      setPostState("error");
      setPostError(e instanceof Error ? e.message : "Bilinmeyen hata");
    }
  };

  return (
    <article className="rounded-2xl border p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3">
        <div>
          <p className="text-xs font-semibold text-orange-600">{draft.kaynakBaslik}</p>
          <p className="text-xs text-gray-400">{draft.tarih}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={copy}
            className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
              copied
                ? "bg-green-600 text-white"
                : "bg-[#071A2F] text-white hover:bg-[#0F2A47]"
            }`}
          >
            {copied ? "✅ Kopyalandı" : "📋 Metni Kopyala"}
          </button>
          <button
            onClick={publish}
            disabled={postState === "sending" || postState === "done"}
            className={`rounded-lg px-4 py-2 text-xs font-bold text-white transition disabled:cursor-not-allowed ${
              postState === "done"
                ? "bg-green-600"
                : postState === "error"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-orange-500 hover:bg-orange-600 disabled:opacity-60"
            }`}
          >
            {postState === "sending"
              ? "Paylaşılıyor…"
              : postState === "done"
              ? "✅ Yayınlandı"
              : postState === "error"
              ? "⚠️ Tekrar Dene"
              : "🚀 LinkedIn'de Paylaş"}
          </button>
          <button
            onClick={() => {
              setDraftText(draft.icerik);
              setEditing((v) => !v);
            }}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-bold text-gray-700 transition hover:bg-gray-50"
          >
            {editing ? "✖️ Vazgeç" : "✏️ Düzenle"}
          </button>
          <button
            onClick={() => onDelete(draft.id)}
            className="rounded-lg bg-red-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-red-700"
          >
            🗑️ Sil
          </button>
        </div>
      </div>
      {postState === "error" && (
        <p className="mt-2 text-xs font-semibold text-red-600">{postError}</p>
      )}
      {editing ? (
        <div className="mt-3 space-y-2">
          <textarea
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
            rows={10}
            className="w-full rounded-xl border p-3 text-gray-800"
          />
          <button
            onClick={save}
            disabled={saving}
            className="rounded-lg bg-green-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-700 disabled:opacity-60"
          >
            {saving ? "Kaydediliyor…" : "💾 Kaydet"}
          </button>
        </div>
      ) : (
        <p className="mt-3 whitespace-pre-line text-gray-800">{draft.icerik}</p>
      )}
      {draft.videoUrl ? (
        <div className="mt-4">
          <video
            src={draft.videoUrl}
            controls
            className="max-h-96 w-full rounded-xl bg-black object-contain"
          />
          <a
            href={draft.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs font-semibold text-orange-600 hover:underline"
          >
            🎬 Videoyu tam boyutta aç / indir →
          </a>
        </div>
      ) : (
        draft.gorselUrl && (
          <div className="mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={draft.gorselUrl}
              alt={draft.kaynakBaslik}
              className="max-h-72 w-full rounded-xl object-cover"
            />
            <a
              href={draft.gorselUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs font-semibold text-orange-600 hover:underline"
            >
              🖼️ Görseli tam boyutta aç / indir →
            </a>
          </div>
        )
      )}
      {draft.kaynakUrl && (
        <a
          href={draft.kaynakUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-xs font-semibold text-orange-600 hover:underline"
        >
          Kaynak sayfayı gör →
        </a>
      )}
    </article>
  );
}
