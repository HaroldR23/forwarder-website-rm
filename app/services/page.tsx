import MainServices from "./MainServices";
import Hero from "./Hero";
import AdditionalServices from "./AdditionalServices";
import CTASections from "./CTASections";

const Services = () => {

  return (
    <div className="min-h-screen">
      <Hero />
      <MainServices />
      <AdditionalServices />
      <CTASections />
    </div>
  );
};

export default Services;
