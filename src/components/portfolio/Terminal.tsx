import { useRef, useState, type FormEvent } from "react";
import {
  profile,
  about,
  skillGroups,
  projects,
  timeline,
  contact,
} from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

type Line = {
  type: "input" | "output" | "error";
  text: string;
};

const aboutFile = () => about.paragraphs.join("\n\n");

const skillsFile = () =>
  skillGroups
    .map((cat) =>
      `${cat.category}\n` +
      cat.groups.map((g) => `  ${g.title}: ${g.items.join(", ")}`).join("\n")
    )
    .join("\n\n");

const projectsFile = () =>
  projects.map((p, i) => `${i + 1}. ${p.title}\n   ${p.tag}`).join("\n");

const experienceFile = () =>
  timeline
    .filter((e) => e.kind === "Experience")
    .map((e) => `${e.period} — ${e.title}${e.org ? ` @ ${e.org}` : ""}`)
    .join("\n");

const educationFile = () =>
  timeline
    .filter((e) => e.kind === "Education")
    .map((e) => `${e.period} — ${e.title}${e.org ? ` @ ${e.org}` : ""}`)
    .join("\n");

const contactFile = () =>
  contact.links.map((l) => `${l.label}: ${l.value}`).join("\n");

const FILES: Record<string, () => string> = {
  "about.txt": aboutFile,
  "skills.txt": skillsFile,
  "projects.txt": projectsFile,
  "experience.txt": experienceFile,
  "education.txt": educationFile,
  "contact.txt": contactFile,
};

const HELP_TEXT = `Available commands:
  help              show this list
  whoami            who am I
  ls                list available files
  cat <file>        print a file (try: cat about.txt)
  skills            list skills
  projects          list projects
  experience        list work experience
  education         list education
  contact           show contact info
  clear             clear the terminal`;

function runCommand(raw: string): string {
  const input = raw.trim();
  if (!input) return "";
  const [cmd, ...rest] = input.split(/\s+/);
  const arg = rest.join(" ");

  switch (cmd) {
    case "help":
      return HELP_TEXT;
    case "whoami":
      return `${profile.name}\n${profile.terminal.output}`;
    case "ls":
      return Object.keys(FILES).join("  ");
    case "cat": {
      if (!arg) return "usage: cat <file>";
      const file = FILES[arg];
      if (!file) return `cat: ${arg}: No such file`;
      return file();
    }
    case "skills":
      return skillsFile();
    case "projects":
      return projectsFile();
    case "experience":
      return experienceFile();
    case "education":
      return educationFile();
    case "contact":
      return contactFile();
    default:
      return `command not found: ${cmd} (type "help" for a list)`;
  }
}

export function Terminal() {
  const [history, setHistory] = useState<Line[]>([
    { type: "output", text: 'Type "help" to get started.' },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const command = input.trim();
    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = runCommand(command);
    setHistory((prev) => [
      ...prev,
      { type: "input", text: command },
      ...(output ? [{ type: "output" as const, text: output }] : []),
    ]);
    setInput("");
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
    });
  }

  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="terminal" command="./explore.sh --interactive" title="Explore via Terminal" />
        <div className="mt-12 overflow-hidden rounded-lg border border-border bg-surface">
          <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">{profile.terminal.title}</span>
          </div>

          <div
            ref={scrollRef}
            className="h-80 overflow-y-auto px-4 py-4 font-mono text-sm"
            onClick={() => document.getElementById("terminal-input")?.focus()}
          >
            {history.map((line, i) =>
              line.type === "input" ? (
                <div key={i} className="flex gap-2">
                  <span className="text-primary">$</span>
                  <span>{line.text}</span>
                </div>
              ) : (
                <pre key={i} className="whitespace-pre-wrap pl-4 text-muted-foreground">
                  {line.text}
                </pre>
              )
            )}

            <form onSubmit={handleSubmit} className="flex gap-2">
              <span className="text-primary">$</span>
              <input
                id="terminal-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                spellCheck={false}
                className="w-full bg-transparent outline-none"
                placeholder="type a command..."
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}