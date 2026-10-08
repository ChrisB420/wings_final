export const siteConfig = {
  name: "Wings of the Cherubim",
  tagline: "Global discipleship. Prophetic clarity. Kingdom impact.",
  description:
    "A modern ministry platform for biblical teaching, spiritual formation, and mission-driven outreach across nations.",
  founder: "Gregory Schadt",
  domain: "www.wingsofthecherubim.org",
  url: "https://www.wingsofthecherubim.org",
  email: "wingsofthecherubim01@gmail.com",
  phone: { display: "0103591141", tel: "+254103591141" },
  outreachPhone: "+254-793-665-764",
  whatsappUrl:
    "https://wa.me/254103591141?text=Hello%20Wings%20of%20the%20Cherubim",
  zoomUrl: "https://zoom.us/j/your-live-link",
} as const;

export const giving = {
  mpesa: { tillNumber: "", paybill: "", accountName: "", sendToPhone: "" },
  bank: { bankName: "", accountName: "", accountNumber: "", swift: "" },
  paypalUrl: "",
  cardUrl: "",
};

export const formspree = {
  contact: "mwvyqyop",
  warriorSignup: "xzzgavrp",
  seminar: "mwvyqyop",
  newsletter: "mwvyqyop",
} as const;

export const formspreeUrl = (id: string) => `https://formspree.io/f/${id}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/teachings", label: "Teachings" },
  { href: "/seminars", label: "Seminars" },
  { href: "/outreach", label: "Outreach" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = {
  explore: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Teachings", href: "/teachings" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Seminars", href: "/seminars" },
    { label: "Scroll Library", href: "/library" },
    { label: "Outreach", href: "/outreach" },
    { label: "Gallery", href: "/gallery" },
    { label: "Give", href: "/give" },
  ],
} as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
] as const;
