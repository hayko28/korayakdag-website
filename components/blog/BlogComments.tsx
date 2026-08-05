"use client";

import { FormEvent, useEffect, useState } from "react";

interface CommentItem {
  id: number;
  name: string;
  comment: string;
  created_at: string;
}

export default function BlogComments() {
  const [submissionState, setSubmissionState] = useState<
    "idle" | "sending" | "success" | "error" | "invalid"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [publishedComments, setPublishedComments] = useState<CommentItem[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `/api/comments?page=${encodeURIComponent(window.location.pathname)}`
        );
        if (response.ok) {
          const comments = await response.json();
          setPublishedComments(Array.isArray(comments) ? comments : []);
        }
      } catch {
        // Fallback silently if fetching fails
      }
    };

    void fetchComments();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Spam honeypot check
    const honeypot = formData.get("website_hp")?.toString();
    if (honeypot) {
      // Bot detected, pretend success
      setSubmissionState("success");
      form.reset();
      return;
    }

    const name = (formData.get("name")?.toString() || "").trim();
    const email = (formData.get("email")?.toString() || "").trim();
    const comment = (formData.get("comment")?.toString() || "").trim();

    // Input Validation
    if (!name || name.length < 2) {
      setErrorMessage("Lütfen geçerli bir Ad Soyad giriniz.");
      setSubmissionState("invalid");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setErrorMessage("Lütfen geçerli bir e-posta adresi giriniz.");
      setSubmissionState("invalid");
      return;
    }

    if (!comment || comment.length < 5) {
      setErrorMessage("Lütfen en az 5 karakterlik bir yorum yazınız.");
      setSubmissionState("invalid");
      return;
    }

    setSubmissionState("sending");

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          comment,
          page: window.location.pathname,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Yorum gönderilemedi");
      }

      form.reset();
      setSubmissionState("success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Yorum gönderilemedi.";
      setErrorMessage(msg);
      setSubmissionState("error");
    }
  };

  return (
    <section
      className="mt-16 border-t border-gray-200 pt-12"
      aria-labelledby="comments-title"
    >
      <h2
        id="comments-title"
        className="mb-3 text-3xl font-bold text-[#071A2F]"
      >
        Yorumlar ({publishedComments.length})
      </h2>
      <p className="mb-7 text-gray-600">
        Görüşünüzü bizimle paylaşın. Gönderdiğiniz yorum yöneticilerimiz tarafından incelendikten sonra yayınlanacaktır.
      </p>

      {/* PUBLISHED COMMENTS LIST */}
      {publishedComments.length > 0 ? (
        <div className="mb-10 space-y-4">
          {publishedComments.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-[#071A2F] text-lg">{item.name}</p>
                <p className="text-xs font-medium text-gray-400">
                  {new Date(item.created_at).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <p className="mt-3 text-gray-700 whitespace-pre-line leading-relaxed">
                {item.comment}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="mb-8 rounded-2xl bg-gray-50 p-6 text-center text-gray-500">
          Bu yazıya henüz yorum yapılmamış. İlk yorumu siz yapın!
        </div>
      )}

      {/* COMMENT FORM */}
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 shadow-sm"
      >
        <h3 className="mb-6 text-xl font-bold text-[#071A2F]">
          Yorum Yapın
        </h3>

        {/* Spam Honeypot Field */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website_hp"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-[#071A2F]">
              Ad Soyad <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              type="text"
              required
              maxLength={100}
              placeholder="Ahmet Yılmaz"
              autoComplete="name"
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#071A2F]">
              E-posta <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              maxLength={120}
              placeholder="ahmet@example.com"
              autoComplete="email"
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="block text-sm font-semibold text-[#071A2F]">
            Yorumunuz <span className="text-red-500">*</span>
          </label>
          <textarea
            name="comment"
            required
            rows={5}
            maxLength={2000}
            placeholder="Yorumunuzu buraya yazabilirsiniz..."
            className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
        </div>

        <p className="mt-4 text-xs leading-5 text-gray-500">
          * Yorumunuz yayınlanmadan önce yönetici onayından geçer. E-posta adresiniz hiçbir şekilde kamuya açık paylaşılmaz.
        </p>

        {submissionState === "success" && (
          <div role="status" className="mt-5 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-800 border border-green-200">
            ✅ Yorumunuz başarıyla gönderildi! Yönetici onayından sonra yayınlanacaktır.
          </div>
        )}

        {(submissionState === "error" || submissionState === "invalid") && (
          <div role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700 border border-red-200">
            ⚠️ {errorMessage || "Yorum gönderilirken bir hata oluştu. Lütfen tekrar deneyin."}
          </div>
        )}

        <button
          type="submit"
          disabled={submissionState === "sending"}
          className="mt-6 rounded-xl bg-orange-500 px-8 py-3.5 font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70 shadow-md"
        >
          {submissionState === "sending" ? "Gönderiliyor..." : "Yorumu Gönder"}
        </button>
      </form>
    </section>
  );
}
