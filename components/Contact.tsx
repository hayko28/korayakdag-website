"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmissionState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Form gönderilemedi");
      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-24 scroll-mt-[100px]">
      <div className="mx-auto max-w-6xl px-8">
        <p className="mb-5 text-2xl font-bold uppercase tracking-[2px] text-orange-500">İletişim</p>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-bold text-[#071A2F] lg:text-4xl">Benimle iletişime geçin.</h2>
          <button
            type="button"
            onClick={() => setIsPanelOpen(true)}
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Formu Doldur
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <ContactCard title="Kişisel E-posta" icon="✉️">
            <a href="mailto:koray_akdag@hotmail.com" className="break-all text-orange-400 hover:underline">koray_akdag@hotmail.com</a>
          </ContactCard>
          <ContactCard title="Kurumsal E-posta" icon="✉️">
            <a href="mailto:koray.akdag@sistemglobal.com.tr" className="break-all text-orange-400 hover:underline">koray.akdag@sistemglobal.com.tr</a>
          </ContactCard>
          <ContactCard title="LinkedIn" icon="in">
            <a href="https://www.linkedin.com/in/koray-akda%C4%9F-07709368/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">LinkedIn profilimi ziyaret edin →</a>
          </ContactCard>
        </div>
      </div>

      {isPanelOpen && (
        <div className="fixed inset-0 z-[10000]" role="dialog" aria-modal="true" aria-labelledby="contact-form-title">
          <button type="button" aria-label="Formu kapat" onClick={() => setIsPanelOpen(false)} className="absolute inset-0 bg-[#071A2F]/50" />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-lg flex-col overflow-y-auto bg-white p-6 shadow-2xl sm:p-10">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="mb-2 font-semibold text-orange-500">İletişim Formu</p>
                <h2 id="contact-form-title" className="text-3xl font-bold text-[#071A2F]">Nasıl yardımcı olabilirim?</h2>
              </div>
              <button type="button" onClick={() => setIsPanelOpen(false)} className="rounded-lg p-2 text-2xl text-[#071A2F] hover:bg-gray-100" aria-label="Formu kapat">×</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <FormField label="Ad Soyad" name="name" autoComplete="name" />
              <FormField label="E-posta" name="email" type="email" autoComplete="email" />
              <FormField label="Konu" name="subject" />
              <label className="block text-sm font-semibold text-[#071A2F]">Mesaj
                <textarea name="message" required rows={6} className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
              </label>
              {submissionState === "success" && <p role="status" className="rounded-lg bg-green-50 p-3 text-sm text-green-800">Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağım.</p>}
              {submissionState === "error" && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">Mesaj gönderilemedi. Lütfen tekrar deneyin.</p>}
              <button type="submit" disabled={submissionState === "sending"} className="w-full rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70">{submissionState === "sending" ? "Gönderiliyor…" : "Gönder"}</button>
            </form>
          </aside>
        </div>
      )}
    </section>
  );
}

function ContactCard({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return <div className="rounded-2xl bg-[#071A2F] p-8 text-white shadow-lg"><div className="mb-5 text-4xl">{icon}</div><h3 className="mb-4 text-xl font-bold">{title}</h3>{children}</div>;
}

function FormField({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return <label className="block text-sm font-semibold text-[#071A2F]">{label}<input name={name} type={type} required autoComplete={autoComplete} className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200" /></label>;
}
