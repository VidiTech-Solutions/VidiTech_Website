import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { pricingPlans } from "../data/data";
import RadioToggle from "./RadioToggle";

const PricingPlan = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full lg:py-16 py-10 lg:px-16 px-7">
      <h1 className="text-appNavy w-full max-w-[35rem] mx-auto text-center font-extrabold text-4xl lg:text-6xl ">
        Pricing Plans of Your Art Journey
      </h1>
      <div className="flex items-center gap-16 justify-center mt-7">
        <h2 className="font-medium text-base text-appPurple/75">Monthly</h2>
        <RadioToggle
          isActive={isActive}
          onChange={() => setIsActive((prev) => !prev)}
        />
        <h2 className="font-medium text-base text-appPurple/75">
          Annually Save 30%
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-10 my-10 lg:my-14">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="relative bg-[#fafafa] border border-appPurple/30 rounded-lg shadow-lg p-6"
          >
            {/* Top-right label */}
            {plan.label && (
              <div className="absolute top-[-1rem] right-2 bg-[#292962] text-appWhite text-sm px-2 py-1 rounded">
                {plan.label}
              </div>
            )}

            {/* Plan name */}
            <div className="text-center mt-4">
              <h2 className="text-lg font-normal text-appNavy/90">
                {plan.plan}
              </h2>
              <div className="flex items-center justify-center gap-1 my-3">
                <span className="align-super mb-2 text-[15.8px]">$</span>
                <h3 className="text-4xl text-center font-bold text-appNavy">
                  {plan.price}
                </h3>
                <span className="text-[15.8px] align-sub font-light mt-5">
                  /month
                </span>
              </div>
            </div>

            <div className="my-2 flex justify-center items-center">
              <button className="px-2 py-3 w-full max-w-[20rem] font-semibold text-white rounded-lg bg-gradient-to-r from-[#A234FD] to-[#651FFF] hover:opacity-90">
                Start free Trial today
              </button>
            </div>

            {/* Features */}
            <ul className="list-disc space-y-6 mt-7">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="bg-[#535EE0] text-appWhite rounded-md p-0.5">
                    <Icon icon="ci:check" className="text-lg" />
                  </span>
                  <span className="lg:text-[15.2px] text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Conditional rendering for image */}
            {plan.image && (
              <div className="mt-6 w-full h-[8rem]">
                <img
                  src={plan.image}
                  alt={`${plan.plan} Plan`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Custom Plan Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl lg:text-3xl font-bold text-appNavy">
          Looking for a Custom Plan?
        </h2>
        <p className="text-base lg:text-lg text-appNavy/75 mt-4 max-w-[40rem] mx-auto">
          If none of our plans meet your needs, reach out to us and we’ll create
          a plan tailored just for you.
        </p>
        <button className="mt-6 px-5 py-3 text-white rounded-lg bg-gradient-to-r from-[#A234FD] to-[#651FFF] hover:opacity-90">
          <a
            href="mailto:Viditechvd@gmail.com"
            className="flex items-center gap-2"
          >
            Email Us
            <Icon icon="heroicons-outline:arrow-right" className="text-lg" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default PricingPlan;
