import Hero from "./Hero";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import CTASection from "./CTASection";

const Home = () => {

  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}

export default Home;
