import { neon } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL || process.env.DEPOLAMA_URL;

if (!connectionString) throw new Error("DATABASE_URL veya DEPOLAMA_URL tanımlı değil.");

export const sql = neon(connectionString);

let initialized = false;

export async function initializeDatabase() {
  if (initialized) return;
  await sql`CREATE TABLE IF NOT EXISTS comments (id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, comment TEXT NOT NULL, page TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'pending', created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
  await sql`CREATE TABLE IF NOT EXISTS contact_messages (id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, subject TEXT NOT NULL, message TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'new', created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
  await sql`CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, title TEXT NOT NULL, slug TEXT UNIQUE NOT NULL, excerpt TEXT NOT NULL, content TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'draft', created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), published_at TIMESTAMPTZ)`;
  initialized = true;
}
