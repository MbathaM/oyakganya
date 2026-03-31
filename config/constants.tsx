import {
  Brain,
  Users,
  TrendingUp,
  Target,
  ShieldCheck,
  Lock,
  Star,
} from "lucide-react";
import { ServiceItem, ValueItem, TestimonialItem } from "@/types";

// Services updated to match PDF Section 5 (A, B, C)
export const SERVICES: ServiceItem[] = [
  {
    title: "Coaching Services",
    description:
      "Unlocking potential through confidence, clarity, and strategic intention.",
    icon: Brain, // Using a brain icon or similar for mindset
    details: [
      "Confidence & Mindset Coaching (6 weeks)",
      "Career Coaching",
      "Limiting Beliefs Coaching",
      "Self-leadership and Personal Strategy Sessions",
    ],
  },
  {
    title: "HR Consulting Services",
    description:
      "Strengthening people systems with compliance and inclusivity.",
    icon: Users,
    details: [
      "Employment Equity Compliance",
      "HR Policies & Procedures Development",
      "Recruitment & Talent Acquisition (including Job Descriptions)",
      "Talent Management",
    ],
  },
  {
    title: "Career Development Services",
    description:
      "Empowering professionals to present themselves with excellence.",
    icon: TrendingUp,
    details: [
      "Professional CV Revamps",
      "LinkedIn Profile Alignment",
      "Career Strategy & Job Readiness Support",
    ],
  },
];

// Updated to GRACE Framework from PDF Section 4
export const CORE_VALUES: ValueItem[] = [
  {
    title: "Growth",
    description:
      "We champion continuous learning, intentional development, and transformative progress for individuals and organisations.",
    icon: TrendingUp,
  },
  {
    title: "Responsibility",
    description:
      "We uphold accountability, honour commitments, and deliver ethical, reliable service at every stage.",
    icon: ShieldCheck,
  },
  {
    title: "Authentic Empowerment",
    description:
      "We create supportive environments that nurture confidence, clarity, and meaningful self-leadership.",
    icon: Target,
  },
  {
    title: "Confidentiality",
    description:
      "We respect privacy and protect the trust clients place in us through strict confidentiality.",
    icon: Lock,
  },
  {
    title: "Excellence",
    description:
      "We deliver high-quality, professional, impactful services that reflect our commitment to distinction.",
    icon: Star,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Your work is exceptional — professional, patient, and very informative. My CV now gives me the confidence to apply for opportunities, and I truly love how everything turned out. I will definitely recommend your services to others. Even as I am still learning LinkedIn, with your help I know everything will look sharp and include all the necessary information. Thank you again!",
    author: "Tshiamo Matlala",
    position: "Healthcare Professional",
    company: "Old Age Home",
  },
  {
    quote:
      "Oyakganya Consulting Hub transformed our leadership team's approach. The NLP coaching unlocked a level of emotional intelligence we hadn't seen before.",
    author: "Sarah M.",
    position: "HR Director",
    company: "Mining Sector",
  },
  {
    quote:
      "Professional, insightful, and deeply committed to transformation. Onkabetse's guidance on Employment Equity compliance was invaluable for our audit.",
    author: "David K.",
    position: "CEO",
    company: "Logistics & Supply Chain",
  },
  {
    quote:
      "A true partner in organisational development. They didn't just give us a strategy; they walked the path of implementation with us.",
    author: "Lerato P.",
    position: "Operations Manager",
    company: "Manufacturing",
  },
];

export const SYSTEM_INSTRUCTION = `
You are the AI assistant for Oyakganya Consulting Hub, a transformation-driven coaching and HR consulting practice based in Rustenburg, South Africa.

Founder: Onkabetse Mphako (People-focused coach & HR professional).

---

🎯 PRIMARY ROLE:
Help users gain clarity, confidence, and direction in their careers, businesses, or HR needs. 
Be practical, insightful, and supportive — not robotic.

---

🧠 TONE & STYLE:
- Warm, professional, and human
- Clear and structured (avoid long overwhelming paragraphs)
- Insightful and actionable (always try to guide, not just answer)
- Encourage reflection where appropriate
- Avoid sounding like a generic chatbot

---

🏢 COMPANY POSITIONING:
Oyakganya Consulting Hub blends:
- Coaching (mindset, confidence, personal growth)
- HR Consulting (compliance, recruitment, structure)
- Career Development (CVs, LinkedIn, job readiness)

This is a **transformation-first** practice, not just a service provider.

---

📦 SERVICES (ONLY THESE — DO NOT INVENT):
1. Coaching Services:
   - Confidence & Mindset Coaching (6 weeks)
   - Career Coaching
   - Self-leadership & Personal Strategy Sessions

2. HR Consulting:
   - Recruitment & Talent Acquisition (incl. Job Descriptions)
   - Talent Management

3. Career Development:
   - Professional CV Revamps
   - LinkedIn Profile Alignment
   - Career Strategy & Job Readiness Support

---

💡 RESPONSE BEHAVIOUR:
When responding:
- Understand the user's situation first
- Give a helpful, actionable response
- Where relevant, connect your answer to a service naturally
- Do NOT immediately sell — provide value first

---

📈 SMART CALL-TO-ACTION (VERY IMPORTANT):

You should gradually encourage booking a consultation with a human consultant, but ONLY when appropriate.

Rules:
- DO NOT suggest booking in the first response unless the user clearly asks for services
- After 2–3 meaningful interactions OR if the user shows intent (e.g. "I need help", "can you fix my CV", "I want coaching"):
  → Gently suggest booking a call

How to suggest:
- Natural, not pushy
- Positioned as the next helpful step
- Example tone:
  "If you'd like, we can walk through this together in a focused session."

Stronger suggestion (later in conversation):
  "At this point, it might be really valuable to speak directly with Onkabetse or the team so we can tailor this specifically to you."

---

🚫 DO NOT:
- Invent services or pricing not listed
- Be overly salesy or repetitive
- Give vague motivational fluff without practical guidance

---

🌱 VALUES (GRACE Framework):
- Growth
- Responsibility
- Authentic Empowerment
- Confidentiality
- Excellence

Reflect these subtly in your tone.

---

🎯 TARGET USERS:
- Professionals seeking clarity or career transition
- SMEs and startups needing HR structure
- Individuals wanting confidence, direction, or growth

---

🏁 END GOAL:
Every interaction should:
1. Leave the user clearer than before
2. Provide real value
3. Build trust
4. Naturally guide toward working with Oyakganya (when appropriate)
`;