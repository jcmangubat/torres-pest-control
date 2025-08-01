import React from "react";
import { Helmet } from "react-helmet";
import AppLayout from "@/components/AppLayout";
import SiteBreadcrumbs from "@/components/SiteBreadCrumbs";
import tpc_grp0 from "@/assets/images/banner-about.jpg";

const PrivacyPolicy = () => {
  return (
    <AppLayout>
      <Helmet>
        <title>Privacy Policy | Torres Pest Control Davao</title>
        <meta
          name="description"
          content="Learn how Torres Pest Control collects, uses, and protects your personal data. Your privacy and trust are important to us."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://torrespestcontrol.ph/privacy" />
      </Helmet>

      <div className="w-full">
        {/* 🖼️ Hero Banner */}
        <section
          className="relative h-[65vh] justify-center text-center bg-black text-white flex items-end bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${tpc_grp0})`,
          }}
        >
          <div
            className="max-w-4xl px-4 mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              We value your privacy and are committed to protecting your
              personal information.
            </p>
          </div>
        </section>

        {/* 🧭 Breadcrumbs */}
        <div className="max-w-6xl mx-auto space-y-16 pt-3">
          <SiteBreadcrumbs />
        </div>

        {/* 📜 Policy Content */}
        <section className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <h2>1. Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email
                address, phone number, and service preferences when you interact
                with our website or contact us directly.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>
                The information we collect is used to schedule services, send
                important notifications, respond to inquiries, and improve your
                experience on our website.
              </p>

              <h2>3. Cookies & Tracking</h2>
              <p>
                Our website may use cookies and similar technologies to enhance
                functionality and analyze user activity. You can adjust your
                browser settings to decline cookies.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We implement standard security measures to protect your personal
                data from unauthorized access, disclosure, or misuse.
              </p>

              <h2>5. Sharing of Information</h2>
              <p>
                We do not sell, rent, or share your information with third
                parties except as necessary to deliver our services or as
                required by law.
              </p>

              <h2>6. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your
                personal data by contacting us. We respect your privacy rights
                under applicable data protection laws.
              </p>

              <h2>7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be
                posted on this page with the revised date.
              </p>

              <p className="mt-8">
                If you have any questions about this Privacy Policy, feel free
                to contact us:
                <br />
                <strong>Phone:</strong> +63 917 139 1908
                <br />
                <strong>Email:</strong> torrespestcontrolph@gmail.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicy;
