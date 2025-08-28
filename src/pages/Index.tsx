import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { AppProvider } from "@/contexts/AppContext";
import AppLayout from "@/components/AppLayout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialSection from "@/components/TestimonialSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import BlogsSection from "@/components/BlogsSection";

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
        <Helmet htmlAttributes={{ lang: "en" }}>
          <meta charSet="utf-8" />
          <title>
            Torres Pest Control | Termite & Sanitation Services in Davao
          </title>
          <meta
            name="description"
            content="Torres Pest Control offers professional pest, termite, and sanitation services for Davao homes and businesses. Eco-conscious and family-safe for 14+ years."
          />
          <meta
            name="keywords"
            content="pest control Davao, termite treatment, sanitation services, Torres Pest Control"
          />
          <meta name="author" content="Torres Pest Control PH" />
          <meta property="og:title" content="Torres Pest Control | Davao" />
          <meta
            property="og:description"
            content="Expert pest, termite, and sanitation services trusted by Davao homes and businesses."
          />
          <meta property="og:url" content="https://torrespestcontrol.ph/" />
          <meta
            property="og:image"
            content="https://torrespestcontrol.ph/images/og-banner.jpg"
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <div className="mx-auto">
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <HowWeWorkSection />
          <BenefitsSection />
          <TestimonialSection />
          <BlogsSection />
          <ContactSection />
        </div>
      </AppLayout>
    </AppProvider>
  );
};

export default Index;
