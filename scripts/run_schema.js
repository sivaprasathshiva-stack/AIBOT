import { readFileSync } from 'fs';
import { join } from 'path';
import { Client } from 'pg';

const conn = process.env.PG_CONN;
if (!conn) {
  console.error('Missing PG_CONN environment variable');
  process.exit(1);
}

const sqlPath = join(process.cwd(), 'supabase', 'schema.sql');
const sql = readFileSync(sqlPath, 'utf8');

(async () => {
  const client = new Client({ connectionString: conn });
  try {
    await client.connect();
    await client.query('BEGIN');
    await client.query(sql);
    await client.query('COMMIT');
    console.log('Schema applied successfully');
  } catch (err) {
    console.error('Schema apply failed:', err.message || err);
    try { await client.query('ROLLBACK'); } catch (_) {}
    process.exit(1);
  } finally {
    await client.end();
  }
})();
