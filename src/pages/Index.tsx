import React, { useEffect } from "react";
import { AppProvider } from "@/contexts/AppContext";
import AppLayout from "@/components/AppLayout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialSection from "@/components/TestimonialSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";

const Index: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <AppProvider>
      <AppLayout>
        <div className="mx-auto">
          <HeroSection />
          <StatsSection/>
          <ServicesSection />
          <BenefitsSection />
          <TestimonialSection />
          <ContactSection />
        </div>
      </AppLayout>
    </AppProvider>
  );
};

export default Index;
