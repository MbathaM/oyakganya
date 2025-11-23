import {
  Brain,
  Users, 
  TrendingUp, 
  Target,
  ShieldCheck,
  Lock,
  Star
} from 'lucide-react';
import {  ServiceItem, ValueItem, TestimonialItem } from '@/types';

// Services updated to match PDF Section 5 (A, B, C)
export const SERVICES: ServiceItem[] = [
  {
    title: "Coaching Services",
    description: "Unlocking potential through confidence, clarity, and strategic intention.",
    icon: Brain, // Using a brain icon or similar for mindset
    details: [
      "Confidence & Mindset Coaching (6 weeks)",
      "Career Coaching",
      "Limiting Beliefs Coaching",
      "Self-leadership and Personal Strategy Sessions"
    ]
  },
  {
    title: "HR Consulting Services",
    description: "Strengthening people systems with compliance and inclusivity.",
    icon: Users,
    details: [
      "Employment Equity Compliance",
      "HR Policies & Procedures Development",
      "Recruitment & Talent Acquisition (including Job Descriptions)",
      "Talent Management"
    ]
  },
  {
    title: "Career Development Services",
    description: "Empowering professionals to present themselves with excellence.",
    icon: TrendingUp,
    details: [
      "Professional CV Revamps",
      "LinkedIn Profile Alignment",
      "Career Strategy & Job Readiness Support"
    ]
  }
];

// Updated to GRACE Framework from PDF Section 4
export const CORE_VALUES: ValueItem[] = [
  {
    title: "Growth",
    description: "We champion continuous learning, intentional development, and transformative progress for individuals and organisations.",
    icon: TrendingUp
  },
  {
    title: "Responsibility",
    description: "We uphold accountability, honour commitments, and deliver ethical, reliable service at every stage.",
    icon: ShieldCheck
  },
  {
    title: "Authentic Empowerment",
    description: "We create supportive environments that nurture confidence, clarity, and meaningful self-leadership.",
    icon: Target
  },
  {
    title: "Confidentiality",
    description: "We respect privacy and protect the trust clients place in us through strict confidentiality.",
    icon: Lock
  },
  {
    title: "Excellence",
    description: "We deliver high-quality, professional, impactful services that reflect our commitment to distinction.",
    icon: Star
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Oyakganya Consulting Hub transformed our leadership team's approach. The NLP coaching unlocked a level of emotional intelligence we hadn't seen before.",
    author: "Sarah M.",
    position: "HR Director",
    company: "Mining Sector"
  },
  {
    quote: "Professional, insightful, and deeply committed to transformation. Onkabetse's guidance on Employment Equity compliance was invaluable for our audit.",
    author: "David K.",
    position: "CEO",
    company: "Logistics & Supply Chain"
  },
  {
    quote: "A true partner in organisational development. They didn't just give us a strategy; they walked the path of implementation with us.",
    author: "Lerato P.",
    position: "Operations Manager",
    company: "Manufacturing"
  }
];

// Updated System Instruction to match PDF details
export const SYSTEM_INSTRUCTION = `
You are the AI assistant for Oyakganya Consulting Hub, a transformation-driven coaching and HR consulting practice based in Rustenburg, South Africa.
Founder: Onkabetse Mphako (People-focused coach & HR professional).

Goal: Answer questions using the specific profile information below. Be professional, warm, and transformation-oriented.

Company Overview:
Dedicated to elevating individuals and organisations through clarity, confidence, and strategic intention.
Work integrates coaching psychology, HR compliance expertise, and behavioural insight.

Services (Strictly adhere to these):
1. Coaching Services: Confidence & Mindset Coaching (6 weeks), Career Coaching, Limiting Beliefs Coaching, Self-leadership.
2. HR Consulting Services: Employment Equity Compliance, HR Policies, Recruitment & Talent Acquisition, Talent Management.
3. Career Development Services: Professional CV Revamps, LinkedIn Profile Alignment, Career Strategy.

Values (GRACE Framework):
Growth, Responsibility, Authentic Empowerment, Confidentiality, Excellence.

Vision:
To be the leading and trusted partner in personal transformation and organisational development.

Why Choose Us:
Holistic combination of coaching and HR consulting. Human-centred, psychologically safe approach. Compliance-aligned HR support.

Target Clients: SMEs, Start-ups, Professionals seeking growth, Organisations requiring HR compliance.
`;

