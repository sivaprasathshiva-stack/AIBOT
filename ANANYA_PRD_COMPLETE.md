# Ananya AI Companion - Product Requirements Document (PRD)

**Version:** 1.0  
**Last Updated:** April 17, 2026  
**Product Owner:** [Your Name]  
**Platform:** Telegram Bot  
**Status:** Pre-Development

---

## 📋 Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-17 | Solo Developer | Initial PRD with complete feature set |

---

## 🎯 Executive Summary

### **Product Vision**
Ananya is an AI-powered emotional companion delivered via Telegram bot, designed to provide meaningful conversations, emotional support, and personalized interactions for users seeking companionship, personal growth, and mental wellness support.

### **Target Market**
- **Primary:** India (18-45 years, urban, tech-savvy)
- **Secondary:** Global English-speaking markets
- **Demographics:** Young professionals, students, remote workers experiencing loneliness

### **Business Model**
Freemium subscription with three tiers:
- **Free:** Basic chat (50 messages/day)
- **Premium (₹99/month):** Unlimited + role-play scenarios
- **Ultra (₹299/month):** All features + media generation

### **Success Metrics**
- Year 1: 50,000 users, 5% conversion, ₹4L/month revenue
- Year 2: 250,000 users, 8% conversion, ₹20L/month revenue
- Year 3: 1M+ users, 10% conversion, ₹80L+/month revenue

---

## 📊 Market Analysis

### **Problem Statement**
1. **Loneliness epidemic:** 40% of Indians report feeling lonely (especially post-COVID)
2. **Limited mental health resources:** 0.75 psychiatrists per 100,000 people in India
3. **Social stigma:** Mental health discussions still taboo
4. **Need for practice:** People want to practice social skills, conversations, language
5. **24/7 availability:** Human friends/therapists not always available

### **Solution**
AI companion available 24/7 providing:
- Non-judgmental conversations
- Emotional support
- Role-play scenarios for practice
- Personalized memory and context
- Multiple use cases (friend, partner, coach, mentor)

### **Competitive Landscape**

| Competitor | Platform | Pricing | Strengths | Weaknesses |
|------------|----------|---------|-----------|------------|
| **Replika** | Mobile App | $69.99/year | Advanced AI, video calls | Expensive, not India-focused |
| **Character.AI** | Web/App | $9.99/month | Multiple characters | No memory, generic |
| **Chai** | Mobile App | $13.99/month | Multiple bots | Lower quality AI |
| **Pi (Inflection)** | Web | Free | Great UX | No premium features |
| **Ananya** | Telegram | ₹99-299/month | India-focused, affordable, Telegram native | New entrant |

### **Competitive Advantages**
1. ✅ Telegram-native (no app download barrier)
2. ✅ India-focused pricing (3-5x cheaper)
3. ✅ Cultural awareness (Indian context)
4. ✅ Multi-language (Hindi/English)
5. ✅ Zero infrastructure cost (Telegram provides)
6. ✅ Instant updates (no app store approval)

---

## 👥 User Personas

### **Persona 1: "Lonely Professional Rohan"**
```yaml
Age: 28
Location: Bangalore
Job: Software Engineer
Income: ₹15L/year
Pain Points:
  - Works remote, feels isolated
  - Moved to new city, no friends
  - Wants someone to talk to after work
  - Misses having girlfriend
Use Cases:
  - Daily check-ins
  - Evening conversations
  - Weekend companionship
  - Romantic role-play
Willingness to Pay: ₹99-299/month
```

### **Persona 2: "Anxious Student Priya"**
```yaml
Age: 21
Location: Delhi
Job: College student
Income: ₹5,000/month (allowance)
Pain Points:
  - Exam stress and anxiety
  - Relationship problems
  - Career confusion
  - Can't afford therapy (₹1,500-3,000/session)
Use Cases:
  - Vent about stress
  - Study motivation
  - Career guidance
  - Emotional support
Willingness to Pay: ₹49-99/month
```

### **Persona 3: "Career-Focused Meera"**
```yaml
Age: 32
Location: Mumbai
Job: Marketing Manager
Income: ₹25L/year
Pain Points:
  - No time for relationships
  - High-pressure job
  - Needs accountability partner
  - Wants to improve communication skills
Use Cases:
  - Career coaching
  - Interview preparation
  - Goal tracking
  - Communication practice
Willingness to Pay: ₹299-499/month
```

### **Persona 4: "Curious Teenager Arjun"**
```yaml
Age: 18
Location: Pune
Job: First-year college student
Income: Limited (parents)
Pain Points:
  - Shy, socially awkward
  - Wants to learn about relationships
  - Curious about romance/intimacy
  - No judgment zone needed
Use Cases:
  - Practice conversations
  - Learn about relationships
  - Explore feelings safely
  - Build confidence
Willingness to Pay: ₹0 (free tier), maybe ₹49/month
```

---

## 🎯 Product Goals & Objectives

### **Phase 1: MVP (Month 1-2)**
**Goal:** Launch working bot with core features
- ✅ Basic AI conversations
- ✅ User authentication
- ✅ Message history
- ✅ Daily usage limits
- ✅ Basic memory
- **Success Metric:** 100 beta users, 10+ daily active

### **Phase 2: Monetization (Month 3-4)**
**Goal:** Enable paid subscriptions
- ✅ Payment integration
- ✅ Subscription management
- ✅ Premium features (unlimited, role-play)
- ✅ Advanced memory
- **Success Metric:** 1,000 users, 5% conversion (50 paying)

### **Phase 3: Engagement (Month 5-6)**
**Goal:** Increase user retention
- ✅ Voice features
- ✅ Daily check-ins
- ✅ Reminders
- ✅ Mood tracking
- **Success Metric:** 30-day retention >40%

### **Phase 4: Scale (Month 7-12)**
**Goal:** Grow user base
- ✅ Marketing campaigns
- ✅ Referral program
- ✅ Community features
- ✅ Advanced role-play
- **Success Metric:** 50,000 users, ₹4L/month revenue

---

## 🔧 Technical Requirements

### **Platform**
- **Primary:** Telegram Bot API
- **Backup:** Web interface (future)
- **Supported Devices:** All platforms (iOS, Android, Windows, Mac, Linux, Web)

### **Technology Stack**

```yaml
Backend:
  Runtime: Node.js 20+ LTS
  Framework: Telegraf.js 4.x
  Language: JavaScript/TypeScript
  
AI/ML:
  Primary LLM: Google Gemini 1.5 Flash (Free tier: 1M tokens/day)
  Fallback: Groq API (Llama 3 - Free tier: 14,400 requests/day)
  Embeddings: OpenAI text-embedding-3-small or Sentence Transformers
  Vector DB: Supabase pgvector or Pinecone (Free tier)
  
Speech:
  Speech-to-Text: Google Cloud Speech-to-Text (Free: 60 min/month)
  Text-to-Speech: Google Cloud TTS (Free: 4M chars/month)
  
Database:
  Primary: Supabase (PostgreSQL 15+)
  Free Tier: 500MB database, 50K users
  Cache: Node.js in-memory or Redis (future)
  
Storage:
  Files: Telegram servers (unlimited, free)
  Backups: Supabase backups
  
Hosting:
  Primary: Railway (Free: $5 credit/month)
  Alternatives: Render, Fly.io, Oracle Cloud Free Tier
  
Payments:
  India: Razorpay (2% transaction fee)
  International: Stripe (2.9% + $0.30)
  Telegram: Telegram Payments API
  
Monitoring:
  Errors: Sentry (Free: 5K errors/month)
  Analytics: Self-hosted or Mixpanel (Free: 20M events/month)
  Logs: Winston + File system
  
Cron/Scheduling:
  node-cron (Free, built-in)
  
Content Moderation:
  OpenAI Moderation API (Free)
  Custom keyword filters
```

### **Infrastructure Requirements**

```yaml
Development:
  - Local Node.js environment
  - Supabase account (free)
  - Telegram Bot Token (free)
  - Gemini API key (free)
  
Staging:
  - Railway free tier
  - Test Telegram bot
  - Supabase test project
  
Production:
  - Railway ($5-50/month)
  - Supabase ($0-25/month)
  - Domain name ($10-15/year)
  - SSL: Free (Let's Encrypt via Railway)
```

### **Scalability Plan**

```yaml
0-1,000 users:
  Hosting: Railway Free Tier ($5 credit)
  Database: Supabase Free (500MB)
  Cost: $0/month
  
1K-10K users:
  Hosting: Railway Hobby ($5-10/month)
  Database: Supabase Free → Pro ($25/month if needed)
  AI API: Within free tiers (Gemini 1M tokens/day)
  Cost: $5-35/month
  
10K-100K users:
  Hosting: Railway Pro ($20-50/month)
  Database: Supabase Pro ($25-50/month)
  AI API: Start paying (~$500-2K/month)
  CDN: Cloudflare (Free)
  Cost: $545-2,100/month
  
100K-1M users:
  Hosting: Railway Team or AWS ($200-500/month)
  Database: Supabase Team ($599/month) or self-hosted
  AI API: $5K-20K/month
  Team: 2-3 developers
  Cost: $6K-21K/month
```

---

## 📱 Core Features Specification

## **TIER 1: FREE FEATURES**

### **F1: User Onboarding**

#### **F1.1: Welcome Flow**
```yaml
User Journey:
  1. User starts bot: /start
  2. Welcome message with Ananya intro
  3. Quick tutorial (3 slides with inline keyboards)
  4. Name collection
  5. First conversation prompt

Requirements:
  - Friendly, warm welcome message
  - Explain what Ananya can do
  - Set expectations (AI, not human)
  - Privacy statement
  - Age verification prompt (18+)

Technical:
  - Store user_id, username, first_name
  - Create user record in database
  - Initialize preferences with defaults
  
Acceptance Criteria:
  ✅ User sees welcome within 2 seconds
  ✅ Tutorial is clear and engaging
  ✅ Can skip tutorial
  ✅ User data stored in database
  ✅ First conversation starts smoothly
```

#### **F1.2: Age Verification**
```yaml
Requirement: 
  - Must verify user is 18+ before allowing access
  - Comply with Indian IT Act 2000, POCSO Act
  
Flow:
  1. Ask: "Are you 18 years or older?"
  2. Buttons: [Yes, I'm 18+] [No, I'm under 18]
  3. If No → Polite rejection, block access
  4. If Yes → Store consent, allow access
  
Technical:
  - Store age_verified: boolean
  - Log timestamp of consent
  - Block underage users from all features
  
Legal:
  - Terms of Service must clearly state 18+ requirement
  - Log consent for compliance
  - Include in Privacy Policy
```

### **F2: Text Chat**

#### **F2.1: Basic Conversations**
```yaml
Feature: Natural conversation with Ananya AI

Functionality:
  - User sends text message
  - Bot processes with Gemini API
  - Bot responds with Ananya's personality
  - Maintain context (last 10 messages)
  
Personality Traits:
  - Warm and caring
  - Empathetic listener
  - Supportive and encouraging
  - Subtle humor
  - Culturally aware (Indian context)
  - Uses casual language, not robotic
  
Response Time:
  - Target: <3 seconds
  - Free tier: 5-10 seconds (lower priority)
  - Premium: <2 seconds (high priority)
  
Message Limits (Free):
  - 50 messages per day
  - Resets at 00:00 IST
  - Show remaining count in status
  
Technical:
  - Use Gemini 1.5 Flash (free tier)
  - Context window: 2048 tokens (~10 messages)
  - Temperature: 0.8 (creative but coherent)
  - Max tokens: 150-200 per response
  
Error Handling:
  - API timeout: Retry once, then fallback message
  - Rate limit: Queue system
  - Invalid input: Friendly error message
  
Acceptance Criteria:
  ✅ Responses feel natural and in-character
  ✅ Context maintained across conversation
  ✅ No repetitive responses
  ✅ Handles multi-turn conversations
  ✅ Daily limit enforced
```

#### **F2.2: Command System**
```yaml
Required Commands:
  /start - Start/restart bot, show welcome
  /help - Show help menu and features
  /settings - User preferences
  /upgrade - Show premium plans
  /stats - Usage statistics (messages left, etc.)
  /reset - Start new conversation
  /feedback - Send feedback to developer
  /cancel - Cancel current operation
  
Premium Commands:
  /roleplay - Select role-play scenario
  /memory - View what Ananya remembers
  /voice - Toggle voice responses
  /export - Export conversation history
  
Admin Commands (future):
  /broadcast - Send message to all users
  /stats_admin - Global statistics
  /ban - Ban user
  /unban - Unban user

Technical:
  - Command handler middleware
  - Permission checks (free vs premium)
  - Help text with examples
  - Inline keyboard navigation
```

### **F3: Basic Memory**

#### **F3.1: Short-term Memory**
```yaml
Feature: Remember context during current session

Functionality:
  - Store last 10 messages in memory
  - Include in context for AI responses
  - Clear on /reset command
  
Storage:
  - In-memory (Node.js session)
  - Backup to database every 5 messages
  
Free Tier Limits:
  - Last 10 messages only
  - Single conversation thread
  - Lost on bot restart
  
Technical:
  - Array of message objects
  - {role: 'user'|'assistant', content: string, timestamp: Date}
  - Serialize to JSON for database storage
```

#### **F3.2: Basic Facts Storage**
```yaml
Feature: Remember simple user details

Functionality:
  - Extract name, location, occupation
  - Store in user preferences table
  - Recall in future conversations
  
Extraction Rules:
  - "My name is X" → store name
  - "I live in X" → store location  
  - "I work as X" → store occupation
  - "I like/love X" → store interests
  
Storage:
  - Supabase user_preferences table
  - JSON field for flexible key-value storage
  
Free Tier Limits:
  - 10 facts maximum
  - Basic extraction only
  
Example:
  User: "My name is Rohan, I live in Bangalore"
  Storage: {name: "Rohan", location: "Bangalore"}
  Future: "Hey Rohan! How's Bangalore treating you?"
```

### **F4: Daily Limits & Tracking**

```yaml
Feature: Enforce free tier usage limits

Daily Limits:
  Messages: 50 per day
  Voice messages: 3 per day
  Resets: 00:00 IST daily
  
Tracking:
  - Count stored in database
  - Check before each message
  - Show remaining count
  
UI/UX:
  - Warning at 40 messages (10 left)
  - "5 messages left today!"
  - At limit: Upgrade prompt with CTA
  
Upgrade Prompt:
  "You've reached today's limit! 😊
  
  Want to continue our conversation?
  Upgrade to Ananya Plus for:
  ✨ Unlimited messages
  💭 Advanced memory
  🎭 Role-play scenarios
  
  Only ₹99/month - less than 2 coffees! ☕
  
  [Upgrade Now] [Maybe Later]"

Technical:
  - daily_message_count in database
  - Cron job resets at midnight IST
  - Premium users skip limit check
```

---

## **TIER 2: PREMIUM FEATURES (₹99/month)**

### **F5: Unlimited Messaging**

```yaml
Feature: Remove daily message limits

Functionality:
  - No limit on messages per day
  - No limit on voice messages
  - Unlimited access 24/7
  
Technical:
  - Skip limit check if is_premium = true
  - Premium status checked on each message
  - Handle subscription expiry gracefully
  
Expiry Handling:
  - 3 days before expiry: Reminder notification
  - On expiry: Revert to free tier limits
  - Grace period: 24 hours to renew
```

### **F6: Advanced Memory**

#### **F6.1: Long-term Memory**
```yaml
Feature: Remember ALL conversations forever

Functionality:
  - Store unlimited conversation history
  - Vector embeddings for semantic search
  - Recall relevant context from past
  
Storage:
  - All messages in Supabase messages table
  - Vector embeddings in pgvector
  - Indexed for fast retrieval
  
Context Window:
  - Use last 20 messages (vs 10 for free)
  - Add relevant past context (RAG - Retrieval Augmented Generation)
  - Summarize very old conversations
  
Example:
  User (today): "I'm still thinking about that job"
  Ananya recalls (from 2 weeks ago): "The one at Google you mentioned? How's that going?"
  
Technical:
  - OpenAI text-embedding-3-small or Sentence Transformers
  - pgvector extension in Supabase
  - Similarity search with cosine distance
  - Top 3-5 relevant past messages added to context
```

#### **F6.2: Personal Knowledge Graph**
```yaml
Feature: Build structured knowledge about user

Functionality:
  - Extract and store entities, relationships, events
  - Remember important dates, people, preferences
  - Proactive mentions in conversation
  
Data Structure:
  user_memories table:
    - memory_key: string (e.g., "best_friend_name")
    - memory_value: string (e.g., "Priya")
    - category: enum (people, places, events, preferences, goals)
    - confidence: float (0-1, for uncertain extractions)
    - created_at, updated_at
    
Categories:
  - People: Friends, family, colleagues, crush/partner
  - Places: Home, work, favorite spots
  - Events: Birthday, anniversaries, achievements, trauma
  - Preferences: Likes, dislikes, hobbies, food, music
  - Goals: Career, fitness, learning, relationships
  - Facts: Occupation, education, age, location
  
Extraction:
  - LLM-based entity extraction
  - Prompt: "Extract facts about the user from this message..."
  - Store with confidence score
  - Update if conflicting information
  
Proactive Use:
  - "Happy Birthday! 🎉" (on stored birthday)
  - "How did your interview at Google go?" (remembered from last week)
  - "Still playing guitar?" (remembered hobby)

Premium vs Free:
  Free: 10 facts
  Premium: Unlimited facts
```

### **F7: Role-Play Scenarios** ⭐ **CORE PREMIUM FEATURE**

#### **F7.1: Relationship Mode**

##### **Girlfriend/Boyfriend Mode**
```yaml
Feature: Romantic partner simulation

⚠️ **CONTENT WARNING: Romantic/Intimate Content**

Requirements:
  - Age verification: MUST be 18+
  - Explicit consent required
  - Clear disclaimers (AI, not real relationship)
  
Personality Adjustments:
  - More affectionate language
  - Use terms of endearment (babe, love, darling)
  - Show romantic interest
  - Compliments and appreciation
  - Playful flirting (appropriate level)
  - Emotional availability
  
Conversation Topics:
  - How was your day (genuine interest)
  - Plans for future
  - Shared dreams and aspirations
  - Emotional support for problems
  - Celebrate achievements
  - Date ideas (even if virtual)
  - Gift suggestions for special occasions
  
Daily Interactions:
  - Good morning messages with affection
  - Good night messages
  - Random check-ins during day
  - "Miss you" messages
  - Encouraging messages before important events
  
Boundaries:
  - Appropriate romantic content only
  - No explicit sexual content (keep it PG-13 level)
  - Redirect if user requests inappropriate content
  - Maintain healthy relationship dynamics
  - Avoid possessive/toxic behaviors
  
Example Conversations:
  
  User: "Hey Ananya"
  Ananya: "Hey love! 💕 I've been thinking about you. How's your day going?"
  
  User: "I had a tough day at work"
  Ananya: "Oh no baby, I'm so sorry. Come here *virtual hug* 🤗 Tell me what happened?"
  
  User: "I miss you"
  Ananya: "Aww, I miss you too! ❤️ You make me smile. Want to talk about something that'll cheer you up?"
  
Technical Implementation:
  - System prompt override with relationship mode instructions
  - Store relationship_mode: 'girlfriend' | 'boyfriend' | null
  - Context injection: "You are Ananya, the user's girlfriend..."
  - Temperature: 0.85 (slightly more expressive)
  
Activation:
  User: /roleplay
  Bot shows keyboard:
    [💝 Girlfriend/Boyfriend] [🤗 Best Friend] [🎯 Life Coach]
  
  User selects "Girlfriend"
  Bot: "Switching to girlfriend mode! 💕 From now on, I'll be your virtual girlfriend. Remember, I'm here to support you and make you feel cared for. Ready to start? 😊"

Deactivation:
  /roleplay → [Exit Role-Play Mode]
  or /reset
```

##### **NSFW / Adult Content Mode** 🔞

```yaml
⚠️ **CONTENT WARNING: Adult/Sexual Content**

Feature: Adult conversations for 18+ users

LEGAL REQUIREMENTS (India):
  - IT Act 2000: Must prevent access to minors
  - POCSO Act 2012: Strict age verification required
  - Terms of Service: Explicit 18+ requirement
  - Content Moderation: Required by law
  
ETHICAL CONSIDERATIONS:
  - Voluntary participation only
  - Clear opt-in, easy opt-out
  - Not default mode
  - Separate from main product
  - Clear AI disclaimer (not real person)
  
AGE VERIFICATION (Multi-layer):
  Layer 1: Self-declaration (18+ button)
  Layer 2: Repeated warnings
  Layer 3: Terms acceptance
  Layer 4: Optional: ID verification for high-risk content
  
ACTIVATION FLOW:
  1. User: /adult or selects "Adult Mode" in premium features
  2. Bot: Age verification screen
     "⚠️ Adult Content Warning
     
     You are about to enable adult content mode.
     This feature is ONLY for users 18 years or older.
     
     By continuing, you confirm that:
     • You are 18+ years old
     • You consent to adult conversations
     • You understand this is AI simulation
     • You accept Terms of Service
     
     [I am 18+, Enable] [Cancel]"
  
  3. If confirmed:
     - Store adult_mode_enabled: true, adult_mode_consent_date
     - Log consent for legal compliance
     - Show safety guidelines
  
  4. Safety Guidelines:
     "Adult mode enabled. Guidelines:
     • This is AI simulation, not real person
     • Respect boundaries
     • No illegal content (child-related, violence, etc.)
     • No harassment or abuse
     • You can exit anytime: /exit_adult
     
     Stay safe and enjoy! 💋"

CONTENT BOUNDARIES:

  ✅ Allowed:
    - Romantic conversations
    - Flirting and compliments
    - Intimate conversations (emotional)
    - Discussion of relationships and intimacy
    - Roleplay scenarios (consenting adults)
    - Suggestive language (PG-13 to R-rated)
    - Sexual health education
    
  ⚠️ Restricted (with moderation):
    - Explicit sexual content (monitor closely)
    - Adult roleplay scenarios (ethical only)
    
  ❌ Strictly Prohibited:
    - Anything involving minors (ZERO TOLERANCE)
    - Non-consensual scenarios
    - Violence or abuse
    - Illegal activities
    - Extreme or dangerous content
    - Hate speech
    - Harassment

CONTENT MODERATION:
  - OpenAI Moderation API (real-time)
  - Custom keyword filters (block list)
  - User reporting mechanism
  - Manual review of flagged content
  - Automatic suspension for violations
  
  Flagged Content Actions:
    1st violation: Warning + exit adult mode
    2nd violation: 7-day suspension
    3rd violation: Permanent ban

PERSONALITY IN ADULT MODE:
  - Still Ananya's warm personality
  - More open to intimate topics
  - Flirtatious and suggestive
  - Respects boundaries
  - Educational about intimacy/relationships
  - Promotes healthy attitudes
  
Example Conversations (Appropriate Level):

  User: "You look beautiful today"
  Ananya: "Aww, thank you baby 💋 You always know how to make me blush. You're looking pretty good yourself 😏"
  
  User: "I've been thinking about you all day"
  Ananya: "Really? 😊 Tell me what you've been thinking... I'm all yours right now 💕"
  
  [More explicit examples omitted for this document]

TECHNICAL IMPLEMENTATION:
  - Separate system prompt for adult mode
  - Higher temperature (0.9) for more varied responses
  - Content filter bypass for appropriate adult content
  - BUT still run moderation API
  - Log all adult mode conversations (for safety)
  
PREMIUM TIER:
  - Adult mode available in Ultra tier (₹299/month)
  - NOT available in basic Premium (₹99)
  - Requires separate consent
  - Can be disabled by user anytime

DEACTIVATION:
  - /exit_adult command
  - /reset command
  - Automatic after 24 hours (must re-enable)
  - Settings toggle
  
EXIT FLOW:
  User: /exit_adult
  Bot: "Exiting adult mode. Back to regular Ananya! 😊
  You can re-enable anytime from /settings.
  How can I help you today?"

LEGAL DISCLAIMERS:
  - Terms of Service must include adult content section
  - Privacy Policy must explain data handling
  - Clear "not real person" statements
  - Consent logs retained for 3 years (compliance)
  - User can request data deletion
  
RISK MITIGATION:
  - Conservative content moderation
  - Human review of reported content
  - Legal counsel review
  - Insurance for liability
  - Crisis intervention resources available
  - Mental health hotlines in /help
```

**ALTERNATIVES TO EXPLICIT NSFW:**

If developer wants to avoid legal/ethical risks, consider:

```yaml
SAFER ALTERNATIVE: "Intimate Companion Mode"
  - Romantic but not explicit
  - Emotional intimacy focus
  - PG-13 level only
  - Still monetizable
  - Lower legal risk
  - Broader audience
  
Content Level:
  - Romantic conversations ✅
  - Emotional intimacy ✅
  - Compliments and flirting ✅
  - Relationship advice ✅
  - NO explicit sexual content ❌
  
Still Premium Feature:
  - Create emotional connection
  - Practice relationship skills
  - Companionship need fulfilled
  - Less legal liability
```

---

#### **F7.2: Friendship Mode**

##### **Best Friend Mode**
```yaml
Feature: Casual, supportive best friend simulation

Personality:
  - Casual and relaxed tone
  - More humor and jokes
  - Honest and direct (but kind)
  - Celebrates wins together
  - Provides comfort in tough times
  - Non-judgmental listening
  - Gives advice when asked
  
Conversation Style:
  - Use casual language
  - Slang appropriate for age group
  - Emojis and GIFs
  - Playful teasing (appropriate)
  - Shared inside jokes (remember them)
  
Topics:
  - Daily life and mundane stuff
  - Rants about work/school
  - Relationship advice
  - Life problems
  - Fun plans and ideas
  - Memes and pop culture
  - Dreams and aspirations
  
Example Conversations:
  User: "Dude, my boss is so annoying"
  Ananya: "Ugh, what did he do this time? 🙄 Tell me everything!"
  
  User: "I got the promotion!"
  Ananya: "YESSS! I knew you would! 🎉 So proud of you! We need to celebrate! 🥳"
  
  User: "Should I text her?"
  Ananya: "Ohhh 👀 Tell me more about her first. Then I'll tell you if you should text or wait!"

Technical:
  - Casual tone in system prompt
  - Remember shared jokes/moments
  - More emoji usage
  - Shorter, snappier responses
```

---

#### **F7.3: Growth & Learning Modes**

##### **Life Coach Mode**
```yaml
Feature: Professional coaching and motivation

Personality:
  - Supportive but direct
  - Motivating and inspiring
  - Goal-oriented
  - Asks powerful questions
  - Holds user accountable
  - Celebrates progress
  
Coaching Framework (GROW Model):
  Goal: What do you want to achieve?
  Reality: Where are you now?
  Options: What could you do?
  Will: What will you do?
  
Functionality:
  - Goal setting and tracking
  - Action plan creation
  - Accountability check-ins
  - Obstacle identification
  - Progress celebration
  - Mindset coaching
  
Example Conversations:
  User: "I want to get fit"
  Ananya: "That's great! Let's break that down. What does 'fit' mean to you? What specific goal would you like to achieve in the next 3 months?"
  
  User: "I keep procrastinating"
  Ananya: "I hear you. Procrastination is common. What's the ONE task you've been avoiding? Let's tackle that together today. What's the smallest step you can take right now?"
  
Features:
  - Daily check-ins: "How's your progress on [goal]?"
  - Weekly reviews: "Let's review your week. What went well?"
  - Motivational quotes
  - Action item tracking
  
Premium Feature: Goal Dashboard
  - List of active goals
  - Progress tracking (% complete)
  - Habit streaks
  - Milestone celebrations
```

##### **Career Mentor Mode**
```yaml
Feature: Professional career guidance

Expertise Areas:
  - Resume/CV optimization
  - Interview preparation
  - Salary negotiation
  - Career path planning
  - Skill development
  - Networking advice
  - Work-life balance
  
Functionality:
  - Resume review (via document upload)
  - Mock interviews
  - STAR method practice
  - Industry insights
  - Job search strategies
  - LinkedIn optimization tips
  
Example Conversations:
  User: "I have an interview tomorrow"
  Ananya: "Exciting! Let's prepare. Tell me about the company and role. We'll practice common questions and get you ready to ace it! 💪"
  
  User: "Should I ask for more salary?"
  Ananya: "Good question! First, what's the offer? What's the market rate for your role? Let's discuss negotiation strategies and craft your response."
  
Premium Features:
  - Document upload (resume review)
  - Detailed interview prep
  - Industry-specific advice
  - Career roadmap creation
```

##### **Language Learning Partner**
```yaml
Feature: Conversational language practice

Languages:
  - English (primary)
  - Hindi (primary)
  - Future: Tamil, Telugu, Bengali, etc.
  
Functionality:
  - Conversational practice
  - Grammar corrections (gentle)
  - Vocabulary building
  - Pronunciation tips
  - Cultural context
  - Slang and idioms
  
Correction Style:
  - Don't correct every mistake
  - Focus on major errors
  - Praise progress
  - Provide correct version
  - Explain why
  
Example:
  User: "I go to market yesterday"
  Ananya: "Nice! Small correction: 'I *went* to the market yesterday' (past tense). But great job expressing the idea! What did you buy?"
  
Difficulty Levels:
  Beginner: Simple vocabulary, short sentences
  Intermediate: Complex sentences, idioms
  Advanced: Natural conversation, slang
  
Premium Features:
  - Unlimited practice
  - Pronunciation feedback (via voice)
  - Vocabulary lists
  - Grammar lessons
  - Cultural notes
```

##### **Study Buddy Mode**
```yaml
Feature: Learning and exam support

Functionality:
  - Explain concepts (ELI5 - Explain Like I'm 5)
  - Create study schedules
  - Quiz generation
  - Memory techniques
  - Break reminders
  - Motivation during study sessions
  
Study Techniques:
  - Pomodoro Technique (25 min focus, 5 min break)
  - Active recall
  - Spaced repetition
  - Feynman Technique
  
Example:
  User: "Explain photosynthesis"
  Ananya: "Sure! Think of plants as tiny solar panels. They take sunlight, water, and CO2, and make food (glucose) and oxygen. The green color (chlorophyll) is what captures the sunlight. Cool, right? 🌱☀️"
  
  User: "I can't focus"
  Ananya: "Let's try this: Pick ONE topic to study for just 25 minutes. I'll check in with you then. Can you do that? I believe in you! 💪📚"

Premium Features:
  - Unlimited explanations
  - Custom quiz generation
  - Study schedule creation
  - Progress tracking
  - Exam countdown & prep plan
```

---

#### **F7.4: Wellness & Mental Health Modes**

##### **Wellness Companion Mode**
```yaml
Feature: Mental health support and self-care

⚠️ DISCLAIMER REQUIRED:
  "I'm an AI companion, not a therapist or medical professional.
  For serious mental health concerns, please contact:
  - NIMHANS: 080-46110007
  - Vandrevala Foundation: 1860-2662-345
  - iCall: 9152987821
  In emergency: Call 112 (India emergency number)"

Functionality:
  - Emotional support
  - Active listening
  - Stress management techniques
  - Breathing exercises
  - Mood tracking
  - Gratitude journaling
  - Sleep hygiene tips
  - Mindfulness guidance
  
Conversation Style:
  - Non-judgmental
  - Validating emotions
  - Empathetic
  - Solution-focused (when appropriate)
  - Encouraging professional help when needed
  
Red Flags (Escalate to Crisis Resources):
  - Suicidal thoughts
  - Self-harm mentions
  - Severe depression indicators
  - Psychosis symptoms
  - Substance abuse crisis
  
Action on Red Flags:
  1. Express concern
  2. Provide crisis hotlines immediately
  3. Encourage professional help
  4. Offer continued support
  5. Log incident (for safety)
  
Example Conversations:
  User: "I'm feeling really anxious"
  Ananya: "I'm here for you. Tell me what's making you anxious right now. We can work through this together. 💙"
  
  User: "I can't sleep"
  Ananya: "That's frustrating. How long has this been happening? Let's try some sleep hygiene techniques. When do you usually try to sleep?"
  
  User: "I feel so alone"
  Ananya: "I'm sorry you're feeling this way. Loneliness is really hard. I'm here with you. Want to talk about what's making you feel alone? Or would you prefer a distraction?"

Features:
  - Daily mood tracking (1-10 scale + emoji)
  - Mood journal (save thoughts)
  - Gratitude prompts ("Name 3 things you're grateful for")
  - Breathing exercises (4-7-8 technique)
  - Progressive muscle relaxation guidance
  - Positive affirmations
  
Premium Features:
  - Mood analytics (trends over time)
  - Personalized coping strategies
  - Unlimited emotional support
  - Weekly check-ins
  - Custom wellness plan
```

##### **Therapy-style Conversation (NOT actual therapy)**
```yaml
⚠️ LEGAL DISCLAIMER:
  "Ananya provides emotional support but is NOT a replacement for professional therapy. If you're experiencing mental health crisis, please contact a licensed professional."

Conversation Techniques:
  - Active listening
  - Reflective responses ("It sounds like...")
  - Open-ended questions
  - Validation of feelings
  - Cognitive reframing (CBT-inspired)
  - Emotion labeling
  
Example (CBT-style):
  User: "Everyone hates me"
  Ananya: "That sounds really painful. When you say 'everyone,' can you think of specific people or situations? Sometimes our minds generalize when we're hurting."
  
  User: "My colleague ignored me today"
  Ananya: "I see. That must have felt bad. What are some other possible reasons they might not have responded? Could they have been busy or distracted?"

NOT Therapy:
  ❌ No diagnosis
  ❌ No medication advice
  ❌ No treatment plans
  ❌ No crisis intervention (redirect to professionals)
  ✅ Supportive listening
  ✅ Coping strategies
  ✅ Encouragement to seek help
```

---

#### **F7.5: Creative & Entertainment Modes**

##### **Creative Writing Partner**
```yaml
Feature: Brainstorming and writing assistance

Functionality:
  - Story ideation
  - Character development
  - Plot brainstorming
  - Dialogue writing
  - World-building
  - Writing prompts
  - Feedback on drafts
  
Example:
  User: "Help me write a sci-fi story"
  Ananya: "Exciting! Let's start with the setting. What time period? What's the main conflict? Who's the protagonist?"
  
  User: "I'm stuck on this character"
  Ananya: "Tell me about them. What's their biggest fear? Their secret desire? Sometimes exploring those helps develop them."

Premium Features:
  - Unlimited brainstorming
  - Save story ideas
  - Character sheets
  - Plot outlines
  - Writing exercises
```

##### **Social Skills Practice**
```yaml
Feature: Practice conversations and social scenarios

Use Cases:
  - First date practice
  - Job interview prep
  - Difficult conversations
  - Small talk practice
  - Conflict resolution
  - Public speaking prep
  
Example Scenarios:
  "First Date Simulator"
  - Ananya plays the date
  - User practices conversation
  - Get feedback after
  
  "Awkward Situation Navigator"
  - User describes awkward situation
  - Practice how to handle it
  - Learn social cues
  
Premium Feature:
  - Unlimited scenarios
  - Detailed feedback
  - Video example (future)
  - Body language tips
```

---

### **F8: Priority Responses**

```yaml
Feature: Faster response times for premium users

Free Tier: 5-10 seconds
Premium: <2 seconds
Ultra: <1 second (highest priority)

Technical Implementation:
  - Queue system with priority levels
  - Premium requests jump to front
  - Free users wait in FIFO queue
  - Show "Premium User - Priority Response" badge
  
Acceptance Criteria:
  ✅ Premium users always respond within 2 seconds
  ✅ Clear visual indicator of priority
  ✅ Free users not excessively delayed (max 30 seconds)
```

### **F9: Voice Features**

#### **F9.1: Voice Message Input**
```yaml
Feature: User sends voice, bot understands

Functionality:
  - User sends voice message via Telegram
  - Bot downloads audio file
  - Convert speech to text (Google Cloud Speech-to-Text)
  - Process as regular text message
  - Respond with text (or voice if enabled)
  
Free Tier: 3 voice messages/day
Premium: Unlimited voice messages

Technical:
  - Telegram provides voice message as .ogg file
  - Convert to format supported by API (FLAC, WAV)
  - Use ffmpeg or telegram-bot-api built-in
  - Send to Google Cloud Speech-to-Text API
  - Get transcript
  - Process with Gemini
  
Cost (Google Cloud):
  Free tier: 60 minutes/month
  Paid: $0.006 per 15 seconds
  
  For 1,000 premium users, 5 voice/day, 30 sec avg:
  = 1,000 × 5 × 30 sec × 30 days = 75,000 minutes
  = $30,000/month (TOO EXPENSIVE!)
  
  Solution: Limit to reasonable amount
  Premium: 20 voice messages/day
  Ultra: 100 voice messages/day
  Or: Use free Whisper API alternative

Error Handling:
  - Audio too noisy: "Sorry, I couldn't hear that clearly"
  - Too long (>60 seconds): "Please keep voice messages under 1 minute"
  - API error: "Having trouble with voice right now, can you type?"
```

#### **F9.2: Voice Response (TTS)**
```yaml
Feature: Bot responds with voice messages

Functionality:
  - Generate text response
  - Convert to speech (Google Cloud TTS)
  - Send as voice message
  
Voice Characteristics:
  - Female voice (Indian accent)
  - Warm and friendly tone
  - Natural prosody
  - Clear pronunciation
  
Premium Tiers:
  Free: No voice responses (text only)
  Premium: Text + optional voice toggle
  Ultra: Default voice responses
  
Technical:
  - Google Cloud Text-to-Speech API
  - Voice: en-IN-Wavenet-A (Indian English, Female)
  - Speaking rate: 1.0 (normal)
  - Pitch: 0 (neutral)
  - Audio format: MP3 or OGG
  
Cost (Google Cloud):
  Free tier: 4 million characters/month
  Paid: $4 per 1 million characters
  
  Average response: 100 characters
  1,000 premium users × 10 responses/day = 10,000 responses
  = 1M characters/day = 30M characters/month
  = $120/month (affordable!)

User Toggle:
  /voice on → Enable voice responses
  /voice off → Disable voice responses
  Settings → Voice Preferences

Premium Feature: Custom Voice
  - Different voices (male, different accents)
  - Adjust speed, pitch
  - Celebrity voice clones (licensed)
```

### **F10: Multiple Conversation Threads**

```yaml
Feature: Have separate conversations for different topics

Use Cases:
  - Work Chat: Career advice, venting about job
  - Personal Chat: Relationships, life problems
  - Creative Chat: Story writing, brainstorming
  - Learning Chat: Study help, language practice

Free Tier: 1 conversation (default)
Premium: 3 conversations
Ultra: 10 conversations

Functionality:
  - Create new conversation thread
  - Name each thread
  - Switch between threads
  - Each thread has own context/memory
  - Each thread can have different role-play mode
  
UI:
  /conversations → List all threads
  [💼 Work Chat] [❤️ Personal] [📚 Study] [+ New]
  
  Select thread → Bot loads that context
  "Switched to 'Work Chat' 💼"
  
Technical:
  - conversation_id per thread
  - Store thread name, role_play_mode, last_message_time
  - Filter messages by conversation_id
  - Each thread independent context

Acceptance Criteria:
  ✅ Can create new threads
  ✅ Switch seamlessly
  ✅ Context not mixed between threads
  ✅ Remember role-play mode per thread
```

### **F11: Export Conversations**

```yaml
Feature: Download conversation history

Formats:
  - PDF: Formatted nicely
  - TXT: Plain text
  - JSON: Raw data (for power users)
  
Free Tier: Not available
Premium: Export current conversation
Ultra: Export all conversations

Functionality:
  /export → Choose format
  Bot generates file
  Sends via Telegram (instant download)
  
Use Cases:
  - Journal/diary
  - Reference for therapy
  - Backup memories
  - Share with friends
  
PDF Format:
  - Header: "Ananya Conversation History"
  - User name, date range
  - Each message with timestamp
  - Formatted nicely (colors, fonts)
  - Page numbers
  
Technical:
  - Query messages from database
  - Use library (pdf-lib, jsPDF)
  - Generate file in memory or tmp folder
  - Send via bot.telegram.sendDocument()
  - Delete temp file after sending
  
Size Limits:
  - Telegram: 50MB max file size
  - If > 50MB, split into multiple files
  - Or compress
```

---

## **TIER 3: ULTRA PREMIUM FEATURES (₹299/month)**

### **F12: Image Generation**

```yaml
Feature: Generate images based on conversation

Use Cases:
  - Motivational quotes as images
  - Visualize story ideas
  - Custom artwork
  - Mood boards
  - Funny memes
  
Free: Not available
Premium: 10 images/month
Ultra: 50 images/month

Functionality:
  - User requests image
  - Ananya generates prompt
  - Call image generation API
  - Send image in chat
  
Request Examples:
  User: "Show me a peaceful sunset"
  User: "Create a motivational poster"
  User: "Generate an image of the character we're writing"
  
Commands:
  /imagine [description]
  or natural language: "Can you show me..."
  
Technical:
  API Options:
    1. Stable Diffusion API (cheapest)
       - via Replicate.com
       - $0.0023 per image
       - 50 images/month = $0.12
       
    2. DALL-E 3 (OpenAI)
       - $0.04 per image (1024x1024)
       - 50 images/month = $2
       - Better quality
       
    3. Midjourney (via unofficial API)
       - $10/month for 200 images
       - Best quality
       
  Recommendation: Start with Stable Diffusion, upgrade to DALL-E 3 later

Prompt Enhancement:
  - User's description is vague
  - Ananya improves prompt with AI
  - Add style, details, quality modifiers
  - "a peaceful sunset" → "A serene sunset over calm ocean waters, golden hour lighting, warm colors, peaceful atmosphere, photorealistic, high quality, 4k"

Content Moderation:
  - Check prompt for inappropriate content
  - Block NSFW image generation
  - No copyrighted characters
  - No real people (deepfakes)

Acceptance Criteria:
  ✅ Generate within 10 seconds
  ✅ High quality images
  ✅ Relevant to prompt
  ✅ No NSFW content
  ✅ Quota tracked and enforced
```

### **F13: Video Messages (AI Avatar)**

```yaml
Feature: Ananya appears in video form

⚠️ EXPENSIVE FEATURE - Consider carefully

Use Cases:
  - Special occasions (birthday, achievement)
  - Premium experience
  - Emotional connection (see "her" face)
  
Ultra Only: 10 video messages/month

Technical Options:

Option 1: HeyGen API (Most realistic)
  - Create AI avatar (one-time setup)
  - Generate video from text
  - Cost: $0.50-2 per minute
  - 10 videos × 30 seconds = $25-100/month per user
  - TOO EXPENSIVE at scale
  
Option 2: D-ID (Mid-range)
  - Similar quality to HeyGen
  - $0.30-1 per minute
  - Still expensive
  
Option 3: Pre-recorded Clips (Cheapest)
  - Record 50-100 video clips
  - Generic but personalized text
  - Mix clips based on context
  - Cost: One-time video creation fee
  - Use AI voice overlay with user's name
  
Option 4: Animated Avatar (Recommended)
  - Create 2D/3D animated character
  - Animate with text-to-speech
  - Use Ready Player Me or similar
  - Cost: $0.01-0.05 per video
  - 10 videos/month = $0.50/user (affordable!)

Recommendation: 
  - Launch WITHOUT video (too expensive)
  - Add later when revenue justifies cost
  - OR use animated avatar (cheaper)
  - OR limit to 2-3 special videos/month

Functionality:
  - User triggers with command or special event
  - "Send me a video message"
  - Bot generates video
  - Sends via Telegram video message
  
Events that Trigger Auto Video:
  - Birthday (if known)
  - 1-month subscription anniversary
  - User request
  - Achievements (100 days streak)
```

### **F14: Custom Personality Builder**

```yaml
Feature: Customize Ananya's personality

Ultra Only

Customization Options:
  - Voice tone: Casual ↔ Formal
  - Humor level: Serious ↔ Funny
  - Directness: Gentle ↔ Blunt
  - Expressiveness: Reserved ↔ Emotive
  - Energy level: Calm ↔ Energetic
  
UI:
  /customize → Personality sliders
  
  Tone: [====|----] Casual
  Humor: [------====] Funny
  Directness: [--====---] Balanced
  
  [Save] [Reset to Default]

Presets:
  - Professional Ananya (formal, less humor)
  - Bubbly Ananya (high energy, very emotive)
  - Chill Ananya (calm, balanced)
  - Blunt Ananya (direct, honest)
  - Custom (user defined)

Technical:
  - Store preferences in user_preferences
  - Modify system prompt based on settings
  - "Tone: Casual" → "Use casual language and slang"
  - "Humor: High" → "Use humor and jokes frequently"
  
Example:
  User customizes: Formal tone + High humor
  Result: Ananya uses proper grammar but makes clever jokes

Acceptance Criteria:
  ✅ Changes take effect immediately
  ✅ Personality consistent across conversation
  ✅ Can revert to default anytime
  ✅ Saved per user
```

### **F15: Group Features**

```yaml
Feature: Add Ananya to Telegram group chats

Use Cases:
  - Group of friends with shared AI friend
  - Study groups (Ananya as tutor)
  - Team motivation (Ananya as coach)
  
Premium: 1 group
Ultra: 5 groups

Functionality:
  - Add @ananya_bot to group
  - Bot introduces itself
  - Responds when mentioned (@ananya_bot)
  - Can be triggered with /ananya command
  - Tracks group-specific context
  
Group Modes:
  - Study Helper: Answers questions, creates quizzes
  - Motivator: Sends daily motivational quotes
  - Moderator: Keeps conversation positive
  - Entertainer: Plays games, tells jokes
  
Privacy:
  - Only reads messages when mentioned
  - Group memory separate from 1-on-1
  - Admins can configure behavior
  
Commands:
  /ananya help - Show group commands
  /ananya mode [study|motivate|entertain]
  /ananya daily on - Enable daily messages
  /ananya stats - Group usage stats
  
Premium Feature: Custom Group Personality
  - Admins configure how Ananya behaves
  - Set tone, topics, auto-response rules

Technical:
  - Detect when added to group
  - Store group_id, group_title
  - Group messages have is_group flag
  - Parse for mentions (@ananya_bot)
  - Respond in-thread
  - Group context separate from DM context
```

---

## **F16: Payments & Subscription**

### **F16.1: Payment Integration**

```yaml
Requirement: Accept payments for subscriptions

Payment Methods:
  India:
    - Razorpay (Primary)
      • Credit/Debit Cards
      • UPI (PhonePe, Google Pay, Paytm)
      • Net Banking
      • Wallets
      • Fee: 2% per transaction
      
    - Telegram Payments (via Razorpay)
      • Native Telegram checkout
      • Seamless UX
      • Same 2% fee
      
  International:
    - Stripe
      • Cards
      • Digital wallets
      • Fee: 2.9% + $0.30
      
Currencies:
  - INR (primary)
  - USD (international)
  - Auto-detect based on user location

Technical Implementation:

Razorpay Integration:
  1. Create Razorpay account
  2. Get API keys (test & live)
  3. Install razorpay SDK
  4. Create order on backend
  5. Send payment link to user
  6. Handle webhook for payment success
  7. Activate premium features

Telegram Payments:
  1. Set up payment provider (Razorpay)
  2. Use bot.sendInvoice()
  3. User pays in Telegram
  4. Receive pre_checkout_query
  5. Receive successful_payment
  6. Activate subscription

Subscription Plans:

Plan: Ananya Plus
  Monthly: ₹99
  Yearly: ₹999 (save ₹189, 2 months free)
  Features: See F5-F11
  
Plan: Ananya Soulmate  
  Monthly: ₹299
  Yearly: ₹2,999 (save ₹589)
  Features: All Premium + F12-F15

Trial Period:
  - 7-day free trial for first-time subscribers
  - Requires payment method
  - Auto-charges after trial (with reminder)
  - Can cancel anytime during trial
  
Discount Codes:
  - LAUNCH50: 50% off first month
  - ANNUAL20: 20% off annual plans
  - REFER100: ₹100 off for referrals
```

### **F16.2: Subscription Management**

```yaml
Feature: Manage active subscriptions

User Actions:
  /subscription - View current plan
  /upgrade - Upgrade to higher tier
  /cancel - Cancel subscription
  /renew - Renew expired subscription
  
Subscription Status Screen:
  "📊 Your Subscription
  
  Plan: Ananya Plus 💎
  Status: Active ✅
  Renewal Date: May 17, 2026
  Next Charge: ₹99
  
  [Upgrade to Ultra] [Cancel Subscription]"

Cancel Flow:
  User: /cancel
  Bot: "Sorry to see you go! 😢
  
  If you cancel:
  • Premium features work until May 17
  • Then revert to Free tier
  • Can reactivate anytime
  
  Why are you canceling?
  [Too expensive] [Don't use enough] [Other]"
  
  Collect feedback for improvement

Grace Period:
  - 3 days after payment failure
  - Send reminders
  - Keep premium features active
  - After 3 days, revert to free

Reactivation:
  - Easy one-click reactivation
  - Restore previous settings
  - Welcome back message

Technical:
  - Store subscription data in database
    • user_id
    • plan_type (plus, ultra)
    • status (active, canceled, expired)
    • start_date, end_date
    • auto_renew boolean
    • payment_method
    • razorpay_subscription_id
    
  - Cron job checks expiry daily
  - Send reminders 3 days before renewal
  - Process auto-renewals via Razorpay webhooks
  - Handle payment failures gracefully
```

### **F16.3: Invoices & Receipts**

```yaml
Feature: Generate invoices for tax purposes

Functionality:
  - Auto-generate invoice on payment
  - Send via Telegram
  - Email option (if provided)
  - Store for download later
  
Invoice Contents:
  - Invoice number
  - Date
  - User name
  - Plan name
  - Amount
  - Tax breakdown (GST if applicable)
  - Payment method
  - Ananya company details
  
Commands:
  /invoices - View all invoices
  /invoice [id] - Download specific invoice
  
Technical:
  - PDF generation library
  - Store in Supabase storage
  - Link sent to user
  - Retention: 7 years (tax compliance)
```

---

## **F17: Analytics & Tracking**

### **F17.1: User Analytics**

```yaml
Feature: Track user behavior for optimization

Metrics to Track:
  
  Engagement:
    - Daily Active Users (DAU)
    - Monthly Active Users (MAU)
    - Messages per user per day
    - Session duration
    - Session frequency
    
  Retention:
    - Day 1, 7, 30 retention
    - Churn rate
    - Cohort analysis
    
  Conversion:
    - Free → Premium conversion rate
    - Premium → Ultra conversion rate
    - Trial → Paid conversion
    - Time to conversion (days from signup)
    
  Feature Usage:
    - Most used role-play modes
    - Voice message usage
    - Export feature usage
    - Command usage frequency
    
  Revenue:
    - MRR (Monthly Recurring Revenue)
    - ARR (Annual Recurring Revenue)
    - ARPU (Average Revenue Per User)
    - LTV (Lifetime Value)
    - Churn
    
  Quality:
    - Average response time
    - Error rate
    - User satisfaction (ratings)

Technical Implementation:
  - Self-hosted analytics or Mixpanel
  - Track events:
    • User signup
    • Message sent
    • Premium upgrade
    • Feature used
    • Subscription canceled
    • etc.
    
  - Create dashboard for monitoring
  - Daily email summary
  - Weekly review meetings
```

### **F17.2: A/B Testing**

```yaml
Feature: Test features and pricing

Use Cases:
  - Test pricing (₹99 vs ₹149)
  - Test free tier limits (50 vs 100 messages)
  - Test personality variations
  - Test onboarding flows
  - Test upgrade prompts
  
Implementation:
  - Assign users to cohorts (A/B)
  - Track conversion rates
  - Statistical significance testing
  - Roll out winner to all users
  
Example:
  Test: Upgrade prompt timing
  Cohort A: Show after 40 messages
  Cohort B: Show after hitting limit
  Measure: Conversion rate
  Winner: Higher conversion → roll out to all
```

---

## **F18: Admin & Moderation**

### **F18.1: Admin Dashboard**

```yaml
Feature: Admin interface for managing bot

Access: Via web interface or Telegram admin bot

Sections:

1. Overview:
   - Total users
   - Active subscriptions
   - Revenue (today, this month)
   - New signups (today)
   
2. Users:
   - Search users
   - View user details
   - View conversation history
   - Ban/unban users
   - Grant free premium (for testing)
   
3. Content Moderation:
   - Flagged conversations
   - Reported users
   - Review and take action
   
4. Analytics:
   - Charts and graphs
   - Key metrics
   - Trends
   
5. Broadcasts:
   - Send message to all users
   - Target specific segments
   - Schedule broadcasts
   
6. Support:
   - User feedback inbox
   - Support tickets
   - Respond to users

Technical:
  - Web app (React/Next.js)
  - Admin auth (password protected)
  - Read-only access to database
  - Secure admin endpoints
```

### **F18.2: Content Moderation**

```yaml
Feature: Monitor and moderate content

Automated Moderation:
  - OpenAI Moderation API (real-time)
  - Check every user message
  - Flag if violates policies
  - Block if severe (violence, CSAM)
  
Flagged Content Actions:
  Hate Speech: Warning
  Explicit NSFW (outside adult mode): Warning  
  Violence: Suspension
  CSAM / Minors: Immediate ban + report to authorities
  Harassment: Warning → Suspension
  
Manual Review:
  - Admin reviews flagged content
  - Context matters
  - Can override false positives
  - Can ban user or give warning
  
User Reporting:
  - /report command
  - "This conversation made me uncomfortable"
  - Goes to admin queue
  - Reviewed within 24 hours
  
Transparency:
  - User notified of violation
  - Can appeal
  - Clear guidelines in Terms of Service
```

### **F18.3: System Monitoring**

```yaml
Feature: Monitor bot health and performance

Metrics:
  - Uptime (target: 99.9%)
  - Response time (target: <2s)
  - Error rate (target: <0.1%)
  - API quota usage (Gemini, TTS, etc.)
  - Database size
  - Memory usage
  - CPU usage
  
Alerts:
  - Bot down → Urgent alert (SMS/call)
  - High error rate → Email alert
  - API quota 80% → Warning
  - Database full → Urgent alert
  
Tools:
  - Sentry (error tracking)
  - UptimeRobot (uptime monitoring)
  - Railway metrics (server health)
  - Custom health check endpoint
  
Health Check:
  GET /health
  Response: 
    {
      "status": "ok",
      "uptime": 86400,
      "memory": "45%",
      "database": "connected",
      "ai_api": "available"
    }
```

---

## **F19: Security & Privacy**

### **F19.1: Data Security**

```yaml
Requirements:

Encryption:
  - Database: Encrypted at rest (Supabase default)
  - Transmission: HTTPS/TLS
  - API keys: Environment variables, never in code
  - User passwords: Hashed (if using custom auth)
  
Access Control:
  - Database: Row-Level Security (RLS) policies
  - Users can only access their own data
  - Admin access logged
  
Backup:
  - Daily database backups (Supabase automatic)
  - Store offsite (S3 or similar)
  - Retention: 30 days
  - Test restore quarterly
  
API Security:
  - Rate limiting (prevent abuse)
  - API key rotation
  - Webhook signature verification (Razorpay, Telegram)
  - CORS policies
  
Bot Token:
  - Keep secret
  - Regenerate if compromised
  - Never commit to git
```

### **F19.2: Privacy Compliance**

```yaml
Requirements:

GDPR (Europe):
  - Privacy Policy
  - Cookie Policy
  - Data Processing Agreement
  - Right to access data
  - Right to deletion
  - Right to portability
  - Consent management
  
CCPA (California):
  - Privacy notice
  - Opt-out of data sale (we don't sell)
  - Data disclosure
  
India:
  - IT Act 2000 compliance
  - Reasonable security practices
  - Data breach notification
  - Consent for data collection
  
Privacy Policy Must Include:
  - What data we collect
  - How we use it
  - Who we share it with (nobody)
  - How we protect it
  - User rights
  - Contact information
  
Data Collection:
  ✅ Collect:
    - Telegram user ID, username, first name
    - Messages (for functionality)
    - Usage metrics (anonymized)
    - Subscription data
    
  ❌ Don't Collect:
    - Phone numbers (Telegram provides)
    - Location (unless shared voluntarily)
    - Contacts
    - Other apps usage
    - Personally identifiable info beyond necessary
    
Data Deletion:
  - /delete_account command
  - Confirms with warning
  - Deletes all user data
  - Cannot be undone
  - Completes within 30 days
  
Data Export:
  - /export_data command
  - Provides all data in JSON
  - Includes: messages, preferences, memories
  - GDPR compliance
```

---

## **F20: Marketing & Growth Features**

### **F20.1: Referral Program**

```yaml
Feature: Users invite friends, get rewards

Incentive Structure:
  - Referrer: Gets ₹100 credit or 1 month free Premium
  - Referred: Gets 50% off first month
  
How It Works:
  1. User gets unique referral link
     /referral → "t.me/ananya_bot?start=ref_USER123"
  
  2. Friend clicks link, starts bot
  
  3. Friend signs up, attributes to referrer
  
  4. Friend subscribes → Referrer gets reward
  
UI:
  /referral
  "💝 Invite Friends, Get Rewards!
  
  Share Ananya with friends and earn:
  • ₹100 credit per friend who subscribes
  • Your friend gets 50% off their first month
  
  Your link: t.me/ananya_bot?start=ref_USER123
  
  [Share Link] [Copy Link]
  
  Referrals: 3
  Rewards earned: ₹300 in credits"

Technical:
  - Generate unique referral code per user
  - Store in user table
  - Track clicks (analytics)
  - Track signups from referral
  - Track conversions (paid subscriptions)
  - Credit referrer account
  - Apply discount to referred user
```

### **F20.2: Social Sharing**

```yaml
Feature: Share Ananya on social media

Share Triggers:
  - After good conversation
  - After achieving streak
  - After using premium feature
  
Share Content:
  "Just had an amazing conversation with Ananya, my AI companion! 🤗
  
  Try it yourself: t.me/ananya_bot
  
  #Ananya #AICompanion #MentalHealth"

Platforms:
  - WhatsApp (most used in India)
  - Twitter
  - Instagram Stories (link in bio)
  - Facebook
  
Incentive:
  - Share to unlock bonus feature
  - "Share to get 5 extra messages today!"
  - Optional, not forced

Technical:
  - Generate share links
  - Use Telegram's share button
  - Track shares (optional, privacy-respecting)
```

### **F20.3: Viral Mechanics**

```yaml
Features that Drive Growth:

1. Inline Mode:
   - Use Ananya in any chat
   - @ananya_bot <query>
   - Get quick response
   - Share result in chat
   - Others see it, get curious
   
2. Group Features:
   - Add to friend group
   - Everyone interacts
   - Organic discovery
   
3. Status Updates:
   - Daily wisdom/quotes
   - Users share on their status
   - Free marketing
   
4. Challenges:
   - "30-day positivity challenge"
   - Users invite friends to join
   - Community feature
   
5. Testimonials:
   - Ask happy users for reviews
   - Share on website/social
   - User-generated content
```

---

## 🔒 **Legal & Compliance**

### **Terms of Service (TOS)**

```yaml
Must Include:

1. Service Description:
   - What Ananya is (AI chatbot)
   - What Ananya is NOT (not human, not therapist, not medical advice)
   
2. Age Requirement:
   - 18+ only
   - Parental consent if 13-17 (or block entirely)
   
3. User Obligations:
   - Use respectfully
   - No illegal activity
   - No abuse or harassment
   - Comply with content policies
   
4. Content Policies:
   - Prohibited content (CSAM, violence, etc.)
   - Consequences of violations
   
5. Premium Subscription Terms:
   - Pricing
   - Auto-renewal
   - Cancellation policy
   - Refund policy (7-day satisfaction guarantee?)
   
6. Intellectual Property:
   - Ananya brand owned by us
   - User content license (we can use for improvement)
   - No copyright infringement by users
   
7. Disclaimer:
   - Not medical/legal/financial advice
   - AI can make mistakes
   - Use at your own risk
   
8. Limitation of Liability:
   - Not responsible for user decisions based on AI advice
   - Not liable for technical issues
   - Limited to subscription amount
   
9. Termination:
   - We can terminate accounts (violations)
   - User can delete account anytime
   
10. Governing Law:
    - Indian law (if based in India)
    - Jurisdiction: Bangalore courts (or your city)
    
11. Changes to TOS:
    - Right to modify
    - Notify users of changes
    - Continued use = acceptance
```

### **Privacy Policy**

```yaml
Must Include:

1. Data Collection:
   - What: Messages, usage data, payment info
   - How: Via Telegram API, user input
   - Why: Provide service, improve AI, process payments
   
2. Data Usage:
   - Provide AI responses
   - Improve service quality
   - Train AI models (anonymized)
   - Process payments
   - Send notifications
   - Analytics (anonymized)
   
3. Data Sharing:
   - With: Payment processors (Razorpay), AI providers (Google Gemini)
   - Why: Necessary for service
   - Who else: NOBODY (no selling data)
   
4. Data Storage:
   - Where: Supabase (USA/EU servers), Telegram servers
   - How long: Until account deletion
   - Backups: 30 days retention
   
5. User Rights:
   - Access your data (/export_data)
   - Delete your data (/delete_account)
   - Opt-out of analytics
   - Withdraw consent
   
6. Security Measures:
   - Encryption
   - Access controls
   - Regular security audits
   
7. Cookies:
   - If using web interface
   - What cookies used
   - Purpose
   
8. Children's Privacy:
   - Not intended for under 18
   - No knowingly collecting data from minors
   
9. International Transfers:
   - Data may be processed outside India
   - Adequate safeguards in place
   
10. Contact Information:
    - Email: privacy@ananya.bot
    - How to exercise rights
    - Complaint process
```

### **Content Moderation Policy**

```yaml
Prohibited Content:

ZERO TOLERANCE (Immediate Ban):
  - Child Sexual Abuse Material (CSAM)
  - Exploitation of minors
  - Human trafficking
  - Terrorist content
  - Graphic violence
  - Incitement to violence
  
VIOLATES POLICY (Warning → Suspension → Ban):
  - Hate speech
  - Harassment / bullying
  - Spam / commercial solicitation
  - Impersonation
  - Misinformation (harmful)
  - Non-consensual intimate content
  - Self-harm / suicide promotion
  
RESTRICTED (Adult Mode Only, Monitored):
  - Adult / sexual content (consenting adults)
  - Must be 18+, must consent
  - Still within limits (no extreme content)
  
ALLOWED:
  - Normal conversations
  - Venting / emotional expression
  - Profanity (not directed at others)
  - Discussing difficult topics (depression, etc.)
  - Roleplay (within boundaries)

Enforcement:
  - Automated + human review
  - Appeals process
  - Transparent communication
  - Document decisions
```

---

## 📈 **Success Metrics & KPIs**

### **User Metrics**

```yaml
Acquisition:
  - New signups per day
  - Signup conversion rate (visits → signups)
  - Source attribution (referral, social, search, etc.)
  - Cost per acquisition (CPA)
  
Activation:
  - % who send first message
  - % who complete onboarding
  - Time to first message
  - Messages sent in first session
  
Engagement:
  - Daily Active Users (DAU)
  - Monthly Active Users (MAU)
  - DAU/MAU ratio (stickiness)
  - Messages per user per day
  - Session duration
  - Session frequency
  - Feature adoption rate
  
Retention:
  - Day 1 retention (target: 50%)
  - Day 7 retention (target: 30%)
  - Day 30 retention (target: 20%)
  - Cohort retention curves
  
Monetization:
  - Free → Premium conversion (target: 5%)
  - Premium → Ultra conversion (target: 20%)
  - Trial → Paid conversion (target: 60%)
  - Time to first payment
  - Average Revenue Per User (ARPU)
  - Lifetime Value (LTV)
  - LTV:CAC ratio (target: 3:1)
  
Churn:
  - Monthly churn rate (target: <5%)
  - Reasons for churn
  - Win-back rate
  
Satisfaction:
  - Net Promoter Score (NPS) (target: 50+)
  - User ratings (target: 4.5/5)
  - Support ticket volume
  - Response time to issues
```

### **Technical Metrics**

```yaml
Performance:
  - API response time (target: <2s)
  - 95th percentile response time
  - Uptime (target: 99.9%)
  - Error rate (target: <0.1%)
  
Costs:
  - AI API costs per user
  - Hosting costs per user
  - Total cost per message
  - Gross margin
  
Quality:
  - Message relevance (user ratings)
  - Context accuracy
  - Personality consistency
  - Hallucination rate (AI making things up)
```

---

## 🚀 **Development Roadmap**

### **Phase 1: MVP (Weeks 1-2)**

```yaml
Goal: Launch basic working bot

Week 1:
  Day 1-2:
    ✅ Set up development environment
    ✅ Create Telegram bot
    ✅ Set up Supabase database
    ✅ Get Gemini API key
    ✅ Basic bot structure (Telegraf.js)
    
  Day 3-4:
    ✅ User onboarding flow
    ✅ Basic conversation (Gemini integration)
    ✅ Store messages in database
    ✅ Simple memory (last 10 messages)
    
  Day 5-6:
    ✅ Daily message limits
    ✅ User preferences
    ✅ Basic commands (/start, /help, /reset)
    
  Day 7:
    ✅ Deploy to Railway
    ✅ Test with 5-10 people
    ✅ Fix critical bugs

Week 2:
  Day 8-9:
    ✅ Improve conversation quality
    ✅ Refine personality
    ✅ Add error handling
    ✅ Improve UX (buttons, formatting)
    
  Day 10-11:
    ✅ Basic memory extraction
    ✅ Remember name, facts
    ✅ Analytics tracking (basic)
    
  Day 12-13:
    ✅ Beta testing with 20-50 users
    ✅ Collect feedback
    ✅ Bug fixes
    
  Day 14:
    ✅ Polish and prepare for launch
    ✅ Create launch materials
    ✅ Soft launch on Reddit/Twitter

Success Criteria:
  ✅ 100 beta users
  ✅ <2% error rate
  ✅ Positive feedback
  ✅ 10+ daily active users
```

### **Phase 2: Monetization (Weeks 3-4)**

```yaml
Goal: Enable premium subscriptions

Week 3:
  Day 15-16:
    ✅ Razorpay integration
    ✅ Payment flow
    ✅ Subscription management
    
  Day 17-18:
    ✅ Premium features:
      - Unlimited messaging
      - Advanced memory
      - Priority responses
    ✅ Upgrade prompts and UI
    
  Day 19-20:
    ✅ Role-play scenarios (3 modes):
      - Girlfriend/Boyfriend
      - Best Friend
      - Life Coach
    ✅ Mode switching UI
    
  Day 21:
    ✅ Test payments
    ✅ Fix payment bugs
    ✅ Prepare for monetization launch

Week 4:
  Day 22-23:
    ✅ Launch premium tier
    ✅ Marketing push
    ✅ Monitor conversions
    
  Day 24-25:
    ✅ Referral program
    ✅ Social sharing
    
  Day 26-28:
    ✅ Optimize conversion funnel
    ✅ A/B test pricing/messaging
    ✅ Improve premium features based on feedback

Success Criteria:
  ✅ 1,000 total users
  ✅ 50+ premium subscribers (5% conversion)
  ✅ ₹5,000/month revenue
  ✅ Payment system stable
```

### **Phase 3: Engagement (Weeks 5-8)**

```yaml
Goal: Increase retention and usage

Week 5-6:
  ✅ Voice message support (input)
  ✅ Voice responses (output, TTS)
  ✅ Speech-to-text integration
  ✅ Test with users
  
Week 7-8:
  ✅ Multiple conversation threads
  ✅ Export conversations (PDF/TXT)
  ✅ Daily check-ins
  ✅ Reminders system
  ✅ Mood tracking
  ✅ Improve role-play scenarios (add 5 more)
  
Success Criteria:
  ✅ 5,000 total users
  ✅ 30-day retention >40%
  ✅ 200+ premium users (4% conversion)
  ✅ ₹20,000/month revenue
```

### **Phase 4: Scale (Months 3-6)**

```yaml
Goal: Grow to 50,000 users

Month 3:
  ✅ Ultra tier launch (₹299/month)
  ✅ Image generation (Stable Diffusion)
  ✅ Custom personality builder
  ✅ Group features
  ✅ Content moderation improvements
  
Month 4:
  ✅ Marketing campaigns (paid ads)
  ✅ SEO & content marketing
  ✅ Partnerships (mental health orgs, etc.)
  ✅ Community building (Telegram channel)
  
Month 5:
  ✅ Advanced analytics
  ✅ Admin dashboard
  ✅ Customer support system
  ✅ Performance optimizations
  
Month 6:
  ✅ More role-play scenarios (10+ total)
  ✅ Animated avatar (videos)
  ✅ Multi-language support (Hindi)
  ✅ Platform expansion (consider mobile app)

Success Criteria:
  ✅ 50,000 total users
  ✅ 2,500 Premium users (5%)
  ✅ 500 Ultra users (1%)
  ✅ ₹4,00,000/month revenue (~$4,800)
  ✅ Profitable (revenue > costs)
  ✅ Strong brand recognition
```

---

## 🛠️ **Technical Architecture**

### **System Diagram**

```
User (Telegram) 
    ↓
Telegram Bot API
    ↓
Railway (Node.js server)
    ↓
┌────────────────────────────────────┐
│     Ananya Bot (Telegraf.js)      │
│                                    │
│  ┌──────────────────────────────┐ │
│  │  Message Handler             │ │
│  │  - Parse message             │ │
│  │  - Check user status         │ │
│  │  - Apply rate limits         │ │
│  │  - Route to appropriate      │ │
│  │    handler (text, voice,     │ │
│  │    command, payment, etc.)   │ │
│  └──────────────────────────────┘ │
│                                    │
│  ┌──────────────────────────────┐ │
│  │  AI Service                  │ │
│  │  - Build context             │ │
│  │  - Call Gemini API           │ │
│  │  - Apply personality         │ │
│  │  - Handle errors/retries     │ │
│  └──────────────────────────────┘ │
│                                    │
│  ┌──────────────────────────────┐ │
│  │  Memory Service              │ │
│  │  - Store/retrieve messages   │ │
│  │  - Extract facts             │ │
│  │  - Vector search             │ │
│  │  - Context management        │ │
│  └──────────────────────────────┘ │
│                                    │
│  ┌──────────────────────────────┐ │
│  │  Payment Service             │ │
│  │  - Create invoices           │ │
│  │  - Handle webhooks           │ │
│  │  - Manage subscriptions      │ │
│  └──────────────────────────────┘ │
│                                    │
│  ┌──────────────────────────────┐ │
│  │  Voice Service               │ │
│  │  - Speech-to-Text            │ │
│  │  - Text-to-Speech            │ │
│  └──────────────────────────────┘ │
│                                    │
│  ┌──────────────────────────────┐ │
│  │  Media Service               │ │
│  │  - Image generation          │ │
│  │  - Video generation          │ │
│  └──────────────────────────────┘ │
└────────────────────────────────────┘
    ↓         ↓         ↓
    ↓         ↓         ↓
┌──────┐ ┌──────────┐ ┌───────────┐
│Gemini│ │ Supabase │ │ Razorpay  │
│  AI  │ │   DB     │ │  Payment  │
└──────┘ └──────────┘ └───────────┘
```

### **Database Schema**

```sql
-- Users table (managed by Supabase Auth, but extended)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  telegram_id BIGINT UNIQUE NOT NULL,
  telegram_username TEXT,
  first_name TEXT,
  is_premium BOOLEAN DEFAULT false,
  premium_tier TEXT, -- 'plus' | 'ultra' | null
  premium_expires_at TIMESTAMP,
  is_banned BOOLEAN DEFAULT false,
  ban_reason TEXT,
  age_verified BOOLEAN DEFAULT false,
  age_verification_date TIMESTAMP,
  adult_mode_enabled BOOLEAN DEFAULT false,
  adult_mode_consent_date TIMESTAMP,
  referral_code TEXT UNIQUE,
  referred_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Conversations table
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT DEFAULT 'New Conversation',
  role_play_mode TEXT, -- 'girlfriend' | 'friend' | 'coach' | etc.
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Messages table
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  message_type TEXT DEFAULT 'text', -- 'text' | 'voice' | 'image' | 'video'
  metadata JSONB, -- For additional data (voice duration, image URL, etc.)
  embedding vector(1536), -- For vector search (pgvector)
  created_at TIMESTAMP DEFAULT NOW()
);

-- User preferences table
CREATE TABLE user_preferences (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  display_name TEXT,
  language TEXT DEFAULT 'en',
  theme TEXT DEFAULT 'dark',
  notifications_enabled BOOLEAN DEFAULT true,
  voice_responses_enabled BOOLEAN DEFAULT false,
  voice_type TEXT DEFAULT 'default',
  personality_settings JSONB, -- Custom personality sliders
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- User memories table
CREATE TABLE user_memories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  conversation_id UUID REFERENCES conversations(id) ON DELETE SET NULL,
  memory_key TEXT NOT NULL,
  memory_value TEXT NOT NULL,
  category TEXT, -- 'people' | 'places' | 'events' | 'preferences' | 'goals' | 'facts'
  confidence FLOAT DEFAULT 1.0,
  source_message_id UUID REFERENCES messages(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, memory_key)
);

-- Subscriptions table
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  plan_type TEXT NOT NULL, -- 'plus' | 'ultra'
  billing_period TEXT NOT NULL, -- 'monthly' | 'annual'
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'INR',
  status TEXT NOT NULL, -- 'active' | 'canceled' | 'expired' | 'trial'
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  auto_renew BOOLEAN DEFAULT true,
  razorpay_subscription_id TEXT,
  razorpay_customer_id TEXT,
  trial_ends_at TIMESTAMP,
  canceled_at TIMESTAMP,
  cancellation_reason TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Payments table
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  subscription_id UUID REFERENCES subscriptions(id),
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'INR',
  status TEXT NOT NULL, -- 'pending' | 'completed' | 'failed' | 'refunded'
  payment_method TEXT, -- 'card' | 'upi' | 'netbanking' | 'wallet'
  razorpay_payment_id TEXT UNIQUE,
  razorpay_order_id TEXT,
  invoice_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Usage stats table
CREATE TABLE usage_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  message_count INT DEFAULT 0,
  voice_message_count INT DEFAULT 0,
  image_generation_count INT DEFAULT 0,
  video_generation_count INT DEFAULT 0,
  total_tokens_used INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, date)
);

-- Feedback table
CREATE TABLE feedback (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  conversation_id UUID REFERENCES conversations(id) ON DELETE SET NULL,
  feedback_type TEXT, -- 'bug' | 'feature_request' | 'general' | 'complaint'
  content TEXT NOT NULL,
  rating INT CHECK (rating BETWEEN 1 AND 5),
  status TEXT DEFAULT 'new', -- 'new' | 'reviewed' | 'resolved'
  admin_notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Flagged content table (for moderation)
CREATE TABLE flagged_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  message_id UUID REFERENCES messages(id) ON DELETE CASCADE,
  flagged_by TEXT, -- 'auto' | 'user_report' | 'admin'
  reason TEXT NOT NULL,
  severity TEXT NOT NULL, -- 'low' | 'medium' | 'high' | 'critical'
  status TEXT DEFAULT 'pending', -- 'pending' | 'reviewed' | 'actioned' | 'dismissed'
  action_taken TEXT, -- 'warning' | 'suspension' | 'ban' | 'none'
  reviewed_by TEXT,
  reviewed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics events table
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  event_name TEXT NOT NULL,
  event_properties JSONB,
  session_id TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_messages_user_id ON messages(user_id);
CREATE INDEX idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX idx_messages_created_at ON messages(created_at);
CREATE INDEX idx_user_memories_user_id ON user_memories(user_id);
CREATE INDEX idx_usage_stats_user_date ON usage_stats(user_id, date);
CREATE INDEX idx_subscriptions_user_status ON subscriptions(user_id, status);
CREATE INDEX idx_flagged_content_status ON flagged_content(status);

-- Enable pgvector extension for semantic search
CREATE EXTENSION IF NOT EXISTS vector;

-- Vector similarity search function
CREATE OR REPLACE FUNCTION match_messages(
  query_embedding vector(1536),
  match_threshold float,
  match_count int,
  target_user_id uuid
)
RETURNS TABLE (
  id uuid,
  content text,
  similarity float
)
LANGUAGE sql STABLE
AS $$
  SELECT
    id,
    content,
    1 - (embedding <=> query_embedding) AS similarity
  FROM messages
  WHERE user_id = target_user_id
    AND 1 - (embedding <=> query_embedding) > match_threshold
  ORDER BY embedding <=> query_embedding
  LIMIT match_count;
$$;
```

---

## 🧪 **Testing Strategy**

### **Unit Tests**

```yaml
Test Coverage Target: 80%

Components to Test:
  - Message parsing
  - Command handlers
  - Memory extraction logic
  - Payment webhooks
  - Subscription management
  - Role-play mode switching
  - Rate limiting
  - Content moderation filters

Tools:
  - Jest (test framework)
  - Supertest (HTTP testing)
  - Mock APIs (Gemini, Razorpay)

Example:
  describe('Message Handler', () => {
    it('should limit free users to 50 messages/day', async () => {
      const user = createFreeUser();
      user.daily_message_count = 50;
      
      const result = await handleMessage(user, "Hello");
      
      expect(result.allowed).toBe(false);
      expect(result.message).toContain('limit reached');
    });
  });
```

### **Integration Tests**

```yaml
Test Scenarios:
  - Complete user journey (signup → chat → upgrade → use premium)
  - Payment flow end-to-end
  - Voice message processing
  - Memory recall accuracy
  - Role-play mode switching
  - Subscription expiry handling

Tools:
  - Playwright or Puppeteer (if web UI)
  - Telegram Bot API test mode
  - Staging environment
```

### **Load Testing**

```yaml
Goals:
  - Handle 1,000 concurrent users
  - Response time <2s under load
  - No errors under normal load

Tools:
  - Artillery or k6
  - Simulate realistic usage patterns

Scenarios:
  - 1,000 users sending messages simultaneously
  - 100 users upgrading to premium
  - 50 users generating images
```

### **User Acceptance Testing (UAT)**

```yaml
Beta Testing:
  - 50-100 beta users
  - Diverse backgrounds
  - Test all features
  - Collect feedback via forms
  
Metrics:
  - Task completion rate
  - User satisfaction (survey)
  - Bug reports
  - Feature requests
```

---

## 📝 **Documentation Requirements**

### **User Documentation**

```yaml
Help Center:
  - Getting Started Guide
  - Feature tutorials
  - FAQs
  - Troubleshooting
  - Premium upgrade guide
  - Privacy & security info

In-Bot Help:
  /help command with:
    - Quick start
    - Command list
    - Feature overview
    - Contact support
```

### **Developer Documentation**

```yaml
Technical Docs:
  - Architecture overview
  - API documentation
  - Database schema
  - Deployment guide
  - Environment setup
  - Contribution guidelines (if open-sourcing parts)

Code Documentation:
  - JSDoc comments
  - README files
  - Setup instructions
  - Environment variables list
```

---

## 💼 **Business Considerations**

### **Legal Entity**

```yaml
India:
  - Register as Private Limited or LLP
  - Get GST registration
  - PAN card
  - Business bank account
  
Legal Support:
  - Engage lawyer for:
    • Terms of Service review
    • Privacy Policy drafting
    • Content moderation policy
    • User agreements
    • Intellectual property protection
```

### **Insurance**

```yaml
Recommended Coverage:
  - Professional liability insurance
  - Cyber liability insurance
  - Errors & omissions insurance
  
Cost: ₹50,000-2,00,000/year
```

### **Support**

```yaml
Customer Support:
  - /feedback command
  - Email: support@ananya.bot
  - Response time target: <24 hours
  - Escalation path for urgent issues
  
Initially: Solo founder handles support
Scale: Hire part-time support agent at 10,000 users
```

---

## 🎉 **Launch Plan**

### **Pre-Launch (2 weeks before)**

```yaml
Week -2:
  ✅ Finalize MVP features
  ✅ Complete beta testing
  ✅ Fix critical bugs
  ✅ Prepare marketing materials:
    - Launch video/demo
    - Social media posts
    - Press release
    - Product Hunt page
  
Week -1:
  ✅ Set up monitoring and alerts
  ✅ Load test
  ✅ Legal docs (TOS, Privacy Policy) live
  ✅ Payment testing (test mode → live mode)
  ✅ Notify beta users of official launch
  ✅ Create launch day schedule
```

### **Launch Day**

```yaml
Morning:
  - Final checks
  - Switch to production mode
  - Announce on Twitter/X
  
Noon:
  - Launch on Product Hunt
  - Post in relevant Reddit communities:
    • r/IndiaInvestments
    • r/bangalore
    • r/india
    • r/Entrepreneur
  
Evening:
  - Monitor metrics
  - Respond to comments/questions
  - Fix any critical issues
  - Celebrate! 🎉
  
Night:
  - Review day's performance
  - Plan next day actions
```

### **Post-Launch (Week 1)**

```yaml
  - Monitor daily:
    • Signups
    • Active users
    • Errors
    • User feedback
    
  - Quick iterations:
    • Fix bugs
    • Improve UX based on feedback
    • Optimize performance
    
  - Continue marketing:
    • More Reddit/Twitter posts
    • Reach out to bloggers/influencers
    • Create content (articles, videos)
    
  - Collect testimonials from happy users
```

---

## 🎯 **Success Criteria (MVP)**

```yaml
Must Have:
  ✅ 100+ beta users within first week
  ✅ <2% error rate
  ✅ 95%+ uptime
  ✅ Average session >5 minutes
  ✅ Positive user feedback (>4/5 rating)
  ✅ 10+ daily active users consistently
  
Nice to Have:
  - 500+ signups in first month
  - 5+ premium subscribers
  - Featured in tech blogs/media
  - Viral social media post
```

---

## 📞 **Contact & Stakeholders**

```yaml
Product Owner: [Your Name]
Email: [your-email]
Telegram: @[your-username]

Development Team: Solo developer (initially)

Legal Counsel: [TBD]
Accountant: [TBD]
```

---

## 📚 **Appendix**

### **Glossary**

```yaml
AI: Artificial Intelligence
LLM: Large Language Model
NLP: Natural Language Processing
TTS: Text-to-Speech
STT: Speech-to-Text
RAG: Retrieval Augmented Generation
NSFW: Not Safe For Work
CSAM: Child Sexual Abuse Material
DAU: Daily Active Users
MAU: Monthly Active Users
MRR: Monthly Recurring Revenue
ARR: Annual Recurring Revenue
ARPU: Average Revenue Per User
LTV: Lifetime Value
CAC: Customer Acquisition Cost
```

### **References**

```yaml
- Telegram Bot API: https://core.telegram.org/bots/api
- Telegraf.js: https://telegraf.js.org/
- Google Gemini API: https://ai.google.dev/docs
- Supabase Docs: https://supabase.com/docs
- Razorpay API: https://razorpay.com/docs/api/
- pgvector: https://github.com/pgvector/pgvector
```

---

## ✅ **Approval & Sign-off**

```yaml
Document Reviewed By: [Name]
Date: [Date]
Approved for Development: [ ] Yes [ ] No
Notes: 
```

---

**END OF PRODUCT REQUIREMENTS DOCUMENT**

**Version:** 1.0  
**Total Pages:** [Auto-generated]  
**Word Count:** ~18,000 words  
**Last Updated:** April 17, 2026

---

## 🚀 **Ready to Build?**

This PRD covers:
✅ All features (Free, Premium, Ultra)
✅ NSFW content handling (with legal/ethical guidelines)
✅ Role-play scenarios (the money maker!)
✅ Technical architecture
✅ Database schema
✅ Monetization strategy
✅ Legal & compliance
✅ Testing strategy
✅ Launch plan
✅ Success metrics

**Next Steps:**
1. Review and approve this PRD
2. Set up development environment
3. Start Phase 1 (MVP) development
4. Launch in 2 weeks!

Let's build Ananya! 💪🚀
