import { Icon } from "@iconify/react/dist/iconify.js";
import assets from "../../public/assets/images";
import { achievments, ourValues, teamsData } from "../data/data";

const AboutPage = () => {
  return (
    <div>
      <div className="relative aboutpageBg text-appWhite py-8 px-6 lg:px-14">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute lg:mt-20 mt-16">
          <h1 className="w-full lg:max-w-[46rem] font-extrabold text-5xl lg:text-6xl text-appWhite">
            We pride ourselves on our{" "}
            <span className="text-appPurple">commitment</span> to excellence.{" "}
          </h1>
          <p className="my-5 text-base lg:text-[16.8px] w-full max-w-[40rem] text-appWhite">
            At VidiTech, we connect businesses with top freelance talent in tech
            and business, driving innovation and success with skilled
            professionals tailored to your needs.
          </p>

          <button className="my-3 w-full text-base max-w-[10rem] bg-appPurple text-appWhite py-3.5 px-2 rounded-md">
            Get Started
          </button>
        </div>
      </div>

      <>
        <div className="flex lg:flex-row gap-16 flex-col justify-between my-14 px-6 lg:px-14">
          <div className="w-full max-w-[30rem]">
            <img src={assets.ourStoryImg} alt="image" />
          </div>

          <div className="w-full max-w-[44rem]">
            <div className="flex items-center gap-2">
              <img src={assets.arrowImg} alt="" className="max-w-[5rem]" />
              <h2 className="font-extrabold text-base text-appPurple">
                Our Story
              </h2>
            </div>
            <h1 className="font-extrabold text-4xl w-full my-3 text-appDark">
              We pride ourselves on our{" "}
              <span className="text-appPurple">commitment</span> to excellence.
            </h1>
            <p className="my-6 text-base md:text-lg text-appDark">
              VidiTech Technology was founded to connect businesses with the top
              freelance talent in technology and business. Since our inception,
              we've grown into a trusted global platform, bridging the gap
              between companies’ needs and skilled professionals, helping
              businesses succeed and freelancers thrive in a fast-evolving
              world. Our solutions have helped countless businesses transform
              their digital presence and achieve unprecedented growth.
            </p>
            <button className="my-6 w-full text-base max-w-[10rem] bg-appPurple text-appWhite py-3 px-2 rounded-md flex justify-center items-center gap-3">
              Learn More{" "}
              <span>
                <Icon
                  icon="heroicons-outline:arrow-right"
                  width="24"
                  height="24"
                />
              </span>
            </button>
          </div>
        </div>

        {/* our values section */}
        <section className="px-6 lg:px-14 lg:my-20 bg-[#f3e5ffc6] py-10">
          <div className="flex items-center gap-2">
            <img src={assets.arrowImg} alt="" />
            <h3 className="font-extrabold text-base text-appPurple">
              Our Values
            </h3>
          </div>
          <h1 className="font-extrabold text-4xl  w-full max-w-[52rem] mb-3 text-appDark">
            Our core values are the foundation of everything we strive to
            achieve.
          </h1>

          <div className="my-10 lg:my-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-10">
            {ourValues.map((value, index) => (
              <div
                key={index}
                className="bg-[#fffdfd80] text-appNavy backdrop-blur-lg py-2.5 px-3 rounded-xl border border-appPurple/70"
              >
                <img
                  src={value.img}
                  alt="value icon"
                  className="md:w-[3rem] w-[2.48rem]"
                />
                <h3 className="font-bold text-appPurple/95 text-lg my-2">
                  {value.title}
                </h3>
                <p className="text-[15px] md:text-base text-appDark">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* achievement section */}
        <section className="px-6 lg:px-14 my-14 lg:my-20">
          <div className="flex items-center gap-2">
            <img src={assets.arrowImg} alt="" />
            <h3 className="font-extrabold text-base text-appPurple">
              What We've Done
            </h3>
          </div>

          <h1 className="font-extrabold md:text-4xl text-3xl w-full md:max-w-[50rem] mb-3 text-appDark">
            Our path has been defined by key milestones and achievements.
          </h1>

          <div className="my-10 lg:my-14 grid lg:grid-cols-2 grid-cols-1 gap-5">
            {achievments.map((item, index) => (
              <div
                key={index}
                className="py-2.5 px-3.5 rounded-xl border border-appPurple/40 bg-[#eec7ff42]"
              >
                <div className="w-[rem]">
                  <img src={item.img} alt="" />
                </div>
                <h3 className="font-extrabold text-lg my-2 text-appPurple/85">
                  {item.title}
                </h3>
                <p className="text-[15px] md:text-base text-appDark">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* teams section */}
        <section className="px-6 lg:px-14 lg:py-14 py-6">
          <div className="flex gap-2 items-center">
            <img src={assets.arrowImg} alt="" />
            <h3 className="font-extrabold text-base text-appPurple">
              Meet Our Team
            </h3>
          </div>
          <h1 className="font-extrabold md:text-4xl text-3xl w-full md:max-w-[50rem] mb-3 text-appDark">
            We come together as a team to deliver the best services to our
            clients.
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-6">
            {teamsData.map((team, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <div className="h-[31rem] w-full flex justify-center items-center">
                  <img
                    src={team.img}
                    alt="Image Of Team"
                    className="object-cover h-full w-full rounded-lg"
                  />
                </div>
                <div className="my-4 text-appDark">
                  <h3 className="font-extrabold text-lg">{team.name}</h3>
                  <p className="text-sm font-light">{team.postition}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative px-6 lg:px-14 lg:py-14 py-6">
          <div className="relative grid lg:grid-cols-2 grid-cols-1">
            <div className="">
              <h1 className="font-extrabold text-6xl max-w-[38rem] text-appDark">
                Join us at <span className="text-appPurple">VidiTech</span>{" "}
                today!
              </h1>
              <p className="my-5 md:text-base text-[15px] text-appDark">
                Ready for growth and innovation? Join Jodna Technology and
                connect with top talent to shape the future. Whether you're a
                freelancer seeking opportunities or a business in need of
                skilled talent, we're here to connect you with success.
              </p>
              <button className="flex items-center gap-3 py-3 px-3.5 text-appPurple rounded-lg border border-appPurple/40 hover:bg-appWhite transition-all duration-300">
                Explore Our Services
                <Icon
                  icon="heroicons-outline:arrow-right"
                  width="24"
                  height="24"
                />
              </button>
            </div>
            <div className=" lg:mt-0 mt-10">
              <img src={assets.joinUsImg} alt="Image" className="" />
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default AboutPage;
