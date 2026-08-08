"use client";

import { FormEvent, useState } from "react";

const STRINGS = {
  tr: {
    label: "İletişim",
    heading: "Benimle iletişime geçin.",
    fillForm: "Formu Doldur",
    personalEmail: "Kişisel E-posta",
    corporateEmail: "Kurumsal E-posta",
    linkedinVisit: "LinkedIn profilimi ziyaret edin →",
    closeForm: "Formu kapat",
    formLabel: "İletişim Formu",
    formHeading: "Nasıl yardımcı olabilirim?",
    fullName: "Ad Soyad",
    email: "E-posta",
    subject: "Konu",
    message: "Mesaj",
    success: "Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağım.",
    error: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
    sending: "Gönderiliyor…",
    send: "Gönder",
    submitError: "Form gönderilemedi",
  },
  en: {
    label: "Contact",
    heading: "Get in touch with me.",
    fillForm: "Fill Out the Form",
    personalEmail: "Personal Email",
    corporateEmail: "Corporate Email",
    linkedinVisit: "Visit my LinkedIn profile →",
    closeForm: "Close form",
    formLabel: "Contact Form",
    formHeading: "How can I help you?",
    fullName: "Full Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    success: "Your message has been sent successfully. I will get back to you as soon as possible.",
    error: "The message could not be sent. Please try again.",
    sending: "Sending…",
    send: "Send",
    submitError: "Failed to submit form",
  },
};

export default function Contact({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const t = STRINGS[lang];

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

      if (!response.ok) throw new Error(t.submitError);
      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-24 scroll-mt-[100px]">
      <div className="mx-auto max-w-6xl px-8">
        <p className="mb-5 text-2xl font-bold uppercase tracking-[2px] text-orange-500">{t.label}</p>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-bold text-[#071A2F] lg:text-4xl">{t.heading}</h2>
          <button
            type="button"
            onClick={() => setIsPanelOpen(true)}
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            {t.fillForm}
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <ContactCard title={t.personalEmail} icon="✉️">
            <a href="mailto:koray_akdag@hotmail.com" className="break-all text-orange-400 hover:underline">koray_akdag@hotmail.com</a>
          </ContactCard>
          <ContactCard title={t.corporateEmail} icon="✉️">
            <a href="mailto:koray.akdag@sistemglobal.com.tr" className="break-all text-orange-400 hover:underline">koray.akdag@sistemglobal.com.tr</a>
          </ContactCard>
          <ContactCard title="LinkedIn" icon="in">
            <a href="https://www.linkedin.com/in/koray-akda%C4%9F-07709368/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">{t.linkedinVisit}</a>
          </ContactCard>
        </div>
      </div>

      {isPanelOpen && (
        <div className="fixed inset-0 z-[10000]" role="dialog" aria-modal="true" aria-labelledby="contact-form-title">
          <button type="button" aria-label={t.closeForm} onClick={() => setIsPanelOpen(false)} className="absolute inset-0 bg-[#071A2F]/50" />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-lg flex-col overflow-y-auto bg-white p-6 shadow-2xl sm:p-10">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="mb-2 font-semibold text-orange-500">{t.formLabel}</p>
                <h2 id="contact-form-title" className="text-3xl font-bold text-[#071A2F]">{t.formHeading}</h2>
              </div>
              <button type="button" onClick={() => setIsPanelOpen(false)} className="rounded-lg p-2 text-2xl text-[#071A2F] hover:bg-gray-100" aria-label={t.closeForm}>×</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <FormField label={t.fullName} name="name" autoComplete="name" />
              <FormField label={t.email} name="email" type="email" autoComplete="email" />
              <FormField label={t.subject} name="subject" />
              <label className="block text-sm font-semibold text-[#071A2F]">{t.message}
                <textarea name="message" required rows={6} className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
              </label>
              {submissionState === "success" && <p role="status" className="rounded-lg bg-green-50 p-3 text-sm text-green-800">{t.success}</p>}
              {submissionState === "error" && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{t.error}</p>}
              <button type="submit" disabled={submissionState === "sending"} className="w-full rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70">{submissionState === "sending" ? t.sending : t.send}</button>
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
