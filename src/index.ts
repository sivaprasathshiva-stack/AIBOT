import { buildBot } from "./bot";
import { Bot } from "grammy";
import type { Env } from "./config";
import { validateEnv } from "./config";

let cachedToken: string | null = null;
let cachedBot: Bot | null = null;

async function getBot(env: Env): Promise<Bot> {
  if (!cachedBot || cachedToken !== env.TELEGRAM_BOT_TOKEN) {
    cachedBot = await buildBot(env);
    cachedToken = env.TELEGRAM_BOT_TOKEN;
  }

  return cachedBot;
}

function isWebhookAuthorized(request: Request, env: Env): boolean {
  if (!env.TELEGRAM_WEBHOOK_SECRET) {
    return true;
  }

  return request.headers.get("x-telegram-bot-api-secret-token") === env.TELEGRAM_WEBHOOK_SECRET;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      validateEnv(env);
    } catch (error) {
      return new Response(String(error instanceof Error ? error.message : error), { status: 500 });
    }

    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/health") {
      return Response.json({ ok: true, service: "ananya-telegram-bot" });
    }

    if (request.method === "POST" && url.pathname === "/telegram/webhook") {
      if (!isWebhookAuthorized(request, env)) {
        return new Response("Unauthorized", { status: 401 });
      }

      const update = await request.json();
      const bot = await getBot(env);
      await bot.handleUpdate(update);
      return new Response("OK");
    }

    return new Response("Not found", { status: 404 });
  }
};