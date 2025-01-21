import assets from "../../public/assets/images";
import { projectCountData } from "../data/data";

const Hero = () => {
  return (
    <>
      <div className="w-full px-6 lg:px-16 lg:py-10 py-6 mt-10 flex flex-col lg:flex-row lg:gap-x-10 gap-y-12">
        {/* Text Section */}
        <div className="w-full lg:max-w-[44rem] ">
          <h1 className="font-extrabold text-appNavy text-4xl md:text-6xl ">
            Empowering Your Business with{" "}
            <span className="text-appPurple">Cutting-Edge</span> Digital
            Solutions
          </h1>
          <p className="my-7 w-full text-base md:text-lg md:max-w-[32rem] text-appGray">
            Empowering your business with expert freelance talent, ensuring
            secure, seamless, and affordable digital solutions.
          </p>
          <button className="my-1 w-full text-base max-w-[10rem] bg-appPurple text-appWhite py-3.5 px-2 rounded-md">
            Get Started
          </button>
        </div>

        {/* Hero Image Section */}
        <div className="lg:max-w-[33rem] md:max-w-[33rem] md:self-center">
          <img src={assets.heroImg} alt="hero image" className="object-cover" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0A0557] to-[#0B075E] lg:py-8 py-4 md:px-20 px-5 flex justify-around items-center">
        {projectCountData.map((data, index) => (
          <div key={index} className="relative">
            <div
              className={`flex flex-wrap flex-col md:justify-center ${
                index === 1 ? "text-[#fb2ec4]" : "text-appWhite"
              }`}
            >
              <h3 className="font-extrabold md:text-4xl text-[30px]">
                {data.nom}
              </h3>
              <p className="text-sm md:text-base font-semibold my-2 w-full">
                {data.desc}
              </p>
              {index < projectCountData.length - 1 && (
                <span className="absolute lg:right-[-7.8rem] md:right-[-3rem] right-[-1rem] top-1/2 h-20 w-px bg-gray-300 transform -translate-y-1/2"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
