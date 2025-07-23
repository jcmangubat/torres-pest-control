import React from "react";
import AppLayout from "@/components/AppLayout";
import { AppProvider } from "@/contexts/AppContext";

import tpc_006 from "@/assets/images/tpc_006.jpg";

// Importing certificate images
import cert_business from "@/assets/images/tpc_cert_1.jpg";
import cert_sanitary from "@/assets/images/tpc_cert_3.jpg";
import cert_lto from "@/assets/images/tpc_cert_2.jpg";

const CertificatesPage = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4">
        <section
          className="relative py-32 px-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
          style={{
            backgroundImage: `url(${tpc_006})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "grayscale(100%)",
          }}
        >
          <div className="max-w-5xl mx-auto text-center text-white dark:text-white backdrop-blur-sm p-6 rounded-lg">
            <h1 className="text-5xl font-bold mb-4 transition-colors duration-500">
              Legal Certifications & Compliance
            </h1>
            <p className="text-xl max-w-2xl mx-auto transition-colors duration-500">
              Torres Pest Control operates with full accreditation and
              regulatory compliance for chemical safety, sanitation, and insured
              service delivery.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { label: "Business Permit", image: cert_business },
              { label: "License to Operate", image: cert_lto },
              { label: "Sanitary Permit", image: cert_sanitary },
            ].map(({ label, image }) => (
              <div
                key={label}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800"
              >
                <img src={image} alt={label} className="w-full h-auto" />
                <div className="p-4 text-center">
                  <h2 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                    {label}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              For verification or full documentation, kindly request via{" "}
              <a
                href="#contact"
                className="text-green-600 dark:text-green-400 underline"
              >
                contact form
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default CertificatesPage;
