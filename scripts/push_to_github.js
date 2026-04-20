import fs from 'fs';
import path from 'path';

const OWNER = 'sivaprasathshiva-stack';
const REPO = 'AIBOT';
const EXCLUDE = new Set(['.git', 'node_modules', '.dev.vars']);

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error('GITHUB_TOKEN not set');
  process.exit(1);
}

const api = (p, opts = {}) => fetch(`https://api.github.com${p}`, {
  headers: {
    Authorization: `token ${token}`,
    'User-Agent': 'aibot-uploader',
    Accept: 'application/vnd.github+json',
    ...(opts.headers || {})
  },
  ...opts
}).then(async r => {
  const text = await r.text();
  let json;
  try { json = text ? JSON.parse(text) : null; } catch(e) { json = text; }
  if (!r.ok) throw Object.assign(new Error(`GitHub API error ${r.status} ${p}`), { status: r.status, body: json });
  return json;
});

function walkDir(dir) {
  const entries = [];
  for (const name of fs.readdirSync(dir)) {
    if (EXCLUDE.has(name)) continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      const sub = walkDir(full);
      for (const e of sub) entries.push(e);
    } else if (stat.isFile()) {
      entries.push(full);
    }
  }
  return entries;
}

async function ensureRepo() {
  try {
    await api(`/repos/${OWNER}/${REPO}`);
    console.log('Repo exists');
  } catch (err) {
    console.log('Repo not found, creating...');
    const me = await api('/user');
    if (me.login === OWNER) {
      await api('/user/repos', { method: 'POST', body: JSON.stringify({ name: REPO, private: false }) });
      console.log('Created repo under user');
    } else {
      await api(`/orgs/${OWNER}/repos`, { method: 'POST', body: JSON.stringify({ name: REPO, private: false }) });
      console.log('Created repo under org');
    }
  }
}

async function pushAll() {
  await ensureRepo();
  const files = walkDir(process.cwd()).map(f => path.relative(process.cwd(), f).replace(/\\/g, '/'));
  console.log(`Found ${files.length} files`);

  const blobs = {};
  for (const file of files) {
    const content = fs.readFileSync(path.join(process.cwd(), file));
    const b64 = content.toString('base64');
    const res = await api(`/repos/${OWNER}/${REPO}/git/blobs`, { method: 'POST', body: JSON.stringify({ content: b64, encoding: 'base64' }) });
    blobs[file] = res.sha;
    console.log('blob', file);
  }

  const tree = files.map(f => ({ path: f, mode: '100644', type: 'blob', sha: blobs[f] }));
  const treeRes = await api(`/repos/${OWNER}/${REPO}/git/trees`, { method: 'POST', body: JSON.stringify({ tree }) });
  const treeSha = treeRes.sha;
  console.log('created tree', treeSha);

  const message = 'Initial commit from workspace';
  const commitRes = await api(`/repos/${OWNER}/${REPO}/git/commits`, { method: 'POST', body: JSON.stringify({ message, tree: treeSha, parents: [] }) });
  const commitSha = commitRes.sha;
  console.log('created commit', commitSha);

  try {
    await api(`/repos/${OWNER}/${REPO}/git/refs`, { method: 'POST', body: JSON.stringify({ ref: 'refs/heads/main', sha: commitSha }) });
    console.log('created ref main');
  } catch (err) {
    await api(`/repos/${OWNER}/${REPO}/git/refs/heads/main`, { method: 'PATCH', body: JSON.stringify({ sha: commitSha, force: true }) });
    console.log('updated ref main');
  }

  console.log(`Pushed to https://github.com/${OWNER}/${REPO}`);
}

pushAll().catch(err => { console.error(err); process.exit(1); });
