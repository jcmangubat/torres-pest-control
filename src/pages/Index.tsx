import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import AppLayout from "@/components/AppLayout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialSection from "@/components/TestimonialSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import BlogsSection from "@/components/BlogsSection";

const FeaturedAdsSection = lazy(() => import("@/components/FeaturedAdsSection"));

const Index: React.FC = () => {
  return (
    <AppLayout>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>
          Torres Pest Control | Termite & Sanitation Services in Davao
        </title>
        <meta
          name="description"
          content="Torres Pest Control offers professional pest, termite, and sanitation services for Davao homes and businesses. Eco-conscious and family-safe for 15+ years."
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
          content="https://torrespestcontrol.ph/images/torres-pest-control-banner.jpg"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="mx-auto">
        <HeroSection />
        <StatsSection />
        <Suspense
          fallback={<div className="min-h-[20rem] bg-[#0f1c2e]" aria-hidden />}
        >
          <FeaturedAdsSection />
        </Suspense>
        <ServicesSection />
        <HowWeWorkSection />
        <BenefitsSection />
        <TestimonialSection />
        <BlogsSection />
        <ContactSection />
      </div>
    </AppLayout>
  );
};

export default Index;
