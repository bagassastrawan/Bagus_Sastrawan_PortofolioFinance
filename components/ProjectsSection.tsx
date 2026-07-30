"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    name: "Buyapin",
    description:
      "First website built using Bootstrap Framework. A voucher game marketplace platform with responsive design.",
    image: "/assets/Project/buyapin.png",
    github: "https://github.com/bagassastrawan/vouchergame.github.io",
    link: "https://bagassastrawan.github.io/vouchergame.github.io/",
    tech: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    year: "2022",
  },
  {
    name: "Citbal",
    description:
      "Website created for PBO assignment. A city tour booking platform showcasing Bali tourism destinations.",
    image: "/assets/Project/citbal.png",
    github: "https://github.com/bagassastrawan/cititexbali",
    link: "https://bagassastrawan.github.io/cititexbali/",
    tech: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    year: "2023",
  },
  {
    name: "Balitour",
    description:
      "First PHP-based website with Bootstrap integration. A comprehensive travel guide and booking system.",
    image: "/assets/Project/balitour.png",
    github: "",
    link: "http://fsbal.infinityfreeapp.com/index.php",
    tech: ["PHP", "Bootstrap", "MySQL", "HTML", "CSS"],
    year: "2023",
  },
  {
    name: "Sports Equipment",
    description:
      "E-commerce platform for sports products. Built as PWPB assignment with full CRUD functionality.",
    image: "/assets/Project/perlengkapan-olahraga.png",
    github: "https://github.com/bagassastrawan/Perlengkapan_Olahraga",
    link: "https://bagassastrawan.github.io/Perlengkapan_Olahraga/",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    year: "2024",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills in web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-slate-100 dark:bg-slate-700">
                <Link href={project.link} target="_blank" className="block w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-black/60 dark:bg-white/10 backdrop-blur-sm text-white dark:text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                  {project.year}
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200 hover:scale-105"
                    >
                      <BsGithub size={18} />
                      <span>Code</span>
                    </Link>
                  )}
                  
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-200 hover:scale-105"
                  >
                    <HiOutlineExternalLink size={18} />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/bagassastrawan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <BsGithub size={20} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;