"use client";

import { FormEvent, useEffect, useState } from "react";
import { GROUP_DEFS } from "@/components/Services";

export const OPEN_CONTACT_FORM_EVENT = "open-contact-form";

const STRINGS = {
  tr: {
    label: "İletişim",
    heading: "Benimle iletişime geçin.",
    fillForm: "Formu Doldur",
    phone: "Telefon",
    corporateEmail: "E-posta",
    linkedinVisit: "LinkedIn profilimi ziyaret edin →",
    closeForm: "Formu kapat",
    formLabel: "İletişim Formu",
    formHeading: "Nasıl yardımcı olabilirim?",
    servicesLabel: "İlgilendiğiniz Hizmetler",
    servicesHint: "Bir veya birden fazla seçebilirsiniz (opsiyonel).",
    fullName: "Ad Soyad",
    email: "E-posta",
    subject: "Konu",
    message: "Mesaj",
    success: "Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağım.",
    error: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
    sending: "Gönderiliyor…",
    send: "Gönder",
    submitError: "Form gönderilemedi",
    consentPrefix: "Gönder'e tıklayarak ",
    consentLink: "Gizlilik Politikası ve KVKK Aydınlatma Metni'ni",
    consentSuffix: " kabul etmiş olursunuz.",
  },
  en: {
    label: "Contact",
    heading: "Get in touch with me.",
    fillForm: "Fill Out the Form",
    phone: "Phone",
    corporateEmail: "Email",
    linkedinVisit: "Visit my LinkedIn profile →",
    closeForm: "Close form",
    formLabel: "Contact Form",
    formHeading: "How can I help you?",
    servicesLabel: "Services You're Interested In",
    servicesHint: "You can select one or more (optional).",
    fullName: "Full Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    success: "Your message has been sent successfully. I will get back to you as soon as possible.",
    error: "The message could not be sent. Please try again.",
    sending: "Sending…",
    send: "Send",
    submitError: "Failed to submit form",
    consentPrefix: "By clicking Send, you accept the ",
    consentLink: "Privacy Policy & Data Protection Notice",
    consentSuffix: ".",
  },
};

export default function Contact({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const t = STRINGS[lang];

  useEffect(() => {
    const openPanel = () => setIsPanelOpen(true);
    window.addEventListener(OPEN_CONTACT_FORM_EVENT, openPanel);
    return () => window.removeEventListener(OPEN_CONTACT_FORM_EVENT, openPanel);
  }, []);

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmissionState("sending");

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const baseMessage = String(formData.get("message") ?? "");
    const message =
      selectedServices.length > 0
        ? `${t.servicesLabel}: ${selectedServices.join(", ")}\n\n${baseMessage}`
        : baseMessage;

    // E-posta gonderimi dogrudan tarayicidan yapiliyor: formsubmit.co,
    // sunucudan (Vercel) gelen istekleri Cloudflare bot korumasiyla
    // engelliyor, gercek bir tarayicidan gelen istekleri engellemiyor.
    const mailPromise = fetch(
      "https://formsubmit.co/ajax/koray.akdag@sistemglobal.com.tr",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: "Koray Akdağ web sitesi iletişim formu",
          _template: "table",
        }),
      }
    )
      .then(async (response) => {
        const result = await response.json().catch(() => null);
        return (
          response.ok &&
          result !== null &&
          result.success !== false &&
          result.success !== "false"
        );
      })
      .catch(() => false);

    // Veritabanina kayit, e-posta gonderiminden bagimsiz ayrica denenir;
    // biri basarisiz olsa da diger yoldan mesaj kaybolmaz.
    const dbPromise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then((response) => response.ok)
      .catch(() => false);

    const [mailOk, dbOk] = await Promise.all([mailPromise, dbPromise]);

    if (mailOk || dbOk) {
      form.reset();
      setSelectedServices([]);
      setSubmissionState("success");
    } else {
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
          <ContactCard title={t.phone} icon={<PhoneIcon />}>
            <a href="tel:+905060931828" className="font-semibold text-[#071A2F] hover:underline">0506 093 18 28</a>
          </ContactCard>
          <ContactCard title={t.corporateEmail} icon={<EnvelopeIcon />}>
            <a href="mailto:koray.akdag@sistemglobal.com.tr" className="whitespace-nowrap font-semibold text-[#071A2F] hover:underline">koray.akdag@sistemglobal.com.tr</a>
          </ContactCard>
          <ContactCard title="LinkedIn" icon={<LinkedInIcon />}>
            <a href="https://www.linkedin.com/in/koray-akda%C4%9F-07709368/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#071A2F] hover:underline">{t.linkedinVisit}</a>
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
              <div>
                <p className="text-sm font-semibold text-[#071A2F]">{t.servicesLabel}</p>
                <p className="mb-3 mt-1 text-xs text-gray-500">{t.servicesHint}</p>
                <div className="grid gap-2">
                  {GROUP_DEFS.map((group) => {
                    const title = group[lang].title;
                    const checked = selectedServices.includes(title);
                    return (
                      <label
                        key={title}
                        className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 py-3 text-sm transition ${
                          checked
                            ? "border-orange-500 bg-orange-50 text-[#071A2F] font-semibold"
                            : "border-gray-300 text-gray-700 hover:border-orange-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleService(title)}
                          className="h-4 w-4 flex-shrink-0 accent-orange-500"
                        />
                        {title}
                      </label>
                    );
                  })}
                </div>
              </div>

              <FormField label={t.fullName} name="name" autoComplete="name" />
              <FormField label={t.email} name="email" type="email" autoComplete="email" />
              <FormField label={t.subject} name="subject" />
              <label className="block text-sm font-semibold text-[#071A2F]">{t.message}
                <textarea name="message" required rows={6} className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
              </label>
              {submissionState === "success" && <p role="status" className="rounded-lg bg-green-50 p-3 text-sm text-green-800">{t.success}</p>}
              {submissionState === "error" && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{t.error}</p>}
              <p className="text-xs text-gray-500">
                {t.consentPrefix}
                <a href={lang === "en" ? "/en/privacy-policy" : "/gizlilik-politikasi"} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange-500 hover:underline">
                  {t.consentLink}
                </a>
                {t.consentSuffix}
              </p>
              <button type="submit" disabled={submissionState === "sending"} className="w-full rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70">{submissionState === "sending" ? t.sending : t.send}</button>
            </form>
          </aside>
        </div>
      )}
    </section>
  );
}

function ContactCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-9 shadow-lg">
      <div className="mb-6 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#071A2F] text-white shadow-md [&>svg]:h-[38px] [&>svg]:w-[38px]">
        {icon}
      </div>
      <h3 className="mb-4 text-xl font-bold text-[#071A2F]">{title}</h3>
      {children}
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 5.5c0-.6.4-1 1-1h2.2c.5 0 .9.3 1 .8l.8 3a1 1 0 0 1-.3 1L7.8 10.7a12 12 0 0 0 5.5 5.5l1.4-1.4a1 1 0 0 1 1-.3l3 .8c.5.1.8.5.8 1v2.2c0 .6-.4 1-1 1C10.5 19.5 4.5 13.5 4.5 5.5Z" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 10.5v6M8 8v.01M12.5 16.5v-3.8c0-1.2.8-2.2 2-2.2s2 1 2 2.2v3.8" />
    </svg>
  );
}

function FormField({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return <label className="block text-sm font-semibold text-[#071A2F]">{label}<input name={name} type={type} required autoComplete={autoComplete} className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200" /></label>;
}
