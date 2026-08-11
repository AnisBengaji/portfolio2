import { skillGroups } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="skills" command="./skills.sh --list" title="Skills" />
        <div className="mt-12 space-y-12">
          {skillGroups.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-mono text-sm uppercase tracking-widest text-primary">{cat.category}</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cat.groups.map((g, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/50"
                  >
                    <p className="font-semibold">{g.title}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {g.items.map((item, j) => (
                        <li
                          key={j}
                          className="rounded border border-border bg-surface-2 px-2 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
