"use client";

import { FormEvent, useState } from "react";

export default function BlogComments() {
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmissionState("sending");

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          comment: formData.get("comment"),
          page: window.location.pathname,
        }),
      });

      if (!response.ok) throw new Error("Yorum gönderilemedi");
      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <section className="mt-16 border-t border-gray-200 pt-12" aria-labelledby="comments-title">
      <h2 id="comments-title" className="mb-3 text-3xl font-bold text-[#071A2F]">
        Yorum Yapın
      </h2>
      <p className="mb-7 text-gray-600">
        Görüşünüzü bizimle paylaşın. Yorumunuz inceleme için iletilecektir.
      </p>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Ad Soyad" name="name" autoComplete="name" />
          <FormField label="E-posta" name="email" type="email" autoComplete="email" />
        </div>
        <label className="mt-5 block text-sm font-semibold text-[#071A2F]">
          Yorumunuz
          <textarea name="comment" required rows={6} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
        </label>
        <p className="mt-4 text-sm leading-6 text-gray-500">Yorumunuz yayınlanmadan önce incelenir. E-posta adresiniz sitede paylaşılmaz.</p>
        {submissionState === "success" && <p role="status" className="mt-5 rounded-lg bg-green-50 p-3 text-sm text-green-800">Yorumunuz başarıyla gönderildi. Teşekkür ederiz.</p>}
        {submissionState === "error" && <p role="alert" className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">Yorum gönderilemedi. Lütfen tekrar deneyin.</p>}
        <button type="submit" disabled={submissionState === "sending"} className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70">
          {submissionState === "sending" ? "Gönderiliyor…" : "Yorumu Gönder"}
        </button>
      </form>
    </section>
  );
}

function FormField({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="block text-sm font-semibold text-[#071A2F]">
      {label}
      <input name={name} type={type} required autoComplete={autoComplete} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
    </label>
  );
}
