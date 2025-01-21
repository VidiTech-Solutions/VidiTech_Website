import { Icon } from "@iconify/react/dist/iconify.js";
import assets from "../../public/assets/images";

const WhoWeAreSection = () => {
  return (
    <div className="w-full lg:py-16 lg:px-[4rem] px-6 lg:my-16 my-10">
      <div className="flex lg:flex-row gap-16 flex-col justify-between">
        <div className="w-full max-w-[30rem]">
          <img src={assets.whoWeAreImg} alt="image" />
        </div>

        <div className="w-full max-w-[44rem]">
          <div className="flex items-center gap-2">
            <img src={assets.arrowImg} alt="" className="max-w-[5rem]" />
            <h2 className="font-extrabold text-base text-appPurple">
              Who We Are
            </h2>
          </div>
          <h1 className="font-extrabold text-4xl w-full my-3 text-appNavy">
            Our journey began with a small team of{" "}
            <span className="text-appPurple">passionate innovators</span>
          </h1>
          <p className="my-6 text-base md:text-lg text-appGray">
            We pride ourselves on our commitment to excellence, cutting-edge
            innovation, and unwavering focus on client satisfaction. Our
            solutions have helped countless businesses transform their digital
            presence and achieve unprecedented growth.
          </p>
          <button className="my-6 w-full text-base max-w-[10rem] bg-appPurple text-appWhite py-3 px-2 rounded-md flex justify-center items-center gap-3">
            Learn More{" "}
            <span>
              <Icon
                icon="heroicons-outline:arrow-right"
                width="24"
                height="24"
                className="text-appWhite"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
