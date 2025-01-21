import { Icon } from "@iconify/react/dist/iconify.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import assets from "../../public/assets/images";
import { clientSayData } from "../data/data";

const Testimonials = () => {
  return (
    <div className="w-full py-7 lg:py-16 my-10 lg:my-16 bg-appWhite bg-testimonial">
      <div className="px-6 lg:px-20">
        <div className="flex items-center gap-2">
          <img src={assets.arrowImg} alt="" className="max-w-[5rem]" />
          <h2 className="font-extrabold text-base text-appPurple">
            Testimonials
          </h2>
        </div>
        <h2 className="w-full lg:max-w-[59rem] my-3 font-extrabold text-3xl text-appNavy">
          Hear from our users who have saved thousands on their Startup and SaaS
          solution spend.
        </h2>
      </div>

      <div className="w-full my-8 lg:my-14 md:px-4 px-6">
        <Swiper
          direction={"horizontal"}
          freeMode={true}
          spaceBetween={15}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="custom-swiper"
        >
          {clientSayData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="py-3 px-4 rounded-lg border-appPurple/40 bg-[#d8cbf350] backdrop-blur-5xl shadow-xl text-appNavy border">
                <div className="flex lg:items-center gap-3">
                  <img
                    src={item.image}
                    alt="clients image"
                    className="max-w-[4rem] md:max-w-[5rem]"
                  />
                  <div className="lg:mb-0 mb-2">
                    <h3 className="font-bold text-lg text-appPurple">
                      {item.name}
                    </h3>
                    <p className="text-[15.4px] text-gray-700">
                      {item.address}
                    </p>
                  </div>
                </div>
                <h4 className="lg:text-base text-[15px] my-4 text-[#666666]">
                  {item.testimony}
                </h4>
                <hr className="my-2" />
                <div className="flex justify-between lg:items-center mt-3">
                  <p className="text-[14.3px]">{item.date}</p>
                  <span className="flex items-center text-[18px] text-[#edab30]">
                    <Icon icon="ic:outline-star" />
                    <Icon icon="ic:outline-star" />
                    <Icon icon="ic:outline-star" />
                    <Icon icon="ic:outline-star" />
                    <Icon icon="ic:outline-star" />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
