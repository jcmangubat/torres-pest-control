import React from "react";
import AppLayout from "@/components/AppLayout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import { AppProvider } from "@/contexts/AppContext";

const Index: React.FC = () => {
  return (
    <AppProvider>
      <AppLayout>
        <div className="container mx-auto px-4">
          <HeroSection />
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
