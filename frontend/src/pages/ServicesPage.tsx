import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { servicesData } from "../data/data";

const ServicesPage = () => {
  const imgGridColors = [
    "#006647",
    "#333333",
    "#996300",
    "#174582",
    "#6933ff",
    "#990000",
  ];

  const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  // To Do
  //change icons appropriately for the services provided

  return (
    <div>
      <motion.div
        className="relative servicesBg text-white py-8 px-6 lg:px-14"
        initial="hidden"
        animate="visible"
        variants={serviceVariants}
      >
        <div className="absolute lg:mt-28 mt-16">
          <h1 className="w-full lg:max-w-[46rem] font-extrabold text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="my-5 text-base lg:text-lg w-full max-w-[30rem] text-gray-200">
            From concept to launch, we're here to transform your vision into a
            digital reality. Explore our core services and how we make every
            project a success.
          </p>
          <a
            href="https://calendly.com/viditechvd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block my-3 text-base bg-gradient-to-r from-[#A234FD] to-[#651FFF] hover:opacity-90 text-white py-3.5 px-4 rounded-md shadow-md"
          >
            Schedule an Expert Call
          </a>
        </div>
      </motion.div>

      <div className="my-20 grid md:grid-cols-2 grid-cols-1 gap-6 px-8 lg:px-16">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#F5EAFE] px-3.5 py-3 rounded-lg border border-[#da72f480] cursor-pointer"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div
              className="px-2 py-3 rounded-lg w-full max-w-[4rem] flex justify-center items-center"
              style={{
                backgroundColor: imgGridColors[index % imgGridColors.length],
              }}
            >
              <img src={service.icon} alt="Icon" className="w-8" />
            </div>

            <h3 className="font-bold text-xl my-3">{service.title}</h3>

            <ul className="my-3 flex flex-col gap-y-5">
              {service.offers.map((offer, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Icon icon="ic:round-check" />
                  {offer}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
