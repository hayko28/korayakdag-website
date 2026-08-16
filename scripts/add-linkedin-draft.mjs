// LinkedIn taslağını doğrudan veritabanındaki linkedin_drafts tablosuna ekler.
// Next.js API/admin-auth katmanını atlar — Bash-only ortamlarda (ör. zamanlanmış
// bulut ajanları) kullanılmak için. /yonetim panelinin okuduğu tabloyla aynıdır.
//
// Kullanım: node scripts/add-linkedin-draft.mjs <json-dosya-yolu>
// JSON alanları: tarih (zorunlu), icerik (zorunlu), kaynakBaslik (zorunlu),
// kaynakUrl (opsiyonel), gorselUrl (opsiyonel), videoUrl (opsiyonel)

import { readFile } from "node:fs/promises";
import { neon } from "@neondatabase/serverless";

const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error("Kullanım: node scripts/add-linkedin-draft.mjs <json-dosya-yolu>");
  process.exit(1);
}

const connectionString =
  process.env.DATABASE_POSTGRES_URL || process.env.DATABASE_URL || process.env.DEPOLAMA_URL;
if (!connectionString) {
  console.error("DATABASE_URL, DATABASE_POSTGRES_URL veya DEPOLAMA_URL tanımlı değil.");
  process.exit(1);
}

const raw = await readFile(jsonPath, "utf-8");
const { tarih, icerik, kaynakBaslik, kaynakUrl, gorselUrl, videoUrl } = JSON.parse(raw);

if (!tarih || !icerik || !kaynakBaslik) {
  console.error("Eksik alan: tarih, icerik ve kaynakBaslik zorunlu.");
  process.exit(1);
}

const sql = neon(connectionString);

await sql`CREATE TABLE IF NOT EXISTS linkedin_drafts (id SERIAL PRIMARY KEY, tarih TEXT NOT NULL, icerik TEXT NOT NULL, kaynak_baslik TEXT NOT NULL, kaynak_url TEXT, gorsel_url TEXT, video_url TEXT, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;

const rows = await sql`
  INSERT INTO linkedin_drafts (tarih, icerik, kaynak_baslik, kaynak_url, gorsel_url, video_url)
  VALUES (${tarih}, ${icerik}, ${kaynakBaslik}, ${kaynakUrl ?? null}, ${gorselUrl ?? null}, ${videoUrl ?? null})
  RETURNING id
`;

console.log("Eklendi, id:", rows[0].id);
