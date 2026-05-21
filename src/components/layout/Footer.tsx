import Link from "next/link";
import { GitBranch, Link2, X, Coffee } from "lucide-react";
import { portfolio } from "@/src/config/portfolio";

const socialLinks = [
  { href: portfolio.github, icon: GitBranch, label: "GitHub" },
  { href: portfolio.linkedin, icon: Link2, label: "LinkedIn" },
  { href: portfolio.twitter, icon: X, label: "Twitter" },
  { href: portfolio.kofi, icon: Coffee, label: "Ko-fi" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-xs text-muted-foreground">
          © {year} {portfolio.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
