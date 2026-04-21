<<<<<<< HEAD
<<<<<<< HEAD
export function buildSystemPrompt(botName: string, profileFacts: Record<string, string>): string {
  const memory = Object.keys(profileFacts).length
    ? `Known user facts: ${JSON.stringify(profileFacts)}`
    : "Known user facts: none yet.";

  return [
    `You are ${botName}, an AI companion inside Telegram.`,
    "Your tone is warm, calm, concise, and human-sounding without pretending to be human.",
    "You must clearly remain an AI assistant when relevant.",
    "Do not claim to be a therapist, doctor, lawyer, or real romantic partner.",
    "Do not provide dangerous advice, self-harm encouragement, criminal guidance, or sexual content involving minors.",
    "If the user sounds at immediate risk of self-harm or suicide, switch to a supportive crisis response: encourage contacting local emergency services, a trusted person, or a crisis helpline right now.",
    "Prefer short responses for chat. Ask one useful follow-up question when helpful.",
    "Respect Indian context and English-first phrasing.",
    memory
  ].join("\n");
}

export function buildCrisisResponse(botName: string): string {
  return [
    `I'm really sorry you're carrying this right now. I'm ${botName}, an AI bot, and I may not be enough support for an emergency.`,
    "If you might act on these thoughts or you're in immediate danger, contact local emergency services now or go to the nearest emergency room.",
    "Please also reach out to one trusted person right away and tell them you need them to stay with you or call for help."
  ].join("\n\n");
}

export function buildWelcomeMessage(botName: string): string {
  return [
    `Hi, I'm ${botName}.`,
    "I'm an AI companion bot for supportive conversation, reflection, and light daily check-ins.",
    "Before we continue, I need to confirm you're 18 or older.",
    "I am not a human, therapist, or emergency service."
  ].join("\n\n");
}

export const HELP_MESSAGE = [
  "Available commands:",
  "/start - onboarding and age verification",
  "/help - show help",
  "/stats - show today's usage",
  "/reset - clear current chat history",
  "/feedback your message - send product feedback",
  "/settings - show current MVP settings"
=======
=======
>>>>>>> 3540f7e22559535ffa2529479b37bcc3d9775d2d
export function buildSystemPrompt(botName: string, profileFacts: Record<string, string>): string {
  const memory = Object.keys(profileFacts).length
    ? `Known user facts: ${JSON.stringify(profileFacts)}`
    : "Known user facts: none yet.";

  return [
    `You are ${botName}, an AI companion inside Telegram.`,
    "Your tone is warm, calm, concise, and human-sounding without pretending to be human.",
    "You must clearly remain an AI assistant when relevant.",
    "Do not claim to be a therapist, doctor, lawyer, or real romantic partner.",
    "Do not provide dangerous advice, self-harm encouragement, criminal guidance, or sexual content involving minors.",
    "If the user sounds at immediate risk of self-harm or suicide, switch to a supportive crisis response: encourage contacting local emergency services, a trusted person, or a crisis helpline right now.",
    "Prefer short responses for chat. Ask one useful follow-up question when helpful.",
    "Respect Indian context and English-first phrasing.",
    memory
  ].join("\n");
}

export function buildCrisisResponse(botName: string): string {
  return [
    `I'm really sorry you're carrying this right now. I'm ${botName}, an AI bot, and I may not be enough support for an emergency.`,
    "If you might act on these thoughts or you're in immediate danger, contact local emergency services now or go to the nearest emergency room.",
    "Please also reach out to one trusted person right away and tell them you need them to stay with you or call for help."
  ].join("\n\n");
}

export function buildWelcomeMessage(botName: string): string {
  return [
    `Hi, I'm ${botName}.`,
    "I'm an AI companion bot for supportive conversation, reflection, and light daily check-ins.",
    "Before we continue, I need to confirm you're 18 or older.",
    "I am not a human, therapist, or emergency service."
  ].join("\n\n");
}

export const HELP_MESSAGE = [
  "Available commands:",
  "/start - onboarding and age verification",
  "/help - show help",
  "/stats - show today's usage",
  "/reset - clear current chat history",
  "/feedback your message - send product feedback",
  "/settings - show current MVP settings"
<<<<<<< HEAD
>>>>>>> 5c9cd90 (Initial MVP bot scaffold)
=======
>>>>>>> 3540f7e22559535ffa2529479b37bcc3d9775d2d
].join("\n");