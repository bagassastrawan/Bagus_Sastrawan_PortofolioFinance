"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiArrowDown, HiOutlineDocumentDownload } from "react-icons/hi";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Frontend Developer",
    "UI/UX Designer",
    "Web Developer",
    "App Developer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const isDeletingMode = isDeleting;

      if (isDeletingMode) {
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeletingMode && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeletingMode && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(200);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-teal-500/5 via-emerald-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 dark:bg-teal-500/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
      </div>

      {/* Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          
          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0">
            
            {/* Professional Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/20 dark:shadow-none">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Open to Work · <span className="text-emerald-600 dark:text-emerald-400">Available Now</span>
              </span>
            </div>

            {/* Main Headline with Typing Effect */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="block">I'm a</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 dark:from-teal-400 dark:via-emerald-400 dark:to-teal-400 bg-[length:200%_auto] animate-gradient">
                  {text}
                  <span className="inline-block w-1 h-8 sm:h-10 lg:h-12 ml-1 bg-teal-500 animate-pulse"></span>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Creating pixel-perfect, accessible web experiences with modern technologies.
              </p>
            </div>

            {/* CTA Buttons - Download CV dengan nama yang benar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="/CV_Putu_Bagus_Sastrawan.pdf"
                download="CV_Putu_Bagus_Sastrawan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <HiOutlineDocumentDownload className="w-5 h-5" />
                <span>Download CV</span>
                <span className="text-xs text-white/70 font-normal">(PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Side: Profile Photo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 rounded-3xl opacity-20 blur-2xl transition duration-700" />
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl opacity-10 blur-xl" />
              
              <div className="relative p-1 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 shadow-2xl shadow-teal-500/20">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <Image
                    src="/avatar.png"
                    alt="Putu Bagus Sastrawan"
                    fill
                    priority
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg border border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">3+</span>
                      <span className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400">Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="group cursor-pointer text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors p-2"
          aria-label="Scroll to About Section"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] sm:text-xs font-medium text-slate-400 dark:text-slate-500 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
              Scroll
            </span>
            <HiArrowDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
          </div>
        </button>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;