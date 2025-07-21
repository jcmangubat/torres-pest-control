import React from "react";
import AppLayout from "@/components/AppLayout";
import { AppProvider } from "@/contexts/AppContext";
import tpc_about_bkg from "@/assets/images/tpc-bkg-3.avif";

const Index: React.FC = () => {
  return (
    <AppProvider>
      <AppLayout>
        <div className="container mx-auto px-4">
          {/* 🔰 Hero / Banner */}
          <section
            className="relative py-32 px-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
            style={{
              backgroundImage: `url(${tpc_about_bkg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              filter: "grayscale(100%)",
            }}
          >
            <div className="max-w-5xl mx-auto text-center text-white dark:text-white backdrop-blur-sm p-6 rounded-lg">
              <h1 className="text-5xl font-bold mb-4 transition-colors duration-500">
                About Torres Pest Control
              </h1>
              <p className="text-xl max-w-2xl mx-auto transition-colors duration-500">
                Trusted by families and businesses in Davao for eco-safe,
                professional pest control.
              </p>
            </div>
          </section>

          {/* 🏡 Company Story */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-5xl mx-auto px-4 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Born out of a deep concern for community health and property
                  protection, Torres Pest Control has spent over 14 years
                  crafting reliable, environmentally responsible pest control
                  solutions. What started as a small operation in Davao has
                  grown into a trusted partner across homes, schools, and local
                  businesses.
                </p>
              </div>

              {/* 🌱 Vision & Values */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Mission & Values
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Deliver safe and effective pest treatments that prioritize
                    family health
                  </li>
                  <li>Protect properties from long-term structural damage</li>
                  <li>
                    Champion eco-friendly Integrated Pest Management (IPM)
                  </li>
                  <li>Empower clients with education and transparency</li>
                </ul>
              </div>

              {/* 🙋 Founder Highlight (optional) */}
              <div id="founder-hightlight">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Meet Our Team
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Behind the company is a dedicated team of pest specialists
                  trained in IPM, sanitation, and public safety. Our founder,
                  Dennis Torres believes that every service visit builds trust —
                  not just terminate pests.
                </p>
              </div>
            </div>
          </section>
        </div>
      </AppLayout>
    </AppProvider>
  );
};

export default Index;
