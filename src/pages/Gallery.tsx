import React, { useEffect, useState } from "react";
import AppLayout from "@/components/AppLayout";
import tpc_006 from "@/assets/images/tpc_006.jpg";
import GalleryAlbumsViewer from "@/components/GalleryAlbumsViewer";

// GalleryPage component to display the gallery of albums
const GalleryPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const loadJSONFiles = async () => {
      const modules = import.meta.glob("../assets/gallery/*.json");
      const dataList = [];

      for (const path in modules) {
        const mod = await modules[path]();
        dataList.push(mod); // just the content
      }

      setAlbums(dataList);
    };

    loadJSONFiles();
  }, []);

  console.log("Loaded albums:", albums);
  return (
    <AppLayout>
      <div className="container mx-auto px-4">
        {/* ...hero section... */}
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
              Gallery of Our Work
            </h1>
            <p className="text-xl max-w-2xl mx-auto transition-colors duration-500">
              Explore our portfolio showcasing successful pest control
              interventions across Davao City. From residential to commercial
              spaces, we take pride in our effective and eco-friendly solutions.
            </p>
          </div>
        </section>

        <GalleryAlbumsViewer albums={albums} />
      </div>
    </AppLayout>
  );
};

export default GalleryPage;
