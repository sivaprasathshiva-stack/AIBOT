<<<<<<< HEAD
<<<<<<< HEAD
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import type { Env } from "./config";

export interface UserRecord {
  id: number;
  first_name: string | null;
  last_name: string | null;
  username: string | null;
  language_code: string | null;
  age_verified: boolean;
  blocked: boolean;
  profile_json: Record<string, string>;
}

export interface MessageRecord {
  role: "user" | "assistant";
  content: string;
}

export function createDatabase(env: Env): SupabaseClient {
  return createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

export async function ensureUser(
  db: SupabaseClient,
  from: {
    id: number;
    first_name?: string;
    last_name?: string;
    username?: string;
    language_code?: string;
  }
): Promise<UserRecord> {
  const payload = {
    id: from.id,
    first_name: from.first_name || null,
    last_name: from.last_name || null,
    username: from.username || null,
    language_code: from.language_code || null,
    updated_at: new Date().toISOString()
  };

  const { error } = await db.from("users").upsert(payload, { onConflict: "id" });
  if (error) {
    throw new Error(`Failed to upsert user: ${error.message}`);
  }

  const { data, error: fetchError } = await db
    .from("users")
    .select("id, first_name, last_name, username, language_code, age_verified, blocked, profile_json")
    .eq("id", from.id)
    .single();

  if (fetchError || !data) {
    throw new Error(`Failed to load user: ${fetchError?.message || "missing row"}`);
  }

  return {
    ...data,
    profile_json: (data.profile_json as Record<string, string> | null) || {}
  } as UserRecord;
}

export async function setAgeVerified(db: SupabaseClient, userId: number, ageVerified: boolean): Promise<void> {
  const { error } = await db
    .from("users")
    .update({ age_verified: ageVerified, updated_at: new Date().toISOString() })
    .eq("id", userId);

  if (error) {
    throw new Error(`Failed to update age verification: ${error.message}`);
  }
}

export async function saveMessage(
  db: SupabaseClient,
  userId: number,
  role: "user" | "assistant",
  content: string
): Promise<void> {
  const { error } = await db.from("messages").insert({ user_id: userId, role, content });
  if (error) {
    throw new Error(`Failed to save message: ${error.message}`);
  }
}

export async function getRecentMessages(db: SupabaseClient, userId: number, limit = 12): Promise<MessageRecord[]> {
  const { data, error } = await db
    .from("messages")
    .select("role, content, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(`Failed to fetch message history: ${error.message}`);
  }

  return ((data || []) as Array<MessageRecord & { created_at: string }>).reverse().map((item) => ({
    role: item.role,
    content: item.content
  }));
}

export async function clearConversation(db: SupabaseClient, userId: number): Promise<void> {
  const { error } = await db.from("messages").delete().eq("user_id", userId);
  if (error) {
    throw new Error(`Failed to clear conversation: ${error.message}`);
  }
}

export async function getDailyUsage(db: SupabaseClient, userId: number, usageDate: string): Promise<number> {
  const { data, error } = await db
    .from("daily_usage")
    .select("message_count")
    .eq("user_id", userId)
    .eq("usage_date", usageDate)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to get daily usage: ${error.message}`);
  }

  return data?.message_count || 0;
}

export async function incrementDailyUsage(db: SupabaseClient, userId: number, usageDate: string): Promise<number> {
  const currentCount = await getDailyUsage(db, userId, usageDate);
  const nextCount = currentCount + 1;

  const { error } = await db
    .from("daily_usage")
    .upsert({ user_id: userId, usage_date: usageDate, message_count: nextCount }, { onConflict: "user_id,usage_date" });

  if (error) {
    throw new Error(`Failed to increment daily usage: ${error.message}`);
  }

  return nextCount;
}

export async function saveFeedback(db: SupabaseClient, userId: number, feedbackText: string): Promise<void> {
  const { error } = await db.from("feedback").insert({ user_id: userId, feedback_text: feedbackText });
  if (error) {
    throw new Error(`Failed to save feedback: ${error.message}`);
  }
}

export async function saveSafetyEvent(
  db: SupabaseClient,
  userId: number,
  eventType: string,
  payload: Record<string, unknown>
): Promise<void> {
  const { error } = await db.from("safety_events").insert({ user_id: userId, event_type: eventType, payload });
  if (error) {
    throw new Error(`Failed to save safety event: ${error.message}`);
  }
}

export async function updateProfileFacts(
  db: SupabaseClient,
  userId: number,
  currentFacts: Record<string, string>,
  nextFacts: Record<string, string>
): Promise<Record<string, string>> {
  const mergedFacts = { ...currentFacts, ...nextFacts };

  const { error } = await db
    .from("users")
    .update({ profile_json: mergedFacts, updated_at: new Date().toISOString() })
    .eq("id", userId);

  if (error) {
    throw new Error(`Failed to update profile facts: ${error.message}`);
  }

  return mergedFacts;
=======
=======
>>>>>>> 3540f7e22559535ffa2529479b37bcc3d9775d2d
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import type { Env } from "./config";

export interface UserRecord {
  id: number;
  first_name: string | null;
  last_name: string | null;
  username: string | null;
  language_code: string | null;
  age_verified: boolean;
  blocked: boolean;
  profile_json: Record<string, string>;
}

export interface MessageRecord {
  role: "user" | "assistant";
  content: string;
}

export function createDatabase(env: Env): SupabaseClient {
  return createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

export async function ensureUser(
  db: SupabaseClient,
  from: {
    id: number;
    first_name?: string;
    last_name?: string;
    username?: string;
    language_code?: string;
  }
): Promise<UserRecord> {
  const payload = {
    id: from.id,
    first_name: from.first_name || null,
    last_name: from.last_name || null,
    username: from.username || null,
    language_code: from.language_code || null,
    updated_at: new Date().toISOString()
  };

  const { error } = await db.from("users").upsert(payload, { onConflict: "id" });
  if (error) {
    throw new Error(`Failed to upsert user: ${error.message}`);
  }

  const { data, error: fetchError } = await db
    .from("users")
    .select("id, first_name, last_name, username, language_code, age_verified, blocked, profile_json")
    .eq("id", from.id)
    .single();

  if (fetchError || !data) {
    throw new Error(`Failed to load user: ${fetchError?.message || "missing row"}`);
  }

  return {
    ...data,
    profile_json: (data.profile_json as Record<string, string> | null) || {}
  } as UserRecord;
}

export async function setAgeVerified(db: SupabaseClient, userId: number, ageVerified: boolean): Promise<void> {
  const { error } = await db
    .from("users")
    .update({ age_verified: ageVerified, updated_at: new Date().toISOString() })
    .eq("id", userId);

  if (error) {
    throw new Error(`Failed to update age verification: ${error.message}`);
  }
}

export async function saveMessage(
  db: SupabaseClient,
  userId: number,
  role: "user" | "assistant",
  content: string
): Promise<void> {
  const { error } = await db.from("messages").insert({ user_id: userId, role, content });
  if (error) {
    throw new Error(`Failed to save message: ${error.message}`);
  }
}

export async function getRecentMessages(db: SupabaseClient, userId: number, limit = 12): Promise<MessageRecord[]> {
  const { data, error } = await db
    .from("messages")
    .select("role, content, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(`Failed to fetch message history: ${error.message}`);
  }

  return ((data || []) as Array<MessageRecord & { created_at: string }>).reverse().map((item) => ({
    role: item.role,
    content: item.content
  }));
}

export async function clearConversation(db: SupabaseClient, userId: number): Promise<void> {
  const { error } = await db.from("messages").delete().eq("user_id", userId);
  if (error) {
    throw new Error(`Failed to clear conversation: ${error.message}`);
  }
}

export async function getDailyUsage(db: SupabaseClient, userId: number, usageDate: string): Promise<number> {
  const { data, error } = await db
    .from("daily_usage")
    .select("message_count")
    .eq("user_id", userId)
    .eq("usage_date", usageDate)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to get daily usage: ${error.message}`);
  }

  return data?.message_count || 0;
}

export async function incrementDailyUsage(db: SupabaseClient, userId: number, usageDate: string): Promise<number> {
  const currentCount = await getDailyUsage(db, userId, usageDate);
  const nextCount = currentCount + 1;

  const { error } = await db
    .from("daily_usage")
    .upsert({ user_id: userId, usage_date: usageDate, message_count: nextCount }, { onConflict: "user_id,usage_date" });

  if (error) {
    throw new Error(`Failed to increment daily usage: ${error.message}`);
  }

  return nextCount;
}

export async function saveFeedback(db: SupabaseClient, userId: number, feedbackText: string): Promise<void> {
  const { error } = await db.from("feedback").insert({ user_id: userId, feedback_text: feedbackText });
  if (error) {
    throw new Error(`Failed to save feedback: ${error.message}`);
  }
}

export async function saveSafetyEvent(
  db: SupabaseClient,
  userId: number,
  eventType: string,
  payload: Record<string, unknown>
): Promise<void> {
  const { error } = await db.from("safety_events").insert({ user_id: userId, event_type: eventType, payload });
  if (error) {
    throw new Error(`Failed to save safety event: ${error.message}`);
  }
}

export async function updateProfileFacts(
  db: SupabaseClient,
  userId: number,
  currentFacts: Record<string, string>,
  nextFacts: Record<string, string>
): Promise<Record<string, string>> {
  const mergedFacts = { ...currentFacts, ...nextFacts };

  const { error } = await db
    .from("users")
    .update({ profile_json: mergedFacts, updated_at: new Date().toISOString() })
    .eq("id", userId);

  if (error) {
    throw new Error(`Failed to update profile facts: ${error.message}`);
  }

  return mergedFacts;
<<<<<<< HEAD
>>>>>>> 5c9cd90 (Initial MVP bot scaffold)
=======
>>>>>>> 3540f7e22559535ffa2529479b37bcc3d9775d2d
}