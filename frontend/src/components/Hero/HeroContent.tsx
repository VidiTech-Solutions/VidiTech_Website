import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="w-full animate-fadeIn">
      <div className="relative">
        <div className="absolute -top-14 -left-10 w-40 h-40 bg-purple-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <h1 className="font-medium  text-appNavy text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight relative z-10">
          Empowering Your Business with{" "}
          <span className="text-appPurple bg-gradient-to-r from-[#A234FD] to-[#651FFF] bg-clip-text text-transparent">
            Cutting-Edge
          </span>{" "}
          Digital Solutions
        </h1>
      </div>
      <p className="mt-6 mb-8 text-lg text-appGray leading-relaxed font-normal max-w-2xl">
        Empowering your business with expert freelance talent, ensuring secure,
        seamless, and affordable digital solutions.
      </p>
      <div className="flex items-center gap-6">
        <Link to="/services">
          <button className="bg-gradient-to-r from-[#A234FD] to-[#651FFF] hover:opacity-90 transition-all duration-300 text-white py-4 px-8 rounded-md text-base font-semibold shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </Link>
        <Link
          to="/portfolio"
          className="text-appNavy font-medium hover:text-appPurple transition-colors duration-200 flex items-center gap-2"
        >
          View Our Work <span className="text-xl">→</span>
        </Link>
      </div>
    </div>
  );
};

export default HeroContent;
