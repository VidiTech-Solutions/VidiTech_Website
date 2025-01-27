import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 

const TakeActionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="w-full py-16 lg:px-16 px-6 my-10 lg:my-16 text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{  amount: 0.2 }}
    >
      <motion.div
        className="bg-[#1A001F] py-6 lg:py-20 px-5 lg:px-0 w-full text-center rounded-2xl flex flex-col justify-center items-center"
        variants={itemVariants}
      >
        <motion.h1
          className="font-extrabold text-3xl lg:text-4xl lg:mb-0 mb-2 text-white"
          variants={itemVariants}
        >
          Ready To Take Your Business To The Next Level?
        </motion.h1>

        <motion.p
          className="w-full text-base lg:text-lg my-3 text-[#D4CDE3]"
          variants={itemVariants}
        >
          Partner with our expert team to drive growth and innovation with our
          secure and cost-effective solutions tailored for your business.
        </motion.p>

        <motion.button
          className="mt-6 bg-gradient-to-r from-[#A234FD] to-[#651FFF] hover:opacity-90 transition-all duration-300 text-white py-3 px-4 rounded-md"
          variants={itemVariants}
        >
          <Link
            to={"https://calendly.com/viditechvd"}
            className="flex justify-center items-center gap-2 text-white"
          >
            Schedule an Expert Call{" "}
            <span>
              <Icon icon="heroicons-outline:arrow-right" />
            </span>
          </Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default TakeActionSection;
