import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
