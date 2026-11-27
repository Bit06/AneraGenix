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

        {/* Big simple button for PDF viewers to visit the live site */}
        <div className="py-12 text-center">
          <a
            href="https://aneragenix-orcin.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand-deep px-9 py-4 text-[16px] font-semibold text-white shadow-md transition hover:bg-ink active:scale-95 cursor-pointer"
          >
            Check out the site
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
