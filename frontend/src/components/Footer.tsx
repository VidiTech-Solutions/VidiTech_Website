import { Link } from "react-router-dom";
import assets from "../../public/assets/images";
import { footerItems } from "../data/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-16 py-8 lg:py-16 lg:mt-28 mt-16 bg-[#0A0E27]">
      <div className="w-full border border-[#7C3AED]/50 backdrop-blur-lg text-white rounded-lg p-5 sm:p-6 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Logo and Newsletter */}
          <div className="max-w-md">
            <Link to={"/"} className="flex items-center gap-1.5">
              <img src={assets.logo} alt="vidiTech Logo" className="h-8" />
              <span className="font-extrabold text-xl text-white">
                vidiTech
              </span>
            </Link>
            <p className="text-sm font-light my-3 text-[#E0DCE8]">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="my-3 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#161B3A] w-full max-w-full sm:max-w-[16rem] outline-none text-sm border border-[#7C3AED] px-3 rounded-md py-2.5 text-white"
              />
              <button className="bg-gradient-to-r from-[#A234FD] to-[#651FFF] hover:opacity-90 text-white px-4 py-2.5 text-sm w-full sm:w-auto sm:max-w-[8rem] rounded-md transition duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm font-light my-4 text-[#E0DCE8]">
              By subscribing you agree to our{" "}
              <span className="underline cursor-pointer hover:text-[#A87CFA]">
                Privacy Policy
              </span>{" "}
              and provide consent to receive updates from our company.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:mt-0">
            {footerItems.map((category, index) => (
              <div key={index} className="mb-4 lg:mb-0">
                <h3 className="text-base font-bold mb-3 text-white">
                  {category.title}
                </h3>
                <ul className="flex flex-col gap-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 cursor-pointer text-[#E0DCE8] hover:text-[#A87CFA] transition duration-300"
                    >
                      {item.icon && (
                        <Icon
                          icon={item.icon}
                          className="text-xl flex-shrink-0"
                        />
                      )}
                      <a href="#" className="text-[15px]">
                        {item.label}
                      </a>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-white mt-10 lg:mt-20 gap-y-4">
        <p className="text-[13.5px] font-light text-[#D9D7E5]">
          &copy; 2024 VidiTech. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
          <p className="underline text-[13.3px] font-light cursor-pointer text-[#D9D7E5] hover:text-[#A87CFA] transition duration-300">
            Privacy Policy
          </p>
          <p className="underline text-[13.3px] font-light cursor-pointer text-[#D9D7E5] hover:text-[#A87CFA] transition duration-300">
            Terms of Service
          </p>
          <p className="underline text-[13.3px] font-light cursor-pointer text-[#D9D7E5] hover:text-[#A87CFA] transition duration-300">
            Cookies Settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
