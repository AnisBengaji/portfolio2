import { about } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="about" command="cat about.md" title="About" />
        <div className="mt-12 grid gap-10 md:grid-cols-[260px_1fr]">
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-8 w-8 border-l-2 border-t-2 border-primary" />
            <div className="aspect-4/5 overflow-hidden rounded-md border border-border bg-surface">
              {about.photo ? (
                <img src={about.photo} alt="Portrait" className="h-full w-full object-cover" loading="lazy" />
              ) : (
                <div className="flex h-full items-center justify-center p-6 text-center font-mono text-xs text-muted-foreground">
                  add your photo in
                  <br />
                  src/content/portfolio.ts
                </div>
              )}
            </div>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
