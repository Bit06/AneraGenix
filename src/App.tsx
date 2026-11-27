import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Methodology from "./sections/Methodology";
import CaseStudy from "./sections/CaseStudy";
import Team from "./sections/Team";
import References from "./sections/References";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Methodology />
        <CaseStudy />
        <Team />
        <References />
      </main>
      <Footer />
    </>
  );
}
