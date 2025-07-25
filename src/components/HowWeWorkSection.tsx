import React from "react";
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
    <section className="pt-0 mb-10 bg-white dark:bg-gray-900 py-16 relative overflow-hidden transition-colors">
      {/* <div
        id="howwework-bg-overlay"
        className="absolute inset-0 bg-black/20 dark:bg-black/50"
        style={{
          backgroundImage: `url(${tpc_2012})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "sepia(.5) brightness(0.6) saturate(0.8) contrast(0.6)",
        }}
      ></div> */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-700 dark:text-green-400 mb-14">
          How We Work
        </h2>

        {/* Responsive grid for 6 steps */}
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 text-center relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
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
