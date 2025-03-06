import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { projectsData } from "../data/data";

// TypeScript interfaces
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  year: string;
  client?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const PortfolioPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);

  // Fix: Explicitly type categories as string[]
  const categories: string[] = [
    "all",
    ...Array.from(new Set(projectsData.map((p) => p.category.toLowerCase()))),
  ];

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category.toLowerCase() === activeTab);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    setIsDetailsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setIsDetailsOpen(false);
    document.body.style.overflow = "auto";
  };

  const CategoryTabs: React.FC = () => {
    return (
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            // Fix: TypeScript now knows category is a string
            onClick={() => setActiveTab(category)}
            className={`relative px-5 py-2 text-sm font-medium transition-all rounded-md ${
              activeTab === category
                ? "bg-[#651FFF] text-white"
                : "bg-white text-gray-700 border border-gray-200 hover:border-[#651FFF]"
            }`}
          >
            <span className="relative">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </button>
        ))}
      </div>
    );
  };

  const ProjectNumber: React.FC<{ number: number }> = ({ number }) => {
    return (
      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
        <span className="text-[#651FFF] font-mono text-sm font-bold">
          {number.toString().padStart(2, "0")}
        </span>
      </div>
    );
  };

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({
    project,
    index,
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleProjectClick(project)}
      >
        <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                isHovered ? "scale-105" : ""
              }`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 ${
                isHovered ? "opacity-60" : "opacity-0"
              }`}
            ></div>

            <ProjectNumber number={index + 1} />

            <div
              className={`absolute bottom-0 left-0 w-full p-6 transition-all duration-300 ${
                isHovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3
                className={`text-xl font-bold transition-colors duration-300 ${
                  isHovered ? "text-[#651FFF]" : "text-gray-900"
                }`}
              >
                {project.title}
              </h3>
              <span className="bg-[#651FFF]/10 text-[#651FFF] text-xs px-2.5 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <p className="text-gray-600 line-clamp-2 mb-4 min-h-[40px]">
              {project.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">{project.year}</span>
              <button className="text-[#651FFF] font-medium text-sm">
                View Case Study →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative py-24 px-6 bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#651FFF]/5 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[#651FFF]/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#651FFF]/8 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#651FFF]/10 text-[#651FFF] font-medium rounded-full text-sm">
              Our Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Innovative solutions for forward-thinking companies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              We create digital products that help businesses solve complex
              problems and achieve their strategic goals.
            </p>
            <button className="bg-[#651FFF] text-white px-8 py-3 rounded-md font-medium shadow-md hover:bg-[#5019cc] transition-colors">
              Explore Our Work
            </button>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      {/* <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our <span className="text-[#651FFF]">Featured</span> Projects
                </h2>
                <p className="text-gray-600 max-w-xl">
                  Explore our portfolio of innovative solutions across various
                  industries and technologies.
                </p>
              </div>
              <CategoryTabs />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#651FFF]/10 text-[#651FFF] font-medium rounded-full text-sm">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures we deliver high-quality solutions
              that meet your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We thoroughly understand your business goals, challenges, and requirements.",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "We develop a comprehensive plan tailored to your unique needs and objectives.",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Our experts build your solution using cutting-edge technologies and best practices.",
              },
              {
                number: "04",
                title: "Delivery",
                description:
                  "We launch your solution and provide ongoing support to ensure long-term success.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="border-t-2 border-[#651FFF]/20 pt-6">
                  <div className="text-[#651FFF] font-mono text-lg font-bold mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#651FFF]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to bring your vision to life?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create technology that makes a difference for
            your business.
          </p>
          <button className="bg-[#651FFF] text-white px-8 py-3 rounded-md font-medium shadow-md hover:bg-[#5019cc] transition-colors">
            Start a Conversation
          </button>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {isDetailsOpen && activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeProjectDetails}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 right-0 z-10 flex justify-end">
                <button
                  onClick={closeProjectDetails}
                  className="absolute top-4 right-4 bg-white/90 shadow-md rounded-full p-2.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative">
                <div className="h-72 md:h-96 overflow-hidden">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="bg-[#651FFF] text-white px-3 py-1 rounded-full text-sm">
                        {activeProject.category}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        {activeProject.year}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      {activeProject.title}
                    </h2>
                    <p className="text-white/80 max-w-3xl">
                      {activeProject.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="col-span-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      The Challenge
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {activeProject.challenge}
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Our Solution
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {activeProject.solution}
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Key Results
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {activeProject.results?.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#651FFF] mr-2">■</span>
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Project Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                          Client
                        </h4>
                        <p className="text-gray-900">
                          {activeProject.client || "Confidential"}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                          Category
                        </h4>
                        <p className="text-gray-900">
                          {activeProject.category}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                          Year Completed
                        </h4>
                        <p className="text-gray-900">{activeProject.year}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {activeProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-[#651FFF]/10 text-[#651FFF] px-3 py-1 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {activeProject.testimonial && (
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="relative">
                          <div className="absolute -top-3 -left-2 text-5xl text-[#651FFF]/20">
                            "
                          </div>
                          <blockquote className="text-gray-700 italic relative z-10 pl-6">
                            {activeProject.testimonial.quote}
                          </blockquote>
                          <div className="mt-4 pl-6">
                            <p className="font-medium text-gray-900">
                              {activeProject.testimonial.author}
                            </p>
                            <p className="text-sm text-gray-500">
                              {activeProject.testimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                      <p className="text-gray-500 mb-1">
                        Interested in similar solutions?
                      </p>
                      <h4 className="text-xl font-bold text-gray-900">
                        Let's discuss your project
                      </h4>
                    </div>
                    <button className="bg-[#651FFF] text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-[#5019cc] transition-colors">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;
