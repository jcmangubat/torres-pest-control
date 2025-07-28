import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/components/AppLayout";
import ServiceMap from "@/components/ServiceMap";

type Region = {
  name: string;
  position: [number, number];
  description: string;
};

// ServicedRegionsPage component to display the map of serviced regions
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
      setServedRegions(typedRegions); // JSON modules are in the `.default` export
    };

    loadJSON();
  }, []);

  console.log("Loaded served regions:", servedRegions); // Debugging output
  return (
    <AppLayout>
      <div className="container mx-auto px-4">
        <section
          className="py-32 text-center bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900"
          style={{ paddingBottom: "2rem" }}
        >
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Our Service Areas
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We proudly serve homes and businesses across the Philippines—from
            coastal escapes to urban centers.
          </p>
        </section>

        <div className="w-full max-w-8xl mx-auto ">
          <div className="relative z-0 overflow-hidden h-[1000px] w-full rounded-md shadow-lg">
            <ServiceMap regions={servedRegions} />
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-12">
            If you’re in one of these areas and need help,{" "}
            <a
              href="#contact"
              className="text-green-600 dark:text-green-400 underline"
            >
              reach out now
            </a>
            — we're just a message away.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default ServicedRegionsPage;
