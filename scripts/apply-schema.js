#!/usr/bin/env node
import fs from 'fs/promises';
import { Client } from 'pg';
import { fileURLToPath } from 'url';

async function main() {
  const host = process.env.DB_HOST || 'db.xphwixmfafhgquivmqno.supabase.co';
  const port = process.env.DB_PORT || '5432';
  const database = process.env.DB_NAME || 'postgres';
  const user = process.env.DB_USER || 'postgres';
  const password = process.env.DB_PASSWORD;

  if (!password) {
    console.error('Missing DB_PASSWORD environment variable. Will not run.');
    process.exit(1);
  }

  const schemaPath = fileURLToPath(new URL('../supabase/schema.sql', import.meta.url));
  let sql;
  try {
    sql = await fs.readFile(schemaPath, 'utf8');
  } catch (err) {
    console.error('Failed to read schema.sql:', err.message);
    process.exit(1);
  }

  const connectionString = `postgresql://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}:${port}/${database}`;

  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });

  try {
    await client.connect();
    console.log('Connected to database. Applying schema...');
    await client.query('BEGIN');
    await client.query(sql);
    await client.query('COMMIT');
    console.log('Schema applied successfully.');
  } catch (err) {
    console.error('Error applying schema:', err.message);
    try { await client.query('ROLLBACK'); } catch (e) {}
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
