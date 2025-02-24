import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import assets from "../../public/assets/images";

const WhoWeAreSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full lg:py-16 lg:px-[4rem] px-6 lg:my-16 my-10">
      <div className="flex lg:flex-row gap-16 flex-col justify-between">
        <motion.div
          className="w-full max-w-[30rem]"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }}
        >
          <img src={assets.whoWeAreImg} alt="image" />
        </motion.div>

        <motion.div
          className="w-full max-w-[44rem]"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <motion.div
            className="flex items-center gap-2"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{  amount: 0.2 }}
          >
            <img src={assets.arrowImg} alt="" className="max-w-[5rem]" />
            <h2 className="font-extrabold text-base text-appPurple">
              Who We Are
            </h2>
          </motion.div>

          <motion.h1
            className="font-extrabold text-4xl w-full my-3 text-appNavy"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            Our journey began with a small team of{" "}
            <span className="text-appPurple">passionate innovators</span>
          </motion.h1>

          <motion.p
            className="my-6 text-base md:text-lg text-appGray"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{  amount: 0.2 }}
          >
            We pride ourselves on our commitment to excellence, cutting-edge
            innovation, and unwavering focus on client satisfaction. Our
            solutions have helped countless businesses transform their digital
            presence and achieve unprecedented growth.
          </motion.p>

          <motion.button
            className="my-6 w-full text-base max-w-[10rem] bg-gradient-to-r from-[#A234FD] to-[#651FFF] hover:opacity-90 text-white py-3 px-2 rounded-md flex justify-center items-center gap-3"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            Learn More{" "}
            <span>
              <Icon
                icon="heroicons-outline:arrow-right"
                width="24"
                height="24"
                className="text-appWhite"
              />
            </span>
          </motion.button>
        </motion.div>
      </div>c
    </div>
  );
};

export default WhoWeAreSection;
