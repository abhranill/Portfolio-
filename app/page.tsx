
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Mail,
  Calendar,
  Code2,
  GraduationCap,
  BrainCircuit,
  Rocket,
  Lightbulb,
  Terminal,
  Globe,
  Database,
  Cpu,
  Wrench,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    subtitle: "Languages",
    icon: Terminal,
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    subtitle: "User Interfaces",
    icon: Globe,
    skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    subtitle: "Server & APIs",
    icon: Database,
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Intelligent Systems",
    icon: BrainCircuit,
    skills: ["Python", "PyTorch", "LLMs", "Gemini API"],
  },
  {
    title: "Databases",
    subtitle: "Data Management",
    icon: Layers,
    skills: ["MongoDB", "SQL", "Supabase"],
  },
  {
    title: "Developer Tools",
    subtitle: "Development Workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Core Concepts",
    subtitle: "Computer Science",
    icon: Cpu,
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Problem Solving",
    ],
  },
  {
    title: "Deployment",
    subtitle: "Build & Ship",
    icon: Code2,
    skills: ["Vercel", "Git", "Linux", "REST Integration"],
  },
];

const expertise = [
  "Full Stack Development",
  "AI / Machine Learning",
  "Problem Solving",
  "Creative Engineering",
];


const projects = [
  {
    number: "01",
    title: "TinyGPT",
    category: "AI / MACHINE LEARNING",
    description:
      "A mini GPT-style language model built from scratch. Implemented tokenization, attention mechanisms, transformer blocks, training, and text generation using PyTorch.",
    tech: ["Python", "PyTorch", "Transformer", "CUDA"],
    github: "https://github.com/YOUR_USERNAME/TinyGPT",
    demo: "",
  },
  {
    number: "02",
    title: "DocMorph AI",
    category: "GENERATIVE AI",
    description:
      "An AI-powered document processing application designed to transform, analyze, and interact with documents using intelligent AI workflows.",
    tech: ["Next.js", "Node.js", "Gemini AI", "API"],
    github: "https://github.com/YOUR_USERNAME/DocMorph-AI",
    demo: "",
  },
  {
    number: "03",
    title: "Smart Expense Tracker",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A smart expense management application that helps users track spending, organize transactions, and gain insights into their financial habits.",
    tech: ["React", "Vite", "Node.js", "Express"],
    github: "https://github.com/YOUR_USERNAME/Smart-Expense-Tracker",
    demo: "",
  },
  {
    number: "04",
    title: "AI Mental Health Chatbot",
    category: "AI APPLICATION",
    description:
      "An AI-powered conversational application focused on providing supportive interactions through an intelligent chatbot interface.",
    tech: ["React", "FastAPI", "Gemini", "MongoDB"],
    github: "https://github.com/YOUR_USERNAME/Mental-Health-Chatbot",
    demo: "",
  },
  {
    number: "05",
    title: "CanteenHub",
    category: "WEB APPLICATION",
    description:
      "A modern canteen management and food ordering platform with a responsive interface designed to improve the digital ordering experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/YOUR_USERNAME/CanteenHub",
    demo: "",
  },
  {
    number: "06",
    title: "Travel with Limon",
    category: "FREELANCE / CLIENT PROJECT",
    description:
      "A travel website showcasing destinations, galleries, travel experiences, customer reviews, and contact options with a modern responsive design.",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Next Intl"],
    github: "",
    demo: "https://YOUR-DEPLOYED-URL.com",
  },
];

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen bg-[#090B09] text-white overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#B7FF42]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] bg-[#B7FF42]/5 blur-[150px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <nav className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-7 flex items-center justify-between border-b border-white/10">

        <Link href="/" className="text-2xl font-black tracking-tighter">
          AR<span className="text-[#B7FF42]">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-9 text-sm text-gray-400">
          <a href="#about" className="hover:text-[#B7FF42] transition">About</a>
          <a href="#skills" className="hover:text-[#B7FF42] transition">Skills</a>
          <a href="#projects" className="hover:text-[#B7FF42] transition">Projects</a>
          <a href="#contact" className="hover:text-[#B7FF42] transition">Contact</a>
        </div>

        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full border border-[#B7FF42]/50 text-[#B7FF42] text-sm hover:bg-[#B7FF42] hover:text-black transition"
        >
          Let's Talk ↗
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto min-h-[85vh] px-6 md:px-12 grid md:grid-cols-2 items-center gap-10 py-16">

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B7FF42]/20 bg-[#B7FF42]/5 text-[#B7FF42] text-xs tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-[#B7FF42] animate-pulse" />
            COMPUTER SCIENCE ENGINEER
          </div>

          <p className="text-gray-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
            Abhranil
            <br />
            <span className="text-[#B7FF42]">Roy.</span>
          </h1>

          <h2 className="mt-7 text-xl md:text-2xl text-gray-200 font-medium">
            Developer.
            <span className="text-[#B7FF42]"> Builder.</span> Learner.
          </h2>

          <p className="mt-5 max-w-lg text-gray-400 leading-8 text-base">
            I build digital experiences, intelligent applications,
            and meaningful solutions through code.
            Exploring the intersection of software engineering
            and artificial intelligence.
          </p>

          {/* HERO BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-9">

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 bg-[#B7FF42] text-black font-semibold px-7 py-4 rounded-xl hover:bg-white transition"
            >
              Explore My Work
              <ArrowUpRight
                size={19}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-white/15 px-7 py-4 rounded-xl hover:border-[#B7FF42] hover:text-[#B7FF42] transition"
            >
              Contact Me
            </motion.a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-6 mt-12">

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-[#B7FF42] transition hover:-translate-y-1"
            >
              <Code2 size={23} />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-[#B7FF42] transition hover:-translate-y-1 font-bold text-xl"
            >
              in
            </a>

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-[#B7FF42] transition hover:-translate-y-1"
            >
              <Mail size={23} />
            </a>

          </div>
        </motion.div>

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative order-1 md:order-2 flex justify-center items-center"
        >

          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-[#B7FF42]/10 blur-[110px]" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-[500px]"
          >
            <Image
              src="/images/profile.png"
              alt="Abhranil Roy"
              width={1254}
              height={1254}
              priority
              className="w-full h-auto object-contain mix-blend-screen"
            />
          </motion.div>

        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative z-10 py-28 px-6 md:px-12 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[#B7FF42] text-sm tracking-[0.3em] font-semibold mb-4">
              GET TO KNOW ME
            </p>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Beyond the <span className="text-[#B7FF42]">Code.</span>
            </h2>

            <p className="text-gray-400 mt-5 max-w-xl leading-8">
              A little about who I am, what I do, and what drives me
              to keep building.
            </p>
          </motion.div>

          {/* ABOUT GRID */}
          <div className="grid lg:grid-cols-5 gap-6">

            {/* INTRODUCTION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 rounded-3xl border border-white/10 bg-[#111511] p-8 md:p-10 hover:border-[#B7FF42]/30 transition duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-[#B7FF42]/10 text-[#B7FF42]">
                  <Code2 size={25} />
                </div>
                <span className="text-gray-400 text-sm tracking-widest">
                  MY INTRODUCTION
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
                Curious mind. Creative thinker.
                <span className="text-[#B7FF42]"> Developer by passion.</span>
              </h3>

              <p className="text-gray-400 leading-8 mb-5">
                I'm Abhranil Roy, a Computer Science and Engineering
                student passionate about technology, software development,
                and artificial intelligence.
              </p>

              <p className="text-gray-400 leading-8 mb-5">
                My journey revolves around turning ideas into functional
                digital products. From building full-stack web applications
                to experimenting with language models, I enjoy exploring
                how technology can solve real-world problems.
              </p>

              <p className="text-gray-400 leading-8">
                I believe in learning by building, experimenting with
                new technologies, and continuously improving my craft.
                Every project is an opportunity to learn something new.
              </p>

              <div className="flex flex-wrap gap-3 mt-9">
                {["Problem Solver", "Tech Enthusiast", "Lifelong Learner"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-[#B7FF42]/20 bg-[#B7FF42]/5 text-[#B7FF42] text-xs"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* RIGHT CARDS */}
            <div className="lg:col-span-2 grid gap-6">

              {/* EDUCATION */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl border border-white/10 bg-[#111511] p-7 hover:border-[#B7FF42]/30 transition"
              >
                <div className="flex justify-between items-start mb-7">
                  <GraduationCap className="text-[#B7FF42]" size={30} />
                  <span className="text-xs text-gray-500">EDUCATION</span>
                </div>

                <h3 className="text-xl font-bold mb-2">
                  B.Tech in CSE
                </h3>

                <p className="text-gray-400 text-sm leading-6">
                  Ideal Institute of Engineering, Kalyani
                </p>

                <p className="text-gray-500 text-xs mt-3">
                  MAKAUT, West Bengal
                </p>
              </motion.div>

              {/* INTERESTS */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl border border-white/10 bg-[#111511] p-7 hover:border-[#B7FF42]/30 transition"
              >
                <div className="flex justify-between items-start mb-7">
                  <BrainCircuit className="text-[#B7FF42]" size={30} />
                  <span className="text-xs text-gray-500">INTERESTS</span>
                </div>

                <h3 className="text-xl font-bold mb-3">
                  Exploring Intelligence
                </h3>

                <p className="text-gray-400 text-sm leading-7">
                  Artificial Intelligence, Machine Learning,
                  Deep Learning, and building intelligent systems.
                </p>
              </motion.div>

            </div>
          </div>

          {/* HIGHLIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-6 mt-6">

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-[#111511] p-7 flex gap-5 items-center"
            >
              <Rocket size={30} className="text-[#B7FF42] shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Building Real Projects</h4>
                <p className="text-gray-500 text-sm mt-1">
                  Turning concepts into working applications.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-[#111511] p-7 flex gap-5 items-center"
            >
              <Lightbulb size={30} className="text-[#B7FF42] shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Always Experimenting</h4>
                <p className="text-gray-500 text-sm mt-1">
                  Exploring ideas, technologies and possibilities.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section
        id="skills"
        className="relative z-10 py-28 px-6 md:px-12 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">

          {/* SKILLS HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[#B7FF42] text-sm tracking-[0.3em] font-semibold mb-4">
              MY TECH STACK
            </p>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Tools of my <span className="text-[#B7FF42]">Trade.</span>
            </h2>

            <p className="text-gray-400 mt-5 max-w-xl leading-8">
              Technologies and tools I use to transform ideas
              into real-world digital experiences.
            </p>
          </motion.div>

          {/* SKILLS GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {skillCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative rounded-2xl border border-white/10 bg-[#111511] p-6 hover:border-[#B7FF42]/40 hover:bg-[#141A12] transition-all duration-300 overflow-hidden"
                >

                  {/* HOVER GLOW */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#B7FF42]/5 blur-3xl opacity-0 group-hover:opacity-100 transition" />

                  {/* ICON */}
                  <div className="relative z-10 flex items-center justify-between mb-7">
                    <div className="w-12 h-12 rounded-xl bg-[#B7FF42]/10 flex items-center justify-center text-[#B7FF42] group-hover:bg-[#B7FF42] group-hover:text-black transition duration-300">
                      <Icon size={23} />
                    </div>

                    <span className="text-xs text-gray-600 font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  {/* CATEGORY */}
                  <h3 className="text-lg font-bold text-white mb-1">
                    {category.title}
                  </h3>

                  <p className="text-xs text-gray-500 mb-6">
                    {category.subtitle}
                  </p>

                  {/* SKILLS */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 rounded-lg text-xs text-gray-300 bg-white/[0.04] border border-white/[0.06] group-hover:border-[#B7FF42]/20 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* BOTTOM ACCENT */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B7FF42] group-hover:w-full transition-all duration-500" />

                </motion.div>
              );
            })}

          </div>

          {/* BOTTOM NOTE */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 bg-[#111511] rounded-2xl p-6">

            <div>
              <h3 className="font-semibold text-white">
                Always learning. Always building.
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                My tech stack evolves with every project.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#B7FF42] text-sm">
              <span className="w-2 h-2 rounded-full bg-[#B7FF42] animate-pulse" />
              Growing every day
            </div>

          </div>
        </div>
      </section>


      {/* FEATURED PROJECTS SECTION */}
      <section
        id="projects"
        className="relative z-10 py-28 px-6 md:px-12 border-t border-white/10"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#B7FF42]/5 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* PROJECTS HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#B7FF42]" />
              <span className="text-[#B7FF42] text-xs tracking-[0.3em] font-medium">
                MY WORK
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Featured <span className="text-[#B7FF42]">Projects.</span>
                </h2>
                <p className="text-gray-400 mt-5 max-w-xl leading-relaxed">
                  Things I have built while exploring technology, solving problems,
                  and turning ideas into real-world applications.
                </p>
              </div>
              <div className="text-sm text-gray-500 font-mono">
                06 PROJECTS / SELECTED WORK
              </div>
            </div>
          </motion.div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-white/10 bg-[#111111] overflow-hidden transition-all duration-300 hover:border-[#B7FF42]/40"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B7FF42]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-7 md:p-9">
                  <div className="flex items-center justify-between mb-8 gap-3">
                    <span className="font-mono text-sm text-gray-600">
                      /{project.number}
                    </span>
                    <span className="text-[10px] md:text-xs tracking-[0.15em] text-gray-500 border border-white/10 rounded-full px-3 py-1">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#B7FF42] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm md:text-base min-h-[90px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-7">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="text-xs text-gray-300 px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.06]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-9 pt-6 border-t border-white/[0.06]">
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#B7FF42] transition-colors"
                        >
                          <Code2 size={16} />
                          <span>Source</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#B7FF42] transition-colors"
                        >
                          <ArrowUpRight size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#B7FF42] group-hover:bg-[#B7FF42] transition-all duration-300">
                      <ArrowUpRight
                        size={18}
                        className="text-gray-400 group-hover:text-black transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-sm text-gray-500"
          >
            More experiments, ideas, and projects are constantly in progress.
            <span className="text-[#B7FF42] ml-2">Stay tuned ↗</span>
          </motion.div>
        </div>
      </section>

      {/* ================= DEVELOPER JOURNEY ================= */}
      <section
        id="journey"
        className="relative z-10 py-28 px-6 md:px-12 border-t border-white/10 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B7FF42]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <p className="text-[#B7FF42] text-sm tracking-[0.3em] uppercase mb-4">
              My Journey
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Learning.
              <span className="text-[#B7FF42]"> Building.</span>
              <br />
              Growing.
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed">
              Every project, every challenge and every new technology is a step
              forward in my journey as a Computer Science student and developer.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#B7FF42] via-[#B7FF42]/30 to-transparent md:-translate-x-1/2" />

            {/* Timeline 01 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
            >
              <div className="md:text-right md:pr-12 pl-14 md:pl-0">
                <div className="inline-flex items-center gap-2 text-[#B7FF42] text-sm font-medium mb-3">
                  <Calendar size={16} />
                  2025
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">The Beginning</h3>
                <p className="text-gray-400 leading-relaxed">
                  Started my B.Tech journey in Computer Science and Engineering.
                  Began exploring programming, computer science fundamentals,
                  and the endless possibilities of technology.
                </p>
                <div className="flex flex-wrap md:justify-end gap-2 mt-5">
                  {["B.Tech CSE", "Programming", "Computer Science"].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block md:pl-12" />
              <div className="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#B7FF42] shadow-[0_0_20px_#B7FF42] z-10" />
            </motion.div>

            {/* Timeline 02 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
            >
              <div className="hidden md:block md:pr-12" />
              <div className="md:pl-12 pl-14">
                <div className="inline-flex items-center gap-2 text-[#B7FF42] text-sm font-medium mb-3">
                  <Code2 size={16} />
                  2026
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">From Learning to Building</h3>
                <p className="text-gray-400 leading-relaxed">
                  Started turning my knowledge into real projects. Exploring
                  full-stack development, working with modern frameworks, and
                  learning how to build applications from idea to implementation.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["React", "Next.js", "Node.js", "TypeScript"].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#B7FF42] shadow-[0_0_20px_#B7FF42] z-10" />
            </motion.div>

            {/* Timeline 03 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
            >
              <div className="md:text-right md:pr-12 pl-14 md:pl-0">
                <div className="inline-flex items-center gap-2 text-[#B7FF42] text-sm font-medium mb-3">
                  <BrainCircuit size={16} />
                  2026 — Present
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Exploring AI & Machine Learning</h3>
                <p className="text-gray-400 leading-relaxed">
                  Deepening my interest in Artificial Intelligence and Machine
                  Learning while experimenting with models, Python, PyTorch,
                  and building projects that combine software development with AI.
                </p>
                <div className="flex flex-wrap md:justify-end gap-2 mt-5">
                  {["Python", "Machine Learning", "PyTorch", "AI"].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block md:pl-12" />
              <div className="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#B7FF42] shadow-[0_0_20px_#B7FF42] z-10" />
            </motion.div>

            {/* Timeline 04 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              <div className="hidden md:block md:pr-12" />
              <div className="md:pl-12 pl-14">
                <div className="inline-flex items-center gap-2 text-[#B7FF42] text-sm font-medium mb-3">
                  <Rocket size={16} />
                  The Future
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Becoming a Better Developer</h3>
                <p className="text-gray-400 leading-relaxed">
                  My goal is to keep improving my problem-solving skills,
                  contribute to meaningful projects, participate in hackathons,
                  explore open source, and prepare for exciting internship opportunities.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["DSA", "Open Source", "Hackathons", "Internships"].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full border border-[#B7FF42]/20 bg-[#B7FF42]/5 text-xs text-[#B7FF42]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#B7FF42] shadow-[0_0_20px_#B7FF42] z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERTISE STRIP */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-7">

          {expertise.map((title, index) => (
            <div key={title} className="flex gap-3 items-center">
              <span className="text-[#B7FF42] text-sm font-semibold">
                0{index + 1}
              </span>

              <span className="text-gray-400 text-sm">
                {title}
              </span>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative z-10 py-28 px-6 md:px-12 border-t border-white/10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B7FF42]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B7FF42]/20 bg-[#B7FF42]/5 text-[#B7FF42] text-xs tracking-[0.2em] mb-7">
              <span className="w-2 h-2 rounded-full bg-[#B7FF42] animate-pulse" />
              LET'S CONNECT
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
              Have an idea?
              <br />
              <span className="text-[#B7FF42]">Let's build it.</span>
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mt-6 leading-8">
              I'm always open to discussing exciting projects, internship opportunities, collaborations,
              or simply connecting with people who love building things with technology.
            </p>

            <motion.a
              href="mailto:YOUR_EMAIL@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 mt-10 px-7 py-4 rounded-xl bg-[#B7FF42] text-black font-semibold hover:bg-white transition"
            >
              <Mail size={19} />
              Get in Touch
              <ArrowUpRight size={19} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </motion.a>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 mt-20">
            <motion.a
              href="mailto:YOUR_EMAIL@gmail.com"
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-white/10 bg-[#111511] p-7 hover:border-[#B7FF42]/40 transition"
            >
              <div className="flex items-center justify-between mb-6">
                <Mail className="text-[#B7FF42]" size={25} />
                <ArrowUpRight className="text-gray-500 group-hover:text-[#B7FF42] transition" size={18} />
              </div>
              <p className="text-xs tracking-widest text-gray-500 mb-2">EMAIL</p>
              <h3 className="font-semibold text-white break-all">YOUR_EMAIL@gmail.com</h3>
              <p className="text-sm text-gray-500 mt-3">The best way to reach me.</p>
            </motion.a>

            <motion.a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-white/10 bg-[#111511] p-7 hover:border-[#B7FF42]/40 transition"
            >
              <div className="flex items-center justify-between mb-6">
                <Code2 className="text-[#B7FF42]" size={25} />
                <ArrowUpRight className="text-gray-500 group-hover:text-[#B7FF42] transition" size={18} />
              </div>
              <p className="text-xs tracking-widest text-gray-500 mb-2">GITHUB</p>
              <h3 className="font-semibold text-white">Explore my repositories</h3>
              <p className="text-sm text-gray-500 mt-3">Projects, experiments and code.</p>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-white/10 bg-[#111511] p-7 hover:border-[#B7FF42]/40 transition"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[#B7FF42] font-bold text-2xl">in</span>
                <ArrowUpRight className="text-gray-500 group-hover:text-[#B7FF42] transition" size={18} />
              </div>
              <p className="text-xs tracking-widest text-gray-500 mb-2">LINKEDIN</p>
              <h3 className="font-semibold text-white">Connect professionally</h3>
              <p className="text-sm text-gray-500 mt-3">Let's connect and grow together.</p>
            </motion.a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
            <Link href="/" className="text-xl font-black tracking-tighter">
              AR<span className="text-[#B7FF42]">.</span>
            </Link>
            <p className="text-xs text-gray-500 text-center">
              © 2026 Abhranil Roy. Built with passion and code.
            </p>
            <a
              href="#top"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#B7FF42] transition"
            >
              Back to top <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
