import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Strengths from "@/components/Strengths";
import Experience from "@/components/Experience";
import ProductOps from "@/components/ProductOps";
import Testimonials from "@/components/Testimonials";
import Tools from "@/components/Tools";
import RecruiterValue from "@/components/RecruiterValue";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Strengths />
        <Experience />
        <ProductOps />
        <Testimonials />
        <Tools />
        <RecruiterValue />
        <Education />
        <Contact />
      </main>
    </>
  );
}
