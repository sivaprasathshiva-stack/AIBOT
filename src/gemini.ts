import type { AppConfig } from "./config";
import { buildSystemPrompt } from "./prompts";
import type { MessageRecord } from "./db";

interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
}

export async function generateReply(input: {
  apiKey: string;
  config: AppConfig;
  history: MessageRecord[];
  profileFacts: Record<string, string>;
}): Promise<string> {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${input.config.geminiModel}:generateContent?key=${encodeURIComponent(input.apiKey)}`;
  const systemPrompt = buildSystemPrompt(input.config.botName, input.profileFacts);

  const contents = input.history.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }]
  }));

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
      contents,
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 220,
        topP: 0.95
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini request failed: ${response.status} ${errorText}`);
  }

  const data = (await response.json()) as GeminiResponse;
  const reply = data.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("\n").trim();

  if (!reply) {
    throw new Error("Gemini returned an empty response");
  }

  return reply;
}