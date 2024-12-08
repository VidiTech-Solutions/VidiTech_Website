import Hero from "../components/Hero";
import ServicesWeOffer from "../components/ServicesWeOffer";
import TakeActionSection from "../components/TakeActionSection";
import Testimonials from "../components/Testimonials";
import WhatWeveDone from "../components/WhatWeveDone";
import WhoWeAreSection from "../components/WhoWeAreSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhoWeAreSection />
      <ServicesWeOffer />
      <WhatWeveDone />
      <Testimonials />
      <TakeActionSection />
    </>
  );
};

export default HomePage;
