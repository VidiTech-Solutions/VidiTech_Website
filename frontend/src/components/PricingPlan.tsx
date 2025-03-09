import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { pricingPlans } from "../data/data";

const PricingPlan = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <div className="w-full lg:py-16 py-10 lg:px-16 px-7">
      <h1 className="text-appNavy w-full max-w-[35rem] mx-auto text-center font-extrabold text-2xl lg:text-5xl ">
        Pricing Plans for Your Development Needs
      </h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-10 my-10 lg:my-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="relative bg-[#fafafa] border border-appPurple/30 rounded-lg shadow-lg p-6"
            variants={itemVariants}
          >
            {plan.label && (
              <div className="absolute top-[-1rem] right-2 bg-[#292962] text-appWhite text-sm px-2 py-1 rounded">
                {plan.label}
              </div>
            )}

            <div className="text-center mt-4">
              <h2 className="text-lg font-normal text-appNavy/90">
                {plan.plan}
              </h2>
              <div className="flex items-center justify-center gap-1 my-3">
                <span className="align-super mb-2 text-[15.8px]">$</span>
                <h3 className="text-4xl text-center font-bold text-appNavy">
                  {plan.price}
                </h3>
              </div>
            </div>

            <div className="my-2 flex justify-center items-center">
              <button className="px-2 py-3 w-full max-w-[20rem] font-semibold text-white rounded-lg bg-gradient-to-r from-[#A234FD] to-[#651FFF] hover:opacity-90">
                Start Your Project
              </button>
            </div>

            <ul className="list-disc space-y-6 mt-7">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="bg-[#535EE0] text-appWhite rounded-md p-0.5">
                    <Icon icon="ci:check" className="text-lg" />
                  </span>
                  <span className="lg:text-[15.2px] text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {plan.image && (
              <div className="mt-6 w-full h-[8rem]">
                <img
                  src={plan.image}
                  alt={`${plan.plan} Plan`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-[12rem]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <h2 className="text-2xl lg:text-4xl font-bold text-appNavy">
          Looking for a Custom Plan?
        </h2>
        <p className="text-base lg:text-lg text-appNavy/75 mt-4 max-w-[40rem] mx-auto">
          If none of our plans meet your needs, reach out to us and we’ll create
          a plan tailored just for you.
        </p>
        <motion.button
          className="mt-6 px-5 py-3 text-white rounded-lg bg-[#651FFF] hover:opacity-90"
          variants={sectionVariants}
        >
          <a
            href="mailto:info@viditech.online"
            className="flex items-center gap-2"
          >
            Email Us
            <Icon icon="heroicons-outline:arrow-right" className="text-lg" />
          </a>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PricingPlan;
