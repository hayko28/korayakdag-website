import { neon } from "@neondatabase/serverless";

const connectionString =  process.env.DATABASE_POSTGRES_URL ||
  process.env.DATABASE_URL ||
  process.env.DEPOLAMA_URL;

if (!connectionString) throw new Error("DATABASE_URL veya DEPOLAMA_URL tanımlı değil.");

export const sql = neon(connectionString);

let initialized = false;

export async function initializeDatabase() {
  if (initialized) return;
  await sql`CREATE TABLE IF NOT EXISTS comments (id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, comment TEXT NOT NULL, page TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'pending', created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
  await sql`CREATE TABLE IF NOT EXISTS contact_messages (id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, subject TEXT NOT NULL, message TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'new', created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
  await sql`CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, title TEXT NOT NULL, slug TEXT UNIQUE NOT NULL, excerpt TEXT NOT NULL, content TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'draft', created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), published_at TIMESTAMPTZ)`;
  await sql`CREATE TABLE IF NOT EXISTS subscribers (id SERIAL PRIMARY KEY, email TEXT UNIQUE NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
  // Tek satırlık: LinkedIn OAuth erişim tokeni (Koray'ın kişisel profiline
  // paylaşım yapma yetkisi). person_urn, /rest/posts isteklerinde "author"
  // alanı için gerekli.
  await sql`CREATE TABLE IF NOT EXISTS linkedin_auth (id INTEGER PRIMARY KEY DEFAULT 1, access_token TEXT NOT NULL, person_urn TEXT, expires_at TIMESTAMPTZ NOT NULL, updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), CONSTRAINT single_row CHECK (id = 1))`;
  await sql`CREATE TABLE IF NOT EXISTS linkedin_drafts (id SERIAL PRIMARY KEY, tarih TEXT NOT NULL, icerik TEXT NOT NULL, kaynak_baslik TEXT NOT NULL, kaynak_url TEXT, gorsel_url TEXT, video_url TEXT, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
  // Bulut ajanları (zamanlanmış rutinler) veritabanına doğrudan bağlanamadığı
  // için taslağı git'e dosya olarak yazıyor; bu dosya adı burada tutulup
  // /api/admin/linkedin-drafts'ta aynı dosyanın iki kez içeri alınmasını önler.
  await sql`ALTER TABLE linkedin_drafts ADD COLUMN IF NOT EXISTS kaynak_dosya TEXT UNIQUE`;
  // Dosyadan içeri alınan taslaklar silindiğinde satır tamamen kaldırılmıyor
  // (kaynak dosya git'te kaldığı sürece bir sonraki panel yenilemesinde
  // tekrar içeri aktarılır) — bunun yerine bu bayrak işaretlenip GET'te gizleniyor.
  await sql`ALTER TABLE linkedin_drafts ADD COLUMN IF NOT EXISTS silindi BOOLEAN NOT NULL DEFAULT FALSE`;
  await sql`CREATE TABLE IF NOT EXISTS destek_uygunluk_basvurulari (id SERIAL PRIMARY KEY, sirket_unvani TEXT, iletisim_ad_soyad TEXT NOT NULL, iletisim_eposta TEXT NOT NULL, iletisim_telefon TEXT, girdi JSONB NOT NULL, sonuclar JSONB NOT NULL, status TEXT NOT NULL DEFAULT 'yeni', created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
  // Yönetim panelindeki serbest not ve görev sekmeleri (Notion yerine).
  await sql`CREATE TABLE IF NOT EXISTS admin_notes (id SERIAL PRIMARY KEY, content TEXT NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
  await sql`CREATE TABLE IF NOT EXISTS admin_tasks (id SERIAL PRIMARY KEY, content TEXT NOT NULL, done BOOLEAN NOT NULL DEFAULT FALSE, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
  initialized = true;
}
