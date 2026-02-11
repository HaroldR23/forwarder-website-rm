import GlobalCoverage from "./GlobalCovarage";
import Hero from "./Hero";
import Mision from "./Mision";
import Story from "./Story";
import Values from "./Values";

const About = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Story />
      <Mision />
      <Values />
      <GlobalCoverage />
    </div>
  );
};

export default About;
