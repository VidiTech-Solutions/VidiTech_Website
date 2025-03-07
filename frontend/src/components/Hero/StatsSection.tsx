import React from "react";
import { motion } from "framer-motion";

interface ProjectCountItem {
  nom: string;
  desc: string;
}

interface StatsSectionProps {
  projectCountData: ProjectCountItem[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ projectCountData }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const statItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const numberCountVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0557] to-[#0B075E] z-0">
        <motion.div
          className="absolute inset-0 bg-[#651FFF]/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent z-0"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent z-0"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Main content */}
      <div className="relative py-6 lg:py-8 px-4 sm:px-8 md:px-12 lg:px-16 z-10">
        <motion.div
          className="flex flex-wrap justify-center sm:justify-around gap-8 sm:gap-10 md:gap-12 items-center max-w-screen-xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {projectCountData.map((data, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              variants={statItemVariants}
            >
              <div
                className={`flex flex-col ${
                  index === 1 ? "text-[#fb2ec4]" : "text-appWhite"
                }`}
              >
                {/* Number with animation */}
                <motion.div className="relative" variants={numberCountVariants}>
                  <h3 className="font-extrabold text-4xl md:text-5xl relative z-10">
                    {data.nom}
                  </h3>

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 rounded-full blur-md ${
                      index === 1 ? "bg-[#fb2ec4]" : "bg-purple-400"
                    }`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 0.3, 0.1] }}
                    transition={{ duration: 2 }}
                  />
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-sm md:text-base font-medium mt-1 max-w-[160px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {data.desc}
                </motion.p>
              </div>

              {/* Divider between items (except last) */}
              {index < projectCountData.length - 1 && (
                <motion.span
                  className="hidden sm:block absolute right-[-4rem] top-1/2 h-10 w-px bg-gray-300/20 transform -translate-y-1/2"
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;
