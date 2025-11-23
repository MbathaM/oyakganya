import { type NavItem } from "@/types";
export const siteConfig = {
  url: "https://oyakganya.co.za",
  name: "Oyakganya Consulting Hub",
  short_name: "OCH",
  tagline: "HR Consulting • Business Development • Life Coaching",
  description:
    "Oyakganya Consulting Hub, led by Founder and HR Consultant Onkabetse Mphako, provides professional human resource consulting, life coaching, business advisory services, and people-focused development solutions. We empower individuals and organizations through structured guidance, personal growth systems, and strategic consulting tailored for long-term impact.",
  regNo: "K2024302478",
  vatNo: "9182713272",
  author: {
    name: "Onkabetse Mphako",
    email: "info@oyakganya.com",
    url: "https://oyakganya.co.za",
    phone: "+27 82 878 9010",
  },

  address: {
    building: "Oyakganya Consulting Hub",
    street: "17 Marhope Street, Tlhahane West",
    country: "South Africa",
    city: "Rustenburg",
    province: "North West",
    postcode: "0299",
  },

  links: {
    twitter: "",
    github: "",
    linkedIn: "https://www.linkedin.com/in/onkabetse-mphako-482592117",
  },

  keywords: [
    "Oyakganya Consulting Hub",
    "OCH",
    "Onkabetse Mphako",
    "HR Consultant",
    "Certified Life Coach",
    "Business Development",
    "Coaching Services",
    "HR Training",
    "South Africa Consulting",
  ],

  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Why Us", href: "/why-us" },
    { label: "Founder", href: "/founder" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#0a1124", // deep navy to match brand card
};
