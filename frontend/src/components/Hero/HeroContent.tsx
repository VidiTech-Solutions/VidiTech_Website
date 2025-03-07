import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const FloatingAnimation = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.4; }
      }
      .animate-pulse-glow {
        animation: pulse-glow 4s ease-in-out infinite;
      }
      @keyframes rotate-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-rotate {
        animation: rotate-slow 20s linear infinite;
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      .cursor-blink {
        animation: blink 1s step-end infinite;
      }
    `,
    }}
  />
);

const TypewriterEffect = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const phases = ["Plan", "Design", "Develop", "Deploy"];

  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setCurrentPhase((prev) => (prev < phases.length - 1 ? prev + 1 : 0));
    }, 2000);

    return () => clearInterval(phaseInterval);
  }, []);

  return (
    <div className="font-mono text-sm flex items-center">
      <div className="flex items-center space-x-2">
        {phases.map((phase, index) => (
          <div key={phase} className="flex items-center">
            <span
              className={`${
                index === currentPhase
                  ? "text-appPurple font-medium"
                  : "text-appNavy/60"
              }`}
            >
              {phase}
            </span>

            {index < phases.length - 1 && (
              <div className="flex items-center mx-2">
                <div className="h-px w-4 bg-gray-300"></div>
                <div
                  className={`h-1.5 w-1.5 rounded-full ${
                    index < currentPhase ? "bg-appPurple" : "bg-gray-300"
                  }`}
                ></div>
                <div className="h-px w-4 bg-gray-300"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="ml-3">
        <div
          className="h-2 w-2 rounded-full bg-gradient-to-r from-[#A234FD] to-[#651FFF] animate-pulse"
          style={{
            opacity: 0.8,
          }}
        ></div>
      </div>
    </div>
  );
};

const HeroContent = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const animateFloatingElements = () => {
      const elements = document.querySelectorAll(".floating-element");
      elements.forEach((el, index) => {
        const delay = index * 800;
        setTimeout(() => {
          el.classList.add("animate-float");
        }, delay);
      });
    };

    animateFloatingElements();
  }, []);

  return (
    <div className="w-full animate-fadeIn relative overflow-hidden">
      <FloatingAnimation />

      <div className="absolute top-10 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-[#A234FD] to-[#651FFF] opacity-30 floating-element z-0"></div>
      <div className="absolute top-20 right-24 w-8 h-8 rounded-full bg-gradient-to-r from-[#651FFF] to-[#A234FD] opacity-20 floating-element z-0"></div>
      <div className="absolute bottom-10 right-36 w-10 h-10 rounded-full bg-gradient-to-r from-[#A234FD] to-[#651FFF] opacity-20 floating-element z-0"></div>
      <div className="absolute -bottom-4 left-24 w-16 h-16 rounded-full bg-gradient-to-r from-[#651FFF] to-[#A234FD] opacity-10 floating-element z-0"></div>

      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={`col-${i}`} className="h-full w-px bg-purple-500"></div>
            ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-8 gap-8">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={`row-${i}`} className="w-full h-px bg-purple-500"></div>
            ))}
        </div>
      </div>

      <div className="absolute -right-16 top-1/4 w-48 h-48 border border-purple-200/20 rounded-full animate-rotate z-0 opacity-30"></div>
      <div
        className="absolute -right-24 top-1/4 w-64 h-64 border border-purple-300/10 rounded-full animate-rotate z-0 opacity-20"
        style={{ animationDuration: "30s" }}
      ></div>

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-400 rounded-full filter blur-[120px] opacity-20 animate-pulse-glow z-0"></div>
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-blue-300 rounded-full filter blur-[100px] opacity-10 animate-pulse-glow z-0"></div>

      <div className="hidden md:block absolute top-0 right-0 text-xs text-gray-400 font-mono opacity-20 z-0">
        <div>{"<Innovation>"}</div>
        <div className="ml-4">{"<Technology>"}</div>
        <div className="ml-8">{"<Solutions>"}</div>
      </div>

      <div className="hidden md:block absolute bottom-10 left-0 text-xs text-gray-400 font-mono opacity-20 z-0">
        <div className="ml-8">{"</Solutions>"}</div>
        <div className="ml-4">{"</Technology>"}</div>
        <div>{"</Innovation>"}</div>
      </div>

      <div className="relative z-10">
        <div className="relative">
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-16 h-1 bg-gradient-to-r from-[#A234FD] to-transparent rounded-full hidden md:block"></div>

          <h1
            ref={textRef}
            className="font-neue font-semibold text-appNavy text-4xl sm:text-5xl lg:text-6xl  leading-[1.15] tracking-tight md:pl-8"
          >
            <span className="block">Bringing</span>
            <span className="relative inline-block mt-2">
              <span className="text-appPurple bg-gradient-to-r from-[#A234FD] to-[#651FFF] bg-clip-text text-transparent font-granville pb-1 relative z-10">
                Ideas to Life
              </span>
              <svg
                className="absolute -bottom-3 left-0 w-full h-2 text-purple-300 opacity-60"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q30,9 50,5 Q70,1 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="absolute -bottom-1 right-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#A234FD] to-[#651FFF] opacity-20"></div>
            </span>
            <span className="block mt-1">Through Technology</span>
          </h1>
        </div>

        <div className="relative mt-10 md:pl-8">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#A234FD]/40 to-transparent rounded-full hidden md:block"></div>
          <p className="text-lg md:text-xl text-appGray leading-relaxed font-std max-w-2xl relative">
            Crafting tailored digital solutions across a
            <span className="relative inline-block mx-1">
              <span className="relative z-10">diverse</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#A234FD]/10"></span>
            </span>
            range of technologies to solve your most
            <span className="relative inline-block mx-1">
              <span className="relative z-10">complex</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#651FFF]/10"></span>
            </span>
            business challenges.
          </p>

          <div className="mt-4 hidden md:block">
            <TypewriterEffect />
          </div>
        </div>

        <div className="mt-12 md:pl-8 flex items-center">
          <Link
            to="/portfolio"
            className="group relative inline-flex items-center gap-3 py-3 px-7 text-lg text-appNavy font-std hover:text-appPurple transition-all duration-300 overflow-hidden rounded-lg"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#A234FD]/10 to-[#651FFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#A234FD]/30 to-[#651FFF]/30 rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></span>
            <span className="relative z-10">View Our Work</span>
            <span className="relative z-10 w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-r from-[#A234FD] to-[#651FFF] text-white transform transition-all duration-300 group-hover:translate-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </Link>

          <div className="ml-8 hidden md:flex items-center text-appGray text-sm space-x-4">
            <span className="inline-flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              Web & mobile application experts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
