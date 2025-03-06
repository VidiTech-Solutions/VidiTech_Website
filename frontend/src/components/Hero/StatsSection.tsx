import React from "react";

interface ProjectCountItem {
  nom: string;
  desc: string;
}

interface StatsSectionProps {
  projectCountData: ProjectCountItem[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ projectCountData }) => {
  return (
    <div className="w-full bg-gradient-to-br from-[#0A0557] to-[#0B075E] py-8 lg:py-12 px-4 sm:px-8 md:px-12 lg:px-20 mt-10">
      <div className="flex flex-wrap justify-center sm:justify-around gap-10 sm:gap-6 items-center max-w-screen-2xl mx-auto">
        {projectCountData.map((data, index) => (
          <div key={index} className="relative text-center sm:text-left">
            <div
              className={`flex flex-col ${
                index === 1 ? "text-[#fb2ec4]" : "text-appWhite"
              }`}
            >
              <h3 className="font-extrabold text-4xl md:text-5xl">
                {data.nom}
              </h3>
              <p className="text-base md:text-lg font-medium mt-3 w-full">
                {data.desc}
              </p>
            </div>
            {index < projectCountData.length - 1 && (
              <span className="hidden sm:block absolute right-[-3rem] lg:right-[-5rem] top-1/2 h-12 w-px bg-gray-300/40 transform -translate-y-1/2"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
