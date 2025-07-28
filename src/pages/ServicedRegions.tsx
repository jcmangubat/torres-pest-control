import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/components/AppLayout";
import ServiceMap from "@/components/ServiceMap";
import banner_services from "@/assets/images/banner-services.jpg";

type Region = {
  name: string;
  position: [number, number];
  description: string;
};

const ServicedRegionsPage = () => {
  const [servedRegions, setServedRegions] = useState<Region[]>([]);

  useEffect(() => {
    const loadJSON = async () => {
      const mod = await import("../assets/served-regions.json");
      const typedRegions: Region[] = mod.default.map((r: any) => ({
        name: r.name as string,
        description: r.description as string,
        position: [r.position[0], r.position[1]] as [number, number],
      }));
      setServedRegions(typedRegions);
    };

    loadJSON();
  }, []);

  return (
    <AppLayout>
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner_services})`, // optional background
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Service Areas
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            From coastal homes to bustling cities, Torres Pest Control is trusted across the Philippines.
          </p>
        </div>
      </section>

      {/* Map and Info */}
      <section className="bg-white dark:bg-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Where We Operate
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hover or tap the map below to explore the regions we actively serve.
            </p>
          </div> */}

          <div className="w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700">
            <div className="h-[900px] md:h-[1000px] w-full">
              <ServiceMap regions={servedRegions} />
            </div>
          </div>

          <div className="text-center">
            <p className="text-base text-gray-600 dark:text-gray-400">
              If you’re in one of these areas and need help,{" "}
              <a
                href="#contact"
                className="text-green-600 dark:text-green-400 underline hover:opacity-90"
              >
                reach out now
              </a>{" "}
              — we're just a message away.
            </p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default ServicedRegionsPage;
