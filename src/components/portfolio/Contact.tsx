import { contact, profile } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="contact" command="./contact.sh" title="Contact" />
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{contact.blurb}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contact.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              download={l.href.endsWith(".pdf") || undefined}
              className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/50"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-primary">{l.label}</p>
              <p className="mt-2 break-all text-sm text-muted-foreground">{l.value}</p>
            </a>
          ))}
        </div>
        <footer className="mt-20 border-t border-border pt-8 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} — built with care.
        </footer>
      </div>
    </section>
  );
}