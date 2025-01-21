import { Link } from "react-router-dom";
import assets from "../../public/assets/images";
import { whatWeveDoneData } from "../data/data";

const WhatWeveDone = () => {
  return (
    <div className="w-full px-6 lg:px-20 py-7 lg:py-14 my-10 lg:my-16">
      <div className="flex items-center gap-2">
        <img src={assets.arrowImg} alt="" className="max-w-[5rem]" />
        <h2 className="font-extrabold text-base text-appPurple">
          What We've Done
        </h2>
      </div>
      <div className="flex md:flex-row flex-col justify-between lg:items-center lg:gap-y-0 gap-y-3 my-2">
        <h1 className="text-3xl font-extrabold w-full max-w-[40rem] text-appNavy">
          Checkout some of our hands-on projects delivered to client
          satisfaction.
        </h1>

        <button className="my-1 w-full text-base max-w-[10rem] bg-gradient-to-r from-[#A234FD] to-[#651FFF] hover:opacity-90 text-white py-3 px-2 rounded-md">
          <Link to={"/projects"}>Learn More</Link>
        </button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-5 gap-y-3">
        {whatWeveDoneData.map((item, index) => (
          <div key={index} className="lg:my-10 my-10">
            <div className="">
              <img className="rounded-lg" src={item.img} alt="" />
            </div>
            <div className="my-3">
              <h1 className="text-[#07000E] font-bold text-[24px]">
                {item.title}
              </h1>
              <h3 className="text-appPurple text-xl font-bold">
                {item.subTitle}
              </h3>
              <div className="mt-2 flex gap-2 flex-wrap">
                {item.frameWork.map((fw, index) => (
                  <span
                    className="bg-appWhite py-2 px-3 text-[#a33af9] text-sm rounded-full"
                    key={index}
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeveDone;
