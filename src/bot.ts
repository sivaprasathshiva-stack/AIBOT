<<<<<<< HEAD
import { Bot, Context, InlineKeyboard } from "grammy";

import type { Env } from "./config";
import { getConfig } from "./config";
import {
  clearConversation,
  createDatabase,
  ensureUser,
  getDailyUsage,
  getRecentMessages,
  incrementDailyUsage,
  saveFeedback,
  saveMessage,
  saveSafetyEvent,
  setAgeVerified,
  updateProfileFacts,
  type UserRecord
} from "./db";
import { generateReply } from "./gemini";
import { buildCrisisResponse, buildWelcomeMessage, HELP_MESSAGE } from "./prompts";

function ageGateKeyboard(): InlineKeyboard {
  return new InlineKeyboard()
    .text("Yes, I'm 18+", "age_yes")
    .text("No, I'm under 18", "age_no");
}

function settingsMessage(limit: number, botName: string): string {
  return [
    `${botName} MVP settings`,
    `Daily free message limit: ${limit}`,
    "Memory: last 12 messages",
    "Mode: text-only",
    "Storage: Supabase",
    "Hosting target: Cloudflare Workers free tier"
  ].join("\n");
}

function getUsageDate(timeZone: string, date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function detectCrisis(text: string): boolean {
  return /(suicide|kill myself|end my life|hurt myself|self harm|self-harm)/i.test(text);
}

function extractFacts(text: string): Record<string, string> {
  const facts: Record<string, string> = {};
  const patterns: Array<[RegExp, string]> = [
    [/\bmy name is\s+([a-z][a-z\s'-]{1,40})/i, "name"],
    [/\bi live in\s+([a-z][a-z\s'-]{1,40})/i, "location"],
    [/\bi work as\s+([a-z][a-z\s'-]{1,60})/i, "occupation"],
    [/\bi am a\s+([a-z][a-z\s'-]{1,60})/i, "occupation"]
  ];

  for (const [pattern, key] of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) {
      facts[key] = match[1].trim();
    }
  }

  return facts;
}

async function requirePrivateChat(ctx: Context): Promise<boolean> {
  if (ctx.chat?.type !== "private") {
    await ctx.reply("This MVP is available only in private chat right now.");
    return false;
  }

  return true;
}

async function ensureEligibleUser(ctx: Context, user: UserRecord, botName: string): Promise<boolean> {
  if (user.blocked) {
    await ctx.reply("Access to this bot is currently disabled for your account.");
    return false;
  }

  if (!user.age_verified) {
    await ctx.reply(buildWelcomeMessage(botName), {
      reply_markup: ageGateKeyboard()
    });
    return false;
  }

  return true;
}

function getFrom(ctx: Context) {
  if (!ctx.from) {
    throw new Error("Missing Telegram user in update context");
  }

  return ctx.from;
}

export function buildBot(env: Env): Bot {
  const config = getConfig(env);
  const db = createDatabase(env);
  const bot = new Bot(env.TELEGRAM_BOT_TOKEN);

  bot.catch((error) => {
    console.error("Bot error", error.error);
  });

  bot.command("start", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));
    if (user.age_verified) {
      await ctx.reply("You're already verified. Send me a message whenever you want to talk.");
      return;
    }

    await ctx.reply(buildWelcomeMessage(config.botName), {
      reply_markup: ageGateKeyboard()
    });
  });

  bot.command("help", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }

    await ensureUser(db, getFrom(ctx));
    await ctx.reply(HELP_MESSAGE);
      return;
  bot.command("help", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }
    await ctx.reply(settingsMessage(config.freeDailyMessageLimit, config.botName));
    await ensureUser(db, getFrom(ctx));
    await ctx.reply(HELP_MESSAGE);
  });
  });

  bot.command("stats", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));
    if (!(await ensureEligibleUser(ctx, user, config.botName))) {
      return;
    }

    const usageDate = getUsageDate(config.timeZone);
    const used = await getDailyUsage(db, user.id, usageDate);
    const remaining = Math.max(config.freeDailyMessageLimit - used, 0);
    await ctx.reply([`Today's usage: ${used}/${config.freeDailyMessageLimit}`, `Messages left today: ${remaining}`].join("\n"));
  });

  bot.command("reset", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));
    if (!(await ensureEligibleUser(ctx, user, config.botName))) {
      return;
    }

    await clearConversation(db, user.id);
    await ctx.reply("Your current conversation history has been cleared.");
  });

  bot.command("feedback", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));
    if (!(await ensureEligibleUser(ctx, user, config.botName))) {
      return;
    }

    const feedbackText = ctx.match?.toString().trim();
    if (!feedbackText) {
      await ctx.reply("Send feedback like this: /feedback The bot should reply faster");
      return;
    }

    await saveFeedback(db, user.id, feedbackText);
    await ctx.reply("Feedback saved. Thanks.");
  });

  bot.on("callback_query:data", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      await ctx.answerCallbackQuery();
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));

    if (ctx.callbackQuery.data === "age_yes") {
      await setAgeVerified(db, user.id, true);
      await ctx.answerCallbackQuery({ text: "Verified" });
      await ctx.reply(
        [
          "Age verification complete.",
          `You can now chat with ${config.botName}.`,
          `Free daily limit: ${config.freeDailyMessageLimit} messages.`
        ].join("\n")
      );
      return;
    }

    if (ctx.callbackQuery.data === "age_no") {
      await setAgeVerified(db, user.id, false);
      await ctx.answerCallbackQuery({ text: "Access denied" });
      await ctx.reply("This bot is only available to users who are 18 or older.");
      return;
    }

    await ctx.answerCallbackQuery();
  });

  bot.on("message:text", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }

    if (ctx.message.text.startsWith("/")) {
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));
    if (!(await ensureEligibleUser(ctx, user, config.botName))) {
      return;
    }

    const usageDate = getUsageDate(config.timeZone);
    const used = await getDailyUsage(db, user.id, usageDate);
    if (used >= config.freeDailyMessageLimit) {
      await ctx.reply("You've reached today's free message limit. It resets at midnight IST.");
      return;
    }

    const facts = extractFacts(ctx.message.text);
    const profileFacts = Object.keys(facts).length
      ? await updateProfileFacts(db, user.id, user.profile_json, facts)
      : user.profile_json;

    await saveMessage(db, user.id, "user", ctx.message.text);
    await incrementDailyUsage(db, user.id, usageDate);

    if (detectCrisis(ctx.message.text)) {
      await saveSafetyEvent(db, user.id, "crisis_keywords_detected", { text: ctx.message.text });
      const crisisResponse = buildCrisisResponse(config.botName);
      await saveMessage(db, user.id, "assistant", crisisResponse);
      await ctx.reply(crisisResponse);
      return;
    }

    await ctx.replyWithChatAction("typing");

    try {
      const history = await getRecentMessages(db, user.id, 12);
      const reply = await generateReply({
        apiKey: env.GEMINI_API_KEY,
        config,
        history,
        profileFacts
      });

      await saveMessage(db, user.id, "assistant", reply);
      await ctx.reply(reply);
    } catch (error) {
      console.error("Reply generation failed", error);
      const fallback = "I hit a temporary issue generating a reply. Please try again in a moment.";
      await saveMessage(db, user.id, "assistant", fallback);
      await ctx.reply(fallback);
    }
  });

  return bot;
=======
import { Bot, Context, InlineKeyboard } from "grammy";

import type { Env } from "./config";
import { getConfig } from "./config";
import {
  clearConversation,
  createDatabase,
  ensureUser,
  getDailyUsage,
  getRecentMessages,
  incrementDailyUsage,
  saveFeedback,
  saveMessage,
  saveSafetyEvent,
  setAgeVerified,
  updateProfileFacts,
  type UserRecord
} from "./db";
import { generateReply } from "./gemini";
import { buildCrisisResponse, buildWelcomeMessage, HELP_MESSAGE } from "./prompts";

function ageGateKeyboard(): InlineKeyboard {
  return new InlineKeyboard()
    .text("Yes, I'm 18+", "age_yes")
    .text("No, I'm under 18", "age_no");
}

function settingsMessage(limit: number, botName: string): string {
  return [
    `${botName} MVP settings`,
    `Daily free message limit: ${limit}`,
    "Memory: last 12 messages",
    "Mode: text-only",
    "Storage: Supabase",
    "Hosting target: Cloudflare Workers free tier"
  ].join("\n");
}

function getUsageDate(timeZone: string, date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function detectCrisis(text: string): boolean {
  return /(suicide|kill myself|end my life|hurt myself|self harm|self-harm)/i.test(text);
}

function extractFacts(text: string): Record<string, string> {
  const facts: Record<string, string> = {};
  const patterns: Array<[RegExp, string]> = [
    [/\bmy name is\s+([a-z][a-z\s'-]{1,40})/i, "name"],
    [/\bi live in\s+([a-z][a-z\s'-]{1,40})/i, "location"],
    [/\bi work as\s+([a-z][a-z\s'-]{1,60})/i, "occupation"],
    [/\bi am a\s+([a-z][a-z\s'-]{1,60})/i, "occupation"]
  ];

  for (const [pattern, key] of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) {
      facts[key] = match[1].trim();
    }
  }

  return facts;
}

async function requirePrivateChat(ctx: Context): Promise<boolean> {
  if (ctx.chat?.type !== "private") {
    await ctx.reply("This MVP is available only in private chat right now.");
    return false;
  }

  return true;
}

async function ensureEligibleUser(ctx: Context, user: UserRecord, botName: string): Promise<boolean> {
  if (user.blocked) {
    await ctx.reply("Access to this bot is currently disabled for your account.");
    return false;
  }

  if (!user.age_verified) {
    await ctx.reply(buildWelcomeMessage(botName), {
      reply_markup: ageGateKeyboard()
    });
    return false;
  }

  return true;
}

function getFrom(ctx: Context) {
  if (!ctx.from) {
    throw new Error("Missing Telegram user in update context");
  }

  return ctx.from;
}

export async function buildBot(env: Env): Promise<Bot> {
  const config = getConfig(env);
  const db = createDatabase(env);
  const bot = new Bot(env.TELEGRAM_BOT_TOKEN);

  bot.catch((error) => {
    console.error("Bot error", error.error);
  });

  bot.command("start", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));
    if (user.age_verified) {
      await ctx.reply("You're already verified. Send me a message whenever you want to talk.");
      return;
    }

    await ctx.reply(buildWelcomeMessage(config.botName), {
      reply_markup: ageGateKeyboard()
    });
  });

  bot.command("help", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));
    if (!(await ensureEligibleUser(ctx, user, config.botName))) {
      return;
    }

    await ctx.reply(settingsMessage(config.freeDailyMessageLimit, config.botName));
    await ctx.reply(HELP_MESSAGE);
  });

  bot.command("stats", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));
    if (!(await ensureEligibleUser(ctx, user, config.botName))) {
      return;
    }

    const usageDate = getUsageDate(config.timeZone);
    const used = await getDailyUsage(db, user.id, usageDate);
    const remaining = Math.max(config.freeDailyMessageLimit - used, 0);
    await ctx.reply([`Today's usage: ${used}/${config.freeDailyMessageLimit}`, `Messages left today: ${remaining}`].join("\n"));
  });

  bot.command("reset", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));
    if (!(await ensureEligibleUser(ctx, user, config.botName))) {
      return;
    }

    await clearConversation(db, user.id);
    await ctx.reply("Your current conversation history has been cleared.");
  });

  bot.command("feedback", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));
    if (!(await ensureEligibleUser(ctx, user, config.botName))) {
      return;
    }

    const feedbackText = ctx.match?.toString().trim();
    if (!feedbackText) {
      await ctx.reply("Send feedback like this: /feedback The bot should reply faster");
      return;
    }

    await saveFeedback(db, user.id, feedbackText);
    await ctx.reply("Feedback saved. Thanks.");
  });

  bot.on("callback_query:data", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      await ctx.answerCallbackQuery();
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));

    if (ctx.callbackQuery.data === "age_yes") {
      await setAgeVerified(db, user.id, true);
      await ctx.answerCallbackQuery({ text: "Verified" });
      await ctx.reply(
        [
          "Age verification complete.",
          `You can now chat with ${config.botName}.`,
          `Free daily limit: ${config.freeDailyMessageLimit} messages.`
        ].join("\n")
      );
      return;
    }

    if (ctx.callbackQuery.data === "age_no") {
      await setAgeVerified(db, user.id, false);
      await ctx.answerCallbackQuery({ text: "Access denied" });
      await ctx.reply("This bot is only available to users who are 18 or older.");
      return;
    }

    await ctx.answerCallbackQuery();
  });

  bot.on("message:text", async (ctx) => {
    if (!(await requirePrivateChat(ctx))) {
      return;
    }

    if (ctx.message.text.startsWith("/")) {
      return;
    }

    const user = await ensureUser(db, getFrom(ctx));
    if (!(await ensureEligibleUser(ctx, user, config.botName))) {
      return;
    }

    const usageDate = getUsageDate(config.timeZone);
    const used = await getDailyUsage(db, user.id, usageDate);
    if (used >= config.freeDailyMessageLimit) {
      await ctx.reply("You've reached today's free message limit. It resets at midnight IST.");
      return;
    }

    const facts = extractFacts(ctx.message.text);
    const profileFacts = Object.keys(facts).length
      ? await updateProfileFacts(db, user.id, user.profile_json, facts)
      : user.profile_json;

    await saveMessage(db, user.id, "user", ctx.message.text);
    await incrementDailyUsage(db, user.id, usageDate);

    if (detectCrisis(ctx.message.text)) {
      await saveSafetyEvent(db, user.id, "crisis_keywords_detected", { text: ctx.message.text });
      const crisisResponse = buildCrisisResponse(config.botName);
      await saveMessage(db, user.id, "assistant", crisisResponse);
      await ctx.reply(crisisResponse);
      return;
    }

    await ctx.replyWithChatAction("typing");

    try {
      const history = await getRecentMessages(db, user.id, 12);
      const reply = await generateReply({
        apiKey: env.GEMINI_API_KEY,
        config,
        history,
        profileFacts
      });

      await saveMessage(db, user.id, "assistant", reply);
      await ctx.reply(reply);
    } catch (error) {
      console.error("Reply generation failed", error);
      const fallback = "I hit a temporary issue generating a reply. Please try again in a moment.";
      await saveMessage(db, user.id, "assistant", fallback);
      await ctx.reply(fallback);
    }
  });

  // Initialize bot (fetch bot info) so grammy won't throw on first update.
  await bot.init();

  return bot;
<<<<<<< HEAD
>>>>>>> 5c9cd90 (Initial MVP bot scaffold)
}
=======
}
>>>>>>> 3540f7e (supabase Credentials)
