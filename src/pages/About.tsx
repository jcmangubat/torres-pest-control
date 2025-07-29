import React from "react";
import { Helmet } from "react-helmet";
import AppLayout from "@/components/AppLayout";
import tpc_grp0 from "@/assets/images/banner-about.jpg";
import SiteBreadcrumbs from "@/components/SiteBreadCrumbs";

const AboutPage = () => {
  return (
    <AppLayout>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>About Us | Torres Pest Control Davao</title>
        <meta
          name="description"
          content="Learn about Torres Pest Control – our mission, eco-conscious approach, and trusted team serving Davao homes and businesses for over 14 years."
        />
        <meta
          name="keywords"
          content="about Torres Pest Control, pest control team, IPM approach, Davao sanitation"
        />
        <meta name="author" content="Torres Pest Control PH" />
        <meta
          property="og:title"
          content="About Us | Torres Pest Control Davao"
        />
        <meta
          property="og:description"
          content="Meet the team and learn how Torres Pest Control ensures safety, compliance, and pest-free homes in Davao."
        />
        <meta property="og:url" content="https://torrespestcontrol.ph/about" />
        <meta
          property="og:image"
          content="https://torrespestcontrol.ph/images/og-banner.jpg"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://torrespestcontrol.ph/about" />
      </Helmet>
      <div className="w-full">
        {/* 🌄 Hero Banner */}
        <section
          className="relative h-[80vh] justify-center text-center bg-black text-white flex items-end bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${tpc_grp0})`,
          }}
        >
          <div className="max-w-4xl px-4 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Locally Trusted. Family Safe.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Over 14 years of eco-conscious pest control for Davao homes and
              businesses.
            </p>
          </div>
        </section>
        <div className="max-w-6xl mx-auto space-y-16 pt-3">
          <SiteBreadcrumbs />
        </div>

        {/* 📌 Company Details */}
        <section className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Split layout rows */}
            {[
              {
                title: "Our Commitment",
                content:
                  "We treat every property like our own — with precision, care, and respect. Whether it’s a family home, a clinic, or a local shop, our goal is to eliminate pests while preserving safety and trust.",
                imageUrl: "/images/tpc_180.jpg",
              },
              {
                title: "Our Approach",
                content:
                  "We follow Integrated Pest Management (IPM) principles — combining sanitation, structural defense, and targeted treatments. Only when necessary do we apply eco-safe chemicals, always with minimal exposure and maximum effectiveness.",
                imageUrl: "/images/tpc_786.jpg",
              },
              {
                title: "Safety & Compliance",
                content:
                  "Our technicians are trained in public health protocols and safe application methods. We prioritize child-safe, pet-safe, and environmentally responsible solutions — especially for hospitals, schools, and food establishments.",
                imageUrl: "/images/tpc_334.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {item.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.content}
                  </p>
                </div>
                <div>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🙋 Meet the Team */}
        <section className="py-20 bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Behind the company is a dedicated team of pest specialists trained
              in IPM, sanitation, and public safety. Our founder,{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                Dennis Torres
              </span>
              , believes that every service visit builds trust — not just
              terminates pests.
            </p>

            {/* 👥 Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl shadow-md group"
                >
                  <img
                    src={`/images/teams/tpc_98${i}.jpg`}
                    alt={`Team Member ${i}`}
                    className="object-cover w-full h-64 transform group-hover:scale-105 transition duration-300 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default AboutPage;
