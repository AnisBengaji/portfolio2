import { useEffect, useRef, useState } from "react";
import { profile } from "@/content/portfolio";

function TerminalCard() {
  const [typed, setTyped] = useState("");
  const full = profile.terminal.nextCommand;

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, [full]);

  return (
    <div className="glow-primary overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-destructive/80" />
        <span className="h-3 w-3 rounded-full bg-chart-4/80 [background:oklch(0.8_0.15_85)]" />
        <span className="h-3 w-3 rounded-full bg-primary/80" />
        <span className="flex-1 text-center font-mono text-xs text-muted-foreground">
          {profile.terminal.title}
        </span>
      </div>
      <div className="space-y-3 p-6 font-mono text-sm">
        <p>
          <span className="text-primary">$ </span>
          {profile.terminal.command}
        </p>
        <p className="text-muted-foreground">{profile.terminal.output}</p>
        <p>
          <span className="text-primary">$ </span>
          {typed}
          <span className="caret-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-primary" />
        </p>
      </div>
    </div>
  );
}

const cvOptions = [
  { label: "English", href: "/english-cv.pdf" },
  { label: "Français", href: "/french-cv.pdf" },
];

function DownloadCvMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="rounded-md border border-border bg-surface px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        Download CV
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-10 mt-2 w-44 overflow-hidden rounded-md border border-border bg-surface shadow-lg"
        >
          {cvOptions.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              download
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:bg-surface-2 hover:text-primary"
            >
              {opt.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="grid-backdrop absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-36 lg:grid-cols-[1.1fr_1fr] lg:pb-32 lg:pt-44">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {profile.availability}
          </span>
          <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-7xl">{profile.name}</h1>
          <p className="mt-6 max-w-xl text-xl text-muted-foreground sm:text-2xl">{profile.tagline}</p>
          <p className="mt-4 font-mono text-sm text-muted-foreground">{profile.subline}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact me
            </a>
            <DownloadCvMenu />
          </div>

          <div className="mt-10 space-y-1 font-mono text-xs text-muted-foreground">
            {profile.metaLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <TerminalCard />
      </div>
    </section>
  );
}