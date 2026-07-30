"use client";
import React from "react";
import Image from "next/image";
import { 
  HiOutlineUser, 
  HiOutlineMail, 
  HiOutlineLocationMarker, 
  HiOutlineAcademicCap 
} from "react-icons/hi";

// Pengelompokan Skill agar HRD mudah melihat kapabilitas teknis
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Laravel",
  "UI/UX Design",
  "Figma",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Avatar Frame + Experience Floating Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background Glow Overlay */}
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl -z-10" />

            {/* Main Image Container */}
            <div className="relative w-full max-w-md h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 dark:border-slate-700/60 bg-slate-200 dark:bg-slate-800">
              <Image
                src="/avatar.png"
                alt="Putu Bagus Sastrawan"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Badge: Stats / Highlight Card */}
            <div className="absolute -bottom-6 right-2 sm:-right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-slate-200/80 dark:border-slate-700/80">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl">3+</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Years of</p>
                  <p className="font-bold text-slate-900 dark:text-white text-base">Coding &amp; Design</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Bio Details & Skills */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-teal-600 dark:text-teal-400 font-semibold text-sm tracking-wider uppercase">
                Frontend Developer &amp; UI/UX Specialist
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Crafting functional web experiences with modern tech stack.
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              Hi! I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">Putu Bagus Sastrawan</strong>. I build clean, high-performance web applications and design intuitive interfaces. My work focuses on connecting technical backend capabilities with sleek frontend user experience.
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <HiOutlineUser className="w-5 h-5 text-teal-500 shrink-0" />
                <span className="text-sm font-medium">Putu Bagus Sastrawan</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <HiOutlineAcademicCap className="w-5 h-5 text-teal-500 shrink-0" />
                <span className="text-sm font-medium">Software Engineering</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <HiOutlineLocationMarker className="w-5 h-5 text-teal-500 shrink-0" />
                <span className="text-sm font-medium">Denpasar, Bali</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <HiOutlineMail className="w-5 h-5 text-teal-500 shrink-0" />
                <span className="text-sm font-medium truncate">bagassastrawan49@gmail.com</span>
              </div>
            </div>

            {/* Skills & Technologies Section */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Technologies &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 hover:border-teal-500 hover:text-teal-600 dark:hover:border-teal-400 dark:hover:text-teal-400 transition-all duration-200 shadow-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;