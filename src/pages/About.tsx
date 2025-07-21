import React from "react";
import AppLayout from "@/components/AppLayout";
import { AppProvider } from "@/contexts/AppContext";

import tpc_grp0 from "@/assets/images/about-grp0.jpg";

const AboutPage = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4">
        <section
          className="relative py-32 px-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
          style={{
            backgroundImage: `url(${tpc_grp0})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "grayscale(100%)",
          }}
        >
          <div className="max-w-5xl mx-auto text-center text-white dark:text-white backdrop-blur-sm p-6 rounded-lg">
            <h1 className="text-5xl font-bold mb-4 transition-colors duration-500">
              Locally Trusted. Family Safe.
            </h1>
            <p className="text-xl max-w-2xl mx-auto transition-colors duration-500">
              Torres Pest Control has protected homes and businesses in Davao
              for over 14 years with safe, effective, and eco-conscious pest
              solutions.
            </p>
          </div>
        </section>

        {/* 🧬 Company Overview */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 space-y-12">
            {/* 🧱 Our Commitment */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Commitment
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We treat every property like our own — with precision, care, and
                respect. Whether it’s a family home, a clinic, or a local shop,
                our goal is to eliminate pests while preserving safety and
                trust.
              </p>
            </div>

            {/* 🧪 Our Approach */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Approach
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We follow Integrated Pest Management (IPM) principles —
                combining sanitation, structural defense, and targeted
                treatments. Only when necessary do we apply eco-safe chemicals,
                always with minimal exposure and maximum effectiveness.
              </p>
            </div>

            {/* 🛡️ Safety & Compliance */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Safety & Compliance
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our technicians are trained in public health protocols and safe
                application methods. We prioritize child-safe, pet-safe, and
                environmentally responsible solutions — especially for
                hospitals, schools, and food establishments.
              </p>
            </div>

            {/* 🙋 Founder Highlight */}
            <div id="founder-hightlight">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Behind the company is a dedicated team of pest specialists
                trained in IPM, sanitation, and public safety. Our founder,
                Dennis Torres, believes that every service visit builds trust —
                not just terminates pests.
              </p>

              {/* 👥 Team Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <img
                    key={i}
                    src={`/images/about-grp${i}.jpg`} // Replace with actual image paths
                    alt={`Team Member ${i}`}
                    className="rounded-lg shadow-md object-cover w-full h-64"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default AboutPage;
