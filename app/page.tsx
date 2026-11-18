
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Code2,
  GraduationCap,
  BrainCircuit,
  Rocket,
  Lightbulb,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#090B09] text-white overflow-hidden">

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#B7FF42]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] bg-[#B7FF42]/5 blur-[150px] rounded-full" />
      </div>

      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto min-h-[85vh] px-6 md:px-12 grid md:grid-cols-2 items-center gap-10 py-16">

        {/* Left Content */}
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

          {/* Buttons */}
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

          {/* Social Links */}
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

        {/* Right Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative order-1 md:order-2 flex justify-center items-center"
        >

          {/* Green Ambient Glow */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-[#B7FF42]/10 blur-[110px]" />

          {/* Profile Image */}
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

    {/* Section Heading */}
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

    {/* About Grid */}
    <div className="grid lg:grid-cols-5 gap-6">

      {/* Main About Card */}
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

      {/* Right Side Cards */}
      <div className="lg:col-span-2 grid gap-6">

        {/* Education */}
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

        {/* AI / ML */}
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

    {/* Bottom Highlights */}
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

      {/* Expertise Strip */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-7">

          {[
            ["01", "Full Stack Development"],
            ["02", "AI / Machine Learning"],
            ["03", "Problem Solving"],
            ["04", "Creative Engineering"],
          ].map(([number, title]) => (
            <div key={number} className="flex gap-3 items-center">
              <span className="text-[#B7FF42] text-sm font-semibold">
                {number}
              </span>
              <span className="text-gray-400 text-sm">
                {title}
              </span>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
