<<<<<<< HEAD
<<<<<<< HEAD
export interface Env {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_WEBHOOK_SECRET?: string;
  APP_URL?: string;
  GEMINI_API_KEY: string;
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  BOT_NAME?: string;
  DEFAULT_TIMEZONE?: string;
  FREE_DAILY_MESSAGE_LIMIT?: string;
  GEMINI_MODEL?: string;
  ADMIN_CHAT_ID?: string;
}

export interface AppConfig {
  botName: string;
  timeZone: string;
  freeDailyMessageLimit: number;
  geminiModel: string;
}

export function getConfig(env: Env): AppConfig {
  return {
    botName: env.BOT_NAME || "Ananya",
    timeZone: env.DEFAULT_TIMEZONE || "Asia/Kolkata",
    freeDailyMessageLimit: Number.parseInt(env.FREE_DAILY_MESSAGE_LIMIT || "50", 10),
    geminiModel: env.GEMINI_MODEL || "gemini-2.5-flash-lite"
  };
}

export function validateEnv(env: Env): void {
  const required = [
    "TELEGRAM_BOT_TOKEN",
    "GEMINI_API_KEY",
    "SUPABASE_URL",
    "SUPABASE_SERVICE_ROLE_KEY"
  ] as const;

  for (const key of required) {
    if (!env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }
=======
=======
>>>>>>> 3540f7e22559535ffa2529479b37bcc3d9775d2d
export interface Env {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_WEBHOOK_SECRET?: string;
  APP_URL?: string;
  GEMINI_API_KEY: string;
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  BOT_NAME?: string;
  DEFAULT_TIMEZONE?: string;
  FREE_DAILY_MESSAGE_LIMIT?: string;
  GEMINI_MODEL?: string;
  ADMIN_CHAT_ID?: string;
}

export interface AppConfig {
  botName: string;
  timeZone: string;
  freeDailyMessageLimit: number;
  geminiModel: string;
}

export function getConfig(env: Env): AppConfig {
  return {
    botName: env.BOT_NAME || "Ananya",
    timeZone: env.DEFAULT_TIMEZONE || "Asia/Kolkata",
    freeDailyMessageLimit: Number.parseInt(env.FREE_DAILY_MESSAGE_LIMIT || "50", 10),
    geminiModel: env.GEMINI_MODEL || "gemini-2.5-flash-lite"
  };
}

export function validateEnv(env: Env): void {
  const required = [
    "TELEGRAM_BOT_TOKEN",
    "GEMINI_API_KEY",
    "SUPABASE_URL",
    "SUPABASE_SERVICE_ROLE_KEY"
  ] as const;

  for (const key of required) {
    if (!env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 5c9cd90 (Initial MVP bot scaffold)
}
=======
=======
>>>>>>> 3540f7e22559535ffa2529479b37bcc3d9775d2d
}

// Fallback values for local development. These are populated from `.dev.vars` or
// the workspace for convenience. You can remove these defaults in production.
<<<<<<< HEAD
// No local fallback secrets: use Cloudflare secrets or .dev.vars for development.
>>>>>>> 3540f7e (supabase Credentials)
=======
// No local fallback secrets: use Cloudflare secrets or .dev.vars for development.
>>>>>>> 3540f7e22559535ffa2529479b37bcc3d9775d2d
