import { awards } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Awards() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="awards" command="./awards.sh --list" title="Awards" />
        <div className="mt-12 space-y-4">
          {awards.map((award, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/50"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold">{award.title}</p>
                <span className="font-mono text-xs text-muted-foreground">{award.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-primary">{award.org}</p>
              <p className="mt-3 text-sm text-muted-foreground">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}