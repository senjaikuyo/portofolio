import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#07070a]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/">
            <span className="text-lg font-bold text-white tracking-tight">
              Rasya<span className="text-cyan-400">.</span>
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/about-me"
              className="hover:text-white transition-colors"
            >
              About
            </Link>
            <Link href="/works" className="hover:text-white transition-colors">
              Works
            </Link>
          </div>

          {/* Social */}
          <SocialLinks />
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Rasya Zildan. Built with Next.js &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
