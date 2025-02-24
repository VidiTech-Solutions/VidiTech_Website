import { Link } from "react-router-dom";
import { assets } from "../../public/assets/images";
import { useEffect, useState } from "react";
import { navData } from "../data/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setNav(false);
  };

  return (
    <header
      className={` w-full px-8 lg:px-20 lg:pt-7 pb-4 pt-5 sticky top-0 z-50 border-b border-b-appPurple/20 backdrop-blur- ${
        scrolled ? "bg-white/30 backdrop-blur-md shadow-md" : ""
      }`}
    >
      <nav className="w-full flex justify-between items-center">
        {/* logo */}
        <div>
          <Link to={"/"} className="flex items-center gap-1.5">
            <img src={assets.logo} alt="vidiTech Logo" className="" />
            <span className="font-extrabold text-xl text-appPurple">
              vidiTech
            </span>
          </Link>
        </div>

        {/* nav menus */}
        <ul className="hidden lg:flex justify-center items-center gap-6 w-full text-base sm:text-[16.1px] text-appNavy">
          {navData.map((navLinks, index) => (
            <li
              key={index}
              className="relative group py-3 hover:text-appPurple cursor-pointer"
            >
              <Link to={navLinks.route} className="">
                {navLinks.title}
              </Link>
              <div className="dot group-hover:opacity-100 group-hover:scale-100"></div>
            </li>
          ))}
        </ul>

        <Link
          to={"/contact-us"}
          className="hidden lg:block relative text-base bg-gradient-to-r from-[#A234FD] to-[#651FFF] hover:opacity-90 py-2.5 rounded-lg px-2 max-w-[8rem] w-full text-white overflow-hidden group"
        >
          <div className="relative z-10 group-hover:text-appPurple transition-colors duration-300 text-center">
            Contact
          </div>
          <span className="absolute inset-0 bg-appWhite scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-in-out"></span>
        </Link>

        {/* hamburger menu icon */}
        <span
          onClick={() => setNav(!nav)}
          className="lg:hidden flex cursor-pointer"
        >
          <Icon icon="hugeicons:menu-11" className="text-2xl text-[#111111]" />
        </span>

        {/* side drawer menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full max-w-[29rem] md:max-w-[47rem] lg:hidden z-999 duration-300 px-12 py-8 bg-[#fafafa] h-screen overflow-y-auto border-r border-r-black/10"
              : "fixed left-[-100%] top-0 h-full z-10"
          }
        >
          <div className="flex justify-between items-center">
            <Link to={"/"} className="flex items-center gap-1.5">
              <img src={assets.logo} alt="vidiTech Logo" className="" />
              <span className="font-bold text-xl text-appPurple">vidiTech</span>
            </Link>
            <span
              onClick={() => setNav(!nav)}
              className="cursor-pointer text-xl"
            >
              <Icon icon="line-md:menu-to-close-alt-transition" />
            </span>
          </div>
          <ul className="flex flex-col gap-y-8 mt-12 text-[15px]">
            {navData.map((navLinks, index) => (
              <li
                key={index}
                onClick={handleNav}
                className=" hover:text-appPurple hover:duration-300"
              >
                <Link to={navLinks.route}>{navLinks.title}</Link>
              </li>
            ))}
          </ul>
          <div className="my-14">
            <Link
              to={"/contact-us"}
              onClick={handleNav}
              className="text-base bg-gradient-to-r from-[#A234FD] to-[#651FFF] py-2.5 rounded-lg px-6 max-w-[8rem] w-full text-white inline-block text-center relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 group-hover:text-appPurple transition-colors duration-300">
                Contact
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
