export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "twitter";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/rasyazildan",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rasyazildan",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:rasya@example.com",
    icon: "mail",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/rasyazildan",
    icon: "twitter",
  },
];
