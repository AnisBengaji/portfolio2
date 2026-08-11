import { timeline } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const entries = timeline.filter((entry) => entry.kind === "Experience");

  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="experience" command="cat experience.log" title="Experience" />
        <ol className="mt-12 space-y-8 border-l border-border pl-8">
          {entries.map((entry, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="rounded border border-border bg-surface-2 px-2 py-0.5 text-primary">
                  {entry.kind}
                </span>
                <span className="text-muted-foreground">{entry.period}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{entry.title}</h3>
              {entry.org && <p className="mt-1 text-sm text-muted-foreground">{entry.org}</p>}
              {entry.bullets && (
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {entry.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}