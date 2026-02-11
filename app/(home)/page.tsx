import Hero from "./Hero";
import Stats from "./Stats";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import CTASection from "./CTASection";

const Home = () => {

  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </div>
  );
}

export default Home;
