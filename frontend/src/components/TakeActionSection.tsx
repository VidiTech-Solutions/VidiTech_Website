import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const TakeActionSection = () => {
  return (
    <div className="w-full py-16 lg:px-16 px-6 my-10 lg:my-16 text-white">
      <div className="bg-[#1A001F] py-6 lg:py-20 px-5 lg:px-0 w-full text-center rounded-2xl flex flex-col justify-center items-center">
        {/* Heading */}
        <h1 className="font-extrabold text-3xl lg:text-4xl lg:mb-0 mb-2 text-white">
          Ready To Take Your Business To The Next Level?
        </h1>
        {/* Subheading */}
        <p className="w-full text-base lg:text-lg my-3 text-[#D4CDE3]">
          Work with the best freelance talent from around the world on our
          secure and cost-effective platform.
        </p>
        {/* Button */}
        <button className="mt-6   bg-gradient-to-r from-[#A234FD] to-[#651FFF] hover:opacity-90 transition-all duration-300 text-white py-3 px-4 rounded-md">
          <Link
            to={"/"}
            className="flex justify-center items-center gap-2 text-white"
          >
            Schedule an Expert Call{" "}
            <span>
              <Icon icon="heroicons-outline:arrow-right" />
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default TakeActionSection;
