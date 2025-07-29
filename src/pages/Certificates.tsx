import React from "react";
import AppLayout from "@/components/AppLayout";
import banner_services from "@/assets/images/banner-services.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import SiteBreadcrumbs from "@/components/SiteBreadCrumbs";

// Certificate images
import cert_business from "@/assets/images/tpc_cert_1.jpg";
import cert_sanitary from "@/assets/images/tpc_cert_3.jpg";
import cert_lto from "@/assets/images/tpc_cert_2.jpg";

const CertificatesPage = () => {
  return (
    <AppLayout>
      {/* 🌄 Banner Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
        style={{
          backgroundImage: `url(${banner_services})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div
          className="relative z-10 text-center text-white px-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Legal Certifications & Compliance
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Torres Pest Control operates with full accreditation and regulatory
            compliance for chemical safety, sanitation, and insured service
            delivery.
          </p>
        </div>
      </section>

      {/* 🧭 Breadcrumbs */}
      <div className="container mx-auto px-4 pt-3">
        <SiteBreadcrumbs />
      </div>

      {/* 📜 Certificates Grid */}
      <div className="container mx-auto px-4 pt-3">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            { label: "Business Permit", image: cert_business },
            { label: "License to Operate", image: cert_lto },
            { label: "Sanitary Permit", image: cert_sanitary },
          ].map(({ label, image }, idx) => (
            <div
              key={label}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800"
              data-aos="zoom-in"
              data-aos-delay={idx * 200}
            >
              <Zoom>
                <img
                  src={image}
                  alt={label}
                  className="w-full h-auto object-cover aspect-[3/4] cursor-zoom-in"
                />
              </Zoom>
              <div className="p-4 text-center">
                <h2 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                  {label}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* ℹ️ Note */}
        <div
          className="mt-16 text-center mb-20"
          data-aos="fade-up"
          data-aos-delay="400"
        >
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
      </div>
    </AppLayout>
  );
};

export default CertificatesPage;
