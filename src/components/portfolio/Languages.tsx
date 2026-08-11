import { languages } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Languages() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="languages" command="./languages.sh --list" title="Languages" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((lang, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/50"
            >
              <p className="font-semibold">{lang.name}</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}