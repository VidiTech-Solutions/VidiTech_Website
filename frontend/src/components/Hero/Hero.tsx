import { projectCountData } from "../../data/data";
import HeroContent from "./HeroContent";
import StatsSection from "./StatsSection";
import TechSVG from "./TechSVG";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const techSvgRef = useRef(null);
  const statsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: false, amount: 0.2 });
  const isTechSvgInView = useInView(techSvgRef, { once: false, amount: 0.3 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Variants for initial page load animations
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const svgVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1.1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="overflow-hidden" ref={heroRef}>
      {/* Background parallax effect */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/30 to-blue-300/20 rounded-full filter blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-500/20 to-blue-400/10 rounded-full filter blur-[150px]" />
      </motion.div>

      {/* Main hero content */}
      <motion.div
        className="w-full px-4 sm:px-6 lg:px-16 py-8 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-screen-2xl mx-auto"
        variants={contentVariants}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        style={{ opacity }}
      >
        <motion.div className="w-full lg:w-6/12" variants={contentVariants}>
          <HeroContent />
        </motion.div>

        <motion.div
          className="hidden lg:block lg:w-6/12 relative"
          ref={techSvgRef}
          variants={svgVariants}
          initial="hidden"
          animate={isTechSvgInView ? "visible" : "hidden"}
        >
          <div className="relative mx-auto w-full">
            <motion.div
              className="transform origin-center"
              animate={{
                scale: isTechSvgInView ? 1.1 : 0.9,
                opacity: isTechSvgInView ? 1 : 0.3,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <TechSVG />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats section with scroll-triggered animation */}
      <motion.div
        ref={statsRef}
        variants={statsVariants}
        initial="hidden"
        animate={isStatsInView ? "visible" : "hidden"}
      >
        <StatsSection projectCountData={projectCountData} />
      </motion.div>
    </div>
  );
};

export default Hero;
