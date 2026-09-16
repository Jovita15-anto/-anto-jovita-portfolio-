import {
  Brain,
  Database,
  Bot,
  Sparkles,
  Code2,
  Palette,
  ArrowUpRight,
} from "lucide-react";

const technologies = [
  {
    title: "Artificial Intelligence",
    description:
      "Exploring intelligent systems, computer vision, generative AI, and practical AI applications.",
    icon: Brain,
  },
  {
    title: "Data Science",
    description:
      "Working with data analysis, machine learning, visualization, and predictive models.",
    icon: Database,
  },
  {
    title: "Generative AI & RAG",
    description:
      "Building AI applications that connect language models with useful knowledge through retrieval-augmented generation.",
    icon: Sparkles,
  },
  {
    title: "Agentic AI",
    description:
      "Learning how AI agents can reason, use tools, coordinate tasks, and complete workflows.",
    icon: Bot,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing clean and intuitive digital experiences through wireframes, prototypes, visual design, and Figma.",
    icon: Palette,
  },
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive web interfaces using React, Next.js, Tailwind CSS, and modern frontend tools.",
    icon: Code2,
  },
];

const projects = [
  {
    number: "01",
    title: "KuralKodu",
    category: "Civic Technology",
    description:
      "An emergency reporting platform for reporting and tracking civic issues.",
    github: "https://github.com/Jovita15-anto/KURALKODU",
  },
  {
    number: "02",
    title: "AI Customer Intelligence RAG",
    category: "Generative AI · RAG",
    description:
      "A retrieval-augmented AI project exploring intelligent knowledge retrieval and customer information.",
    github:
      "https://github.com/Jovita15-anto/AI-Customer-Intelligence-RAG",
  },
  {
    number: "03",
    title: "Multimodal RAG Research Assistant",
    category: "Multimodal AI · RAG",
    description:
      "A research assistant project exploring multimodal retrieval and AI-powered knowledge understanding.",
    github:
      "https://github.com/Jovita15-anto/Multimodal-RAG-Research-Assistant",
  },
  {
    number: "04",
    title: "AI Research Agent",
    category: "Agentic AI",
    description:
      "An AI agent project exploring research workflows and agent-based problem solving.",
    github:
      "https://github.com/Jovita15-anto/AI-Research-Agent",
  },
  {
    number: "05",
    title: "Emotion-Based Face Recognition",
    category: "Computer Vision",
    description:
      "A deep-learning project exploring facial emotion recognition from images.",
    github:
      "https://github.com/Jovita15-anto/Emotion-based-Face-recognition",
  },
  {
    number: "06",
    title: "Train Route Analysis",
    category: "Data Science",
    description:
      "A data analysis project exploring train routes, patterns, visualization, and predictive modeling.",
    github:
      "https://github.com/Jovita15-anto/Train-Route-Analysis",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="border-b border-[#D5CEC1] px-6 pt-16 pb-12 md:px-12 md:pt-20 md:pb-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.4em] text-[#294C42]">
            THE TECHNOLOGY SIDE
          </p>

          <h2 className="mt-5 font-[var(--font-playfair)] text-5xl leading-tight text-[#1F2933] md:text-6xl">
            Building, experimenting,
            <br />
            <span className="italic text-[#294C42]">
              and learning.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#52606D] md:text-lg">
            I enjoy understanding how technology works and turning
            what I learn into practical projects.
          </p>
        </div>

        {/* Technology cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#DDD6C9] bg-[#F1F3F0] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-[#294C42]"
                />

                <h3 className="mt-7 font-[var(--font-playfair)] text-2xl text-[#1F2933]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#52606D]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Projects heading */}
        <div className="mt-20 flex items-end justify-between border-b border-[#D5CEC1] pb-5">
          <div>
            <p className="text-xs tracking-[0.35em] text-[#294C42]">
              SELECTED WORK
            </p>

            <h3 className="mt-3 font-[var(--font-playfair)] text-4xl text-[#1F2933] md:text-5xl">
              Projects
            </h3>
          </div>

          <span className="hidden text-sm text-[#52606D] md:block">
            Things I have built and explored
          </span>
        </div>

        {/* Project list */}
        <div className="divide-y divide-[#D5CEC1]">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-5 py-8 transition hover:bg-[#F7F4EE] md:grid-cols-[80px_1fr_1.5fr_40px] md:items-center"
            >
              <span className="text-sm tracking-[0.2em] text-[#789087]">
                {project.number}
              </span>

              <h4 className="font-[var(--font-playfair)] text-2xl text-[#1F2933]">
                {project.title}
              </h4>

              <div>
                <p className="text-xs font-medium tracking-[0.18em] text-[#294C42]">
                  {project.category.toUpperCase()}
                </p>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#52606D]">
                  {project.description}
                </p>
              </div>

              <ArrowUpRight
                size={22}
                className="text-[#294C42] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          ))}
        </div>
                {/* Design Explorations */}
        <div className="mt-24 border-t border-[#D5CEC1] pt-20">

          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.35em] text-[#294C42]">
              DESIGN EXPLORATIONS
            </p>

            <h3 className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight text-[#1F2933] md:text-5xl">
              Interfaces I design,
              <br />
              <span className="italic text-[#294C42]">
                ideas I bring to life.
              </span>
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#52606D] md:text-lg">
              A selection of website concepts and interface explorations
              created in Figma, focusing on visual design, layout,
              typography, and user experience.
            </p>
          </div>

          {/* Design Projects */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            {/* Wraptron */}
            <div className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-[#D5CEC1] bg-[#E8E1D4]">
                <img
                  src="/design/wraptron.png"
                  alt="Wraptron corporate website UI design by Anto Jovita"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium tracking-[0.25em] text-[#294C42]">
                    FIGMA · UI/UX DESIGN
                  </p>

                  <h4 className="mt-2 font-[var(--font-playfair)] text-2xl text-[#1F2933]">
                    Wraptron
                  </h4>

                  <p className="mt-2 max-w-md text-sm leading-6 text-[#52606D]">
                    A corporate website UI concept exploring visual
                    hierarchy, typography, navigation, and a modern
                    technology-focused design.
                  </p>
                </div>

                <a
                  href="https://lnkd.in/p/givnWZGi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-[#A8A297] px-4 py-2 text-xs text-[#1F2933] transition hover:border-[#294C42] hover:text-[#294C42]"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Smoothie UI */}
            <div className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-[#D5CEC1] bg-[#E8E1D4]">
                <img
                  src="/design/smoothie-ui.png"
                  alt="Smoothie website UI design by Anto Jovita"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium tracking-[0.25em] text-[#294C42]">
                    FIGMA · UI/UX DESIGN
                  </p>

                  <h4 className="mt-2 font-[var(--font-playfair)] text-2xl text-[#1F2933]">
                    Smoothie Website UI
                  </h4>

                  <p className="mt-2 max-w-md text-sm leading-6 text-[#52606D]">
                    A colorful product-focused website concept exploring
                    product presentation, visual hierarchy, color, and
                    interactive interface elements.
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/posts/anto-jovita-j-7b5427283_figmadesign-samplewebsite-smoothieui-activity-7416527579479826432-SuQ5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-[#A8A297] px-4 py-2 text-xs text-[#1F2933] transition hover:border-[#294C42] hover:text-[#294C42]"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}