import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import RecentProjects from "./components/RecentProjects";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <RecentProjects />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}
