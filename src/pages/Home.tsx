import Hero from "../components/home/Hero";
import About from "../components/home/About";
import CoreTeam from "../components/home/CoreTeam";
import Programs from "../components/home/Programs";
import WhyChoose from "../components/home/WhyChoose";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CoreTeam />
      <Programs />
      <WhyChoose />
      <Testimonials />
    </>
  );
}
