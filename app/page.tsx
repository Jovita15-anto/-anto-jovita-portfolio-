import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import Creativity from "@/components/Creativity";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#1F2933]">
      <Navbar />
      <Hero />
      <Technology />
      <Creativity />

      {/* About */}
      <section
        id="about"
        className="scroll-mt-28 border-t border-[#D5CEC1] px-6 py-20 md:px-12 md:py-24"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Label */}
          <p className="text-xs font-medium tracking-[0.35em] text-[#294C42]">
            ABOUT ME
          </p>

          {/* Heading */}
          <div className="mt-5 max-w-4xl">
            <h2 className="font-[var(--font-playfair)] text-4xl leading-tight text-[#1F2933] md:text-6xl">
              A curious mind with
              <span className="italic text-[#294C42]">
                {" "}two worlds.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#52606D] md:text-lg">
              I am an AI & Data Science enthusiast who enjoys exploring
              technology while also finding joy in painting, drawing,
              crafts, poetry, and writing. My portfolio brings these two
              sides of my journey together — building with technology
              and creating with imagination.
            </p>
          </div>

          {/* Two Worlds */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {/* Technology */}
            <div className="rounded-[1.5rem] border border-[#D5CEC1] bg-[#EEE7DA] p-8 md:p-10">
              <p className="text-xs font-medium tracking-[0.3em] text-[#789087]">
                01 — TECHNOLOGY
              </p>

              <h3 className="mt-5 font-[var(--font-playfair)] text-3xl text-[#1F2933] md:text-4xl">
                Building with ideas.
              </h3>

              <p className="mt-5 max-w-lg text-base leading-7 text-[#52606D]">
                I enjoy learning and building with Artificial Intelligence,
                Data Science, Generative AI, RAG, and Agentic AI.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "AI",
                  "Data Science",
                  "GenAI",
                  "RAG",
                  "Agentic AI",
                  "Frontend Development",
                  "UI & UX Design"
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#C9C1B4] px-4 py-2 text-xs text-[#294C42]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Creativity */}
            <div className="rounded-[1.5rem] border border-[#D5CEC1] bg-[#E8E1D4] p-8 md:p-10">
              <p className="text-xs font-medium tracking-[0.3em] text-[#789087]">
                02 — CREATIVITY
              </p>

              <h3 className="mt-5 font-[var(--font-playfair)] text-3xl text-[#1F2933] md:text-4xl">
                Creating with feeling.
              </h3>

              <p className="mt-5 max-w-lg text-base leading-7 text-[#52606D]">
                Painting, drawing, crafts, poetry, and books give me
                another way to express ideas and emotions beyond code.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Painting",
                  "Drawing",
                  "Crafts",
                  "Poetry",
                  "Books",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#C9C1B4] px-4 py-2 text-xs text-[#294C42]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Closing Statement */}
          <div className="mt-14 border-t border-[#D5CEC1] pt-8">
            <p className="max-w-4xl font-[var(--font-playfair)] text-xl leading-relaxed text-[#1F2933] md:text-2xl">
              I believe the best ideas come from combining
              <span className="italic text-[#294C42]">
                {" "}logic with imagination.
              </span>
            </p>
          </div>

        </div>
      </section>
      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-28 border-t border-[#D5CEC1] px-8 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* Left */}
            <div>
              <p className="text-xs font-medium tracking-[0.35em] text-[#294C42]">
                LET'S CONNECT
              </p>

              <h2 className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight text-[#1F2933] md:text-6xl">
                Have an idea,
                <br />
                <span className="italic text-[#294C42]">
                  let's talk.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-[#52606D] md:text-lg">
                Whether it is a project, collaboration, opportunity,
                or simply a conversation, I would love to hear from you.
              </p>
            </div>

            {/* Right */}
            <div className="lg:pl-12">

              <p className="text-xs tracking-[0.25em] text-[#789087]">
                EMAIL
              </p>

              <a
                href="mailto:kavijami86@gmail.com"
                className="mt-3 inline-block break-all font-[var(--font-playfair)] text-2xl text-[#1F2933] transition hover:text-[#294C42] md:text-3xl"
              >
                kavijami86@gmail.com
              </a>

              <div className="mt-10 border-t border-[#D5CEC1] pt-6">
                <p className="text-xs tracking-[0.25em] text-[#789087]">
                  FIND ME ONLINE
                </p>

                <div className="mt-4 flex flex-wrap gap-3">

                  <a
                    href="https://github.com/Jovita15-anto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#A8A297] px-5 py-2.5 text-sm text-[#1F2933] transition hover:border-[#294C42] hover:text-[#294C42]"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://www.instagram.com/lifeiscolorful_jo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#A8A297] px-5 py-2.5 text-sm text-[#1F2933] transition hover:border-[#294C42] hover:text-[#294C42]"
                  >
                    Instagram ↗
                  </a>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-8 py-8 text-sm text-gray-500">
          © 2026 Anto Jovita. Built with curiosity and creativity.
        </div>
      </footer>
    </main>
  );
}