import { Link } from "react-router-dom";
import assets from "../../public/assets/images";
import { footerItems } from "../data/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <div className="w-full px-6 lg:px-16 py-8 lg:py-16 lg:mt-28 mt-16 bg-[#0c0934]">
      <div className="w-full border border-appPurple/80 backdrop-blur-lg text-appWhite rounded-lg px-5 py-6 lg:py-12 grid lg:grid-cols-[1fr,1fr] lg:gap-8">
        {/* logo */}
        <div>
          <Link to={"/"} className="flex items-center gap-1.5">
            <img src={assets.logo} alt="vidiTech Logo" />
            <span className="font-extrabold text-xl text-appWhite">
              vidiTech
            </span>
          </Link>
          <p className="text-sm font-light my-2.5">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="my-3 flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent w-full max-w-[16rem] outline-none text-sm border border-appPurple px-3 rounded-[4.8px] py-2.5"
            />
            <button className="bg-appWhite text-appPurple px-3 py-2 text-sm w-full max-w-[8rem]">
              Subscribe
            </button>
          </div>
          <p className="text-sm font-light my-5">
            By subscribing you agree to our{" "}
            <span className="underline">Privacy Policy</span> and provide
            consent to receive updates from our company.
          </p>
        </div>

        {/* links */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:my-0 my-5">
          {footerItems.map((category, index) => (
            <div key={index}>
              <h3 className="text-base font-bold my-2">{category.title}</h3>
              <ul className="flex flex-col gap-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-2 cursor-pointer hover:text-purple-500 hover:duration-300"
                  >
                    {item.icon && <Icon icon={item.icon} className="text-xl" />}
                    <a href="#" className="my-1 flex items-center text-[15px]">
                      {item.label}
                    </a>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-y-4 lg:gap-y-0 justify-between text-white mt-20">
        <p className="text-[13.5px] font-light">
          &copy; 2024 VidiTech. All rights reserved.
        </p>
        <div className="flex gap-4 items-center">
          <p className="underline text-[13.3px] font-light cursor-pointer hover:text-purple-500 hover:duration-300">
            Privacy Policy
          </p>
          <p className="underline text-[13.3px] font-light cursor-pointer hover:text-purple-500 hover:duration-300">
            Terms of Service
          </p>
          <p className="underline text-[13.3px] font-light cursor-pointer hover:text-purple-500 hover:duration-300">
            Cookies Settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
