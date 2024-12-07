import assets from "../../public/assets/images";

const Testimonials = () => {
  return (
    <div className="w-full px-8 lg:px-20 py-7 lg:py-14 my-10 lg:my-16 bg-appWhite bg-testimonial">
      <div className="flex items-center gap-2">
        <img src={assets.arrowImg} alt="" className="max-w-[5rem]" />
        <h2 className="font-extrabold text-base text-appPurple">
          What We've Done
        </h2>
      </div>
      <h2 className="w-full max-w-[59rem] my-3 font-extrabold text-3xl text-[#0d0d0d]">
        Hear from our users who have saved thousands on their Startup and SaaS
        solution spend.
      </h2>
    </div>
  );
};

export default Testimonials;
