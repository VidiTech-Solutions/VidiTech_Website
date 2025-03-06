import { projectCountData } from "../../data/data";
import HeroContent from "./HeroContent";
import StatsSection from "./StatsSection";
import TechSVG from "./TechSVG";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-16 py-8 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-screen-2xl mx-auto">
        {/* Increased the width from 5/12 (in HeroContent) to 7/12 here */}
        <div className="w-full lg:w-7/12">
          <HeroContent />
        </div>

        {/* Decreased from 6/12 to 5/12 to give more space to the content */}
        <div className="w-full lg:w-5/12 relative">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <TechSVG />
          </div>
        </div>
      </div>

      <StatsSection projectCountData={projectCountData} />
    </div>
  );
};

export default Hero;
