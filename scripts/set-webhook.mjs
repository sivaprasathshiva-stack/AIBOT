<<<<<<< HEAD
<<<<<<< HEAD
import { existsSync, readFileSync } from "node:fs";

function loadDevVars() {
  const path = ".dev.vars";
  if (!existsSync(path)) {
    return;
  }

  const lines = readFileSync(path, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

loadDevVars();

const token = process.env.TELEGRAM_BOT_TOKEN;
const cliUrl = process.argv[2]?.trim();
const appUrl = cliUrl || process.env.APP_URL;
const secretToken = process.env.TELEGRAM_WEBHOOK_SECRET;

if (!token || !appUrl) {
  console.error("Missing TELEGRAM_BOT_TOKEN or APP_URL. You can also pass the URL directly: node scripts/set-webhook.mjs https://your-url");
  process.exit(1);
}

const response = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify({
    url: `${appUrl.replace(/\/$/, "")}/telegram/webhook`,
    secret_token: secretToken,
    drop_pending_updates: false,
    allowed_updates: ["message", "callback_query"]
  })
});

const data = await response.json();
=======
=======
>>>>>>> 3540f7e22559535ffa2529479b37bcc3d9775d2d
import { existsSync, readFileSync } from "node:fs";

function loadDevVars() {
  const path = ".dev.vars";
  if (!existsSync(path)) {
    return;
  }

  const lines = readFileSync(path, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

loadDevVars();

const token = process.env.TELEGRAM_BOT_TOKEN;
const cliUrl = process.argv[2]?.trim();
const appUrl = cliUrl || process.env.APP_URL;
const secretToken = process.env.TELEGRAM_WEBHOOK_SECRET;

if (!token || !appUrl) {
  console.error("Missing TELEGRAM_BOT_TOKEN or APP_URL. You can also pass the URL directly: node scripts/set-webhook.mjs https://your-url");
  process.exit(1);
}

const response = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify({
    url: `${appUrl.replace(/\/$/, "")}/telegram/webhook`,
    secret_token: secretToken,
    drop_pending_updates: false,
    allowed_updates: ["message", "callback_query"]
  })
});

const data = await response.json();
<<<<<<< HEAD
>>>>>>> 5c9cd90 (Initial MVP bot scaffold)
=======
>>>>>>> 3540f7e22559535ffa2529479b37bcc3d9775d2d
console.log(JSON.stringify(data, null, 2));