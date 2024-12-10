import { Icon } from "@iconify/react/dist/iconify.js";
import assets from "../../public/assets/images";

const AboutPage = () => {
  return (
    <div>
      <div className="relative aboutpageBg text-appWhite py-8 px-14">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute mt-20">
          <h1 className="w-full max-w-[46rem] font-extrabold text-6xl">
            We pride ourselves on our{" "}
            <span className="text-appPurple">commitment</span> to excellence.{" "}
          </h1>
          <p className="my-5 text-base lg:text-[16.8x] w-full max-w-[40rem]">
            At VidiTech, we connect businesses with top freelance talent in tech
            and business, driving innovation and success with skilled
            professionals tailored to your needs.
          </p>

          <button className="my-3 w-full text-base max-w-[10rem] bg-appPurple text-appWhite py-3.5 px-2 rounded-md">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row gap-16 flex-col justify-between my-14 px-6 lg:px-14">
        <div className="w-full max-w-[30rem]">
          <img src={assets.ourStoryImg} alt="image" />
        </div>

        <div className="w-full max-w-[44rem]">
          <div className="flex items-center gap-2">
            <img src={assets.arrowImg} alt="" className="max-w-[5rem]" />
            <h2 className="font-extrabold text-base text-appPurple">
              Who We Are
            </h2>
          </div>
          <h1 className="font-extrabold text-4xl w-full my-3 text-[#0d0d0d]">
            Our journey began with a small team of{" "}
            <span className="text-appPurple">passionate innovators</span>
          </h1>
          <p className="my-6 text-base md:text-lg">
            Jodna Technology was founded to connect businesses with the top
            freelance talent in technology and business. Since our inception,
            we've grown into a trusted global platform, bridging the gap between
            companies’ needs and skilled professionals, helping businesses
            succeed and freelancers thrive in a fast-evolving world. Our
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
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
