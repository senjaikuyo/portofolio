import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { socialLinks } from "@/data/social";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
};

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="p-2.5 rounded-lg bg-white/[0.04] text-gray-400 border border-white/[0.06] hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}
