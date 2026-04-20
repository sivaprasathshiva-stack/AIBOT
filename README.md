# Ananya Telegram Bot MVP

This workspace now contains a free-only MVP scaffold for a Telegram bot built on:

- Telegram Bot API
- TypeScript
- grammY
- Cloudflare Workers Free
- Supabase Free
- Gemini Developer API free tier

## MVP scope

Included:

- Telegram DM-only bot
- `/start`, `/help`, `/settings`, `/stats`, `/reset`, `/feedback`
- 18+ age gate
- free daily message limit
- short conversation memory from Supabase
- basic fact extraction for name, location, occupation
- crisis keyword fallback
- webhook-ready Cloudflare Worker runtime

Excluded for now:

- payments
- voice
- image generation
- advanced RAG
- admin dashboard
- premium plans

## Free services required

1. Telegram bot from BotFather
2. Cloudflare account for Workers free plan
3. Supabase free project
4. Gemini API key from Google AI Studio free tier

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.dev.vars.example` to `.dev.vars` and fill in the secrets.

3. Apply the database schema in your Supabase SQL editor:

- [supabase/schema.sql](supabase/schema.sql)

4. Start local development:

```bash
npm run dev
```

## Local Telegram testing

Telegram needs a public webhook URL. The simplest free local workflow for this project is to use Wrangler remote dev.

1. Login to Cloudflare once:

```bash
npx wrangler login
```

2. Start a remote dev session:

```bash
npm run dev:remote
```

3. Copy the preview URL shown by Wrangler.

4. Register Telegram to that URL directly without editing `.dev.vars`:

```bash
npm run webhook:set -- https://your-preview-url
```

That command registers:

```text
https://your-preview-url/telegram/webhook
```

5. Message your bot in Telegram and watch the local terminal logs.

6. When you are done, remove the webhook:

```bash
npm run webhook:delete
```

Notes:

- `npm run dev` is still useful for non-Telegram endpoint checks such as `/health`.
- `npm run dev:remote` is the correct mode when Telegram needs to reach your worker.
- If you prefer, you can still set `APP_URL` in `.dev.vars` and run `npm run webhook:set` with no extra argument.

## Deploy on Cloudflare Workers free tier

1. Login to Cloudflare:

```bash
npx wrangler login
```

2. Set production secrets:

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_WEBHOOK_SECRET
npx wrangler secret put GEMINI_API_KEY
npx wrangler secret put SUPABASE_URL
npx wrangler secret put SUPABASE_SERVICE_ROLE_KEY
```

3. Deploy:

```bash
npm run deploy
```

4. Set `APP_URL` to your deployed Worker URL in `.dev.vars` or shell env.

5. Register the webhook:

```bash
npm run webhook:set
```

## Telegram BotFather checklist

Configure these in BotFather:

- profile photo
- description
- about text
- commands

Suggested command list:

```text
start - start the bot
help - show help
settings - show settings
stats - show usage
reset - clear current chat
feedback - send product feedback
```

## Important notes

- This MVP is intentionally DM-only.
- The current limit is free-only and hard capped per day.
- The bot stores chat data in Supabase, so you need a Privacy Policy before public launch.
- Crisis handling here is basic. For a public emotional-support product, upgrade this before scale.

## Key files

- [src/index.ts](src/index.ts)
- [src/bot.ts](src/bot.ts)
- [src/db.ts](src/db.ts)
- [src/gemini.ts](src/gemini.ts)
- [src/prompts.ts](src/prompts.ts)
- [supabase/schema.sql](supabase/schema.sql)