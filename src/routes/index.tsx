import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Certificates } from "@/components/portfolio/Certificates";
import { Awards } from "@/components/portfolio/Awards";

import { Terminal } from "@/components/portfolio/Terminal";
import { Contact } from "@/components/portfolio/Contact";
import { profile } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — Portfolio` },
      {
        name: "description",
        content:
          "Personal portfolio: projects, skills, experience and contact details. Terminal-inspired dark design.",
      },
      { property: "og:title", content: `${profile.name} — Portfolio` },
      {
        property: "og:description",
        content: "Projects, skills, experience and contact details in one terminal-inspired page.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Awards />
        
        <Terminal />
        <Contact />
      </main>
    </div>
  );
}