import { Icon } from "@iconify/react/dist/iconify.js";
import { serviceOfferData } from "../data/data";

const ServicesWeOffer = () => {
  return (
    <div className="w-full px-6 lg:px-20 py-7 lg:py-14 my-10 lg:my-16 bg-[#1A001F] text-[#F3F0F5]">
      {/* Header Section */}
      <div className="flex items-center gap-2">
        <h1 className="text-4xl md:text-[43px] font-bold">Services We Offer</h1>
        <span className="text-6xl text-[#A234FD]">
          <Icon icon="jam:menu" />
        </span>
      </div>

      {/* Services Grid */}
      <div className="my-10 lg:my-12 grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-6 grid-cols-1 gap-y-6">
        {serviceOfferData.map((data, index) => (
          <div
            key={index}
            className="px-6 py-5 border cursor-pointer border-[#A234FD]/30 rounded-xl bg-[#2B1A38] shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
          >
            {/* Icon */}
            <div className="max-w-[4rem] my-3">
              <Icon
                icon={data.image}
                className="lg:text-[38px] text-4xl text-[#A234FD]"
              />
            </div>
            {/* Headline */}
            <h3 className="text-[22px] font-bold text-[#F3F0F5]">
              {data.headline}
            </h3>
            {/* Description */}
            <p className="lg:text-base text-[15px] font-light mt-5 text-[#D4CDE3]">
              {data.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesWeOffer;
