import { Icon } from "@iconify/react/dist/iconify.js";

const TakeActionSection = () => {
  return (
    <div className="w-full py-16 lg:px-16 px-6 my-10 lg:my-16 text-appWhite">
      <div className="bg-[#07000E] py-6 lg:py-20 lg:px-0 px-5 w-full text-center rounded-2xl flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-3xl lg:mb-0 mb-2">
          Ready To Take Your Business To The Next Level?
        </h1>
        <p className="w-full text-base lg:text-xl my-3 text-appWhite/55">
          Work with the best freelance talent from around the world on our
          secure and cost-effective platform.
        </p>
        <button className="mt-6 w-full text-base max-w-[10rem] bg-appPurple hover:bg-[#5021a0] hover:duration-300 text-appWhite py-3 px-2 rounded-md flex justify-center items-center gap-2">
          Learn More{" "}
          <span>
            <Icon icon="heroicons-outline:arrow-right" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TakeActionSection;
