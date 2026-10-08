import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProblemsSection from "@/components/ProblemsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ToolsSection from "@/components/ToolsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import AuditFormSection from "@/components/AuditFormSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-[#092328] bg-[#f4f8f7] dark:text-gray-100 text-[#092328] flex flex-col overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProblemsSection />
      <TestimonialsSection />
      <ToolsSection />
      <ExperienceSection />
      <TargetAudienceSection />
      <AuditFormSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
