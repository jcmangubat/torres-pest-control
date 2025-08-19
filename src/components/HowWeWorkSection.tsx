import React, { useEffect, useState } from "react";
import tpc_2012 from "../assets/images/tpc_2012.jpg";

const HowWeWorkSection = () => {
  const steps = [
    {
      emoji: "📅",
      title: "01 — Schedule Your Inspection",
      description:
        "Book a free site visit at your convenience—call, message, or use our online form.",
    },
    {
      emoji: "🔍",
      title: "02 — Assessment & Recommendation",
      description:
        "Our licensed technician inspects your property and recommends the best pest control solution.",
    },
    {
      emoji: "💬",
      title: "03 — Quote & Approval",
      description:
        "We prepare a transparent service quote based on your needs before starting any treatment.",
    },
    {
      emoji: "🗓️",
      title: "04 — Schedule Your Service",
      description:
        "We coordinate the best time for treatment based on your availability.",
    },
    {
      emoji: "🧪",
      title: "05 — Treatment Execution",
      description:
        "We perform the pest control service using safe and effective methods tailored to your situation.",
    },
    {
      emoji: "✅",
      title: "06 — Monitoring & Aftercare",
      description:
        "We monitor treatment success and provide guidance to help prevent future infestations.",
    },
  ];

  return (
    <section className="pt-0 mb-10 bg-white dark:bg-gray-900 py-16 relative overflow-hidden transition-colors unselectable">
      <div
        id="howwework-bg-overlay"
        className="absolute inset-0 bg-black/30 dark:bg-black/70"
        style={{
          backgroundImage: `url(${tpc_2012})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5) saturate(0.8) contrast(0.6)",
          opacity: 0.6,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2
          className="text-4xl font-bold text-center text-white-700 dark:text-white-400 mb-10 mt-5"
          data-aos="fade-up"
        >
          How We Work
        </h2>

        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 text-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100} // staggered animation
              data-aos-duration="800"
            >
              <div className="w-20 h-20 rounded-full bg-red-600 border-4 border-yellow-400 flex items-center justify-center text-white text-2xl shadow-lg">
                {step.emoji}
              </div>
              <h3 className="font-semibold mt-4 text-base text-gray-800 dark:text-gray-100">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
