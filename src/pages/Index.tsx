import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Index = () => {
  useSmoothScroll();

  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <HorizontalScrollSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
