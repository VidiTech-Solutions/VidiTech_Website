import { clientSayData } from "@/data/data";
import assets from "../../public/assets/images";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const Testimonials = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // To do

  // change images  for the testimonials
  return (
    <div className="w-full py-7 lg:py-16 my-10 lg:my-16 bg-appWhite bg-testimonial">
      <div className="px-6 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <img src={assets.arrowImg} alt="" className="max-w-[5rem]" />
            <h2 className="font-extrabold text-base text-appPurple">
              Client Success Stories
            </h2>
          </div>
        </motion.div>

        <motion.h2
          className="w-full lg:max-w-[59rem] my-3 font-extrabold text-3xl text-appNavy"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
        >
          Real stories from companies that turned their vision into reality
        </motion.h2>
      </div>

      <div className="w-full my-8 lg:my-14 md:px-4 px-6">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 800ms ease-in-out"
          transitionDuration={800}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px h-full"
          arrows={false}
        >
          {clientSayData.map((item, index) => (
            <motion.div
              key={index}
              className="px-4 h-full"
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
            >
              <div className="relative py-6 px-6 rounded-lg border-appPurple/40 bg-[#d8cbf350] backdrop-blur-5xl shadow-md text-appNavy border h-[18rem] flex flex-col group hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-appPurple/20 blur-sm transform group-hover:scale-110 transition-transform duration-300"></div>
                    <img
                      src={item.image}
                      alt="client"
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-appPurple/40"
                    />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-lg text-appPurple">
                      {item.name}
                    </h3>
                    <p className="text-[15.4px] text-gray-700">
                      {item.address}
                    </p>
                  </div>
                </div>

                <div className="font-light flex-grow overflow-y-auto">
                  <h4 className="text-base text-[#666666] leading-relaxed mb-4 items-stretch italic">
                    "{item.testimony}"
                  </h4>
                </div>

                <div className="px-4 mt-auto">
                  <hr className="mb-3 border-appPurple/20" />
                  <div className="flex justify-between items-center">
                    <p className="text-[14.3px] text-gray-600">{item.date}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#edab30] text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
