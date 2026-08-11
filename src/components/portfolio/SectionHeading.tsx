export function SectionHeading({ command, title, id }: { command: string; title: string; id?: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="font-mono text-sm text-primary">
        <span className="text-muted-foreground">$ </span>
        {command}
        <span className="caret-blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-primary" />
      </p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    </div>
  );
}
