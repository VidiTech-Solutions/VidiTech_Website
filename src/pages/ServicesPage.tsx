import { Icon } from "@iconify/react/dist/iconify.js";
import { servicesData } from "../data/data";

const ServicesPage = () => {
  const imgGridColors = [
    "#006647", // green
    "#333333", // black
    "#996300", // yellow
    "#174582", // blueNavy
    "#6933ff", // blueLight
    "#990000", // wineRed
  ];

  return (
    <div>
      <div className="relative servicesBg text-appWhite py-8 px-6 lg:px-14">
        <div className="absolute lg:mt-28 mt-16">
          <h1 className="w-full lg:max-w-[46rem] font-extrabold text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="my-5 text-base lg:text-[16.8x] w-full max-w-[30rem]">
            From concept to launch, we're here to transform your vision into a
            digital reality. Explore our core services and how we make every
            project a success.
          </p>
          <button className="my-3 w-full text-base max-w-[10rem] bg-appPurple text-appWhite py-3.5 px-2 rounded-md">
            Book a Call
          </button>
        </div>
      </div>

      <>
        <div className="my-20 grid md:grid-cols-2 grid-cols-1 gap-6 px-8 lg:px-16">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-[#F5EAFE] px-3.5 py-3 rounded-lg border border-[#da72f480] cursor-pointer"
            >
              <div
                className="px-2 py-3 rounded-lg w-full max-w-[4rem] flex justify-center items-center"
                style={{
                  backgroundColor: imgGridColors[index % imgGridColors.length],
                }}
              >
                <img src={service.icon} alt="Icon" className="w-8" />
              </div>
              <h3 className="font-bold text-xl my-3">{service.title}</h3>
              <ul className="my-3 flex flex-col gap-y-5">
                {service.offers.map((offer, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icon icon="ic:round-check" />
                    {offer}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default ServicesPage;
