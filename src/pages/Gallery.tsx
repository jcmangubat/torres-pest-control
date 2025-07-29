import React, { useEffect, useState } from "react";
import AppLayout from "@/components/AppLayout";
import banner_services from "@/assets/images/banner-services.jpg";
import GalleryAlbumsViewer from "@/components/GalleryAlbumsViewer";
import SiteBreadcrumbs from "@/components/SiteBreadCrumbs";

const GalleryPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const loadJSONFiles = async () => {
      const modules = import.meta.glob("../assets/gallery/*.json");
      const dataList = [];

      for (const path in modules) {
        const mod = await modules[path]();
        dataList.push(mod);
      }

      setAlbums(dataList);
    };

    loadJSONFiles();
  }, []);

  return (
    <AppLayout>
      {/* 🌄 Hero Banner */}
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
            Gallery of Our Work
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Explore our portfolio showcasing successful pest control interventions across Davao City. From residential to commercial spaces, we take pride in our effective and eco-friendly solutions.
          </p>
        </div>
      </section>

      {/* 🧭 Breadcrumbs */}
      <div className="container mx-auto px-4 pt-3" data-aos="fade-in">
        <SiteBreadcrumbs />
      </div>

      {/* 🖼️ Gallery Albums Viewer */}
      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="200">
        <GalleryAlbumsViewer albums={albums} />
      </div>
    </AppLayout>
  );
};

export default GalleryPage;
