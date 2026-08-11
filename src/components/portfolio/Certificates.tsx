import { certificates } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Certificates() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="certificates" command="./certificates.sh --list" title="Certificates" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/50"
            >
              <p className="font-semibold">{cert.title}</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}