import { portfolio } from "@/src/config/portfolio";

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
