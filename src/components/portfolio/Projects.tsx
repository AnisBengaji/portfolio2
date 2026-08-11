import { projects } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="projects" command="ls ./projects" title="Projects" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={i}
              className="flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary/50"
            >
              <span className="w-fit rounded border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                {p.tag}
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">{p.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s, j) => (
                  <li key={j} className="font-mono text-xs text-muted-foreground">
                    #{s}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-4 pt-2">
                {p.links.map((l, j) => (
                  <a
                    key={j}
                    href={l.href}
                    className="font-mono text-sm text-primary underline-offset-4 hover:underline"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
