import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/components/AppLayout";
import banner_services from "@/assets/images/banner-services.jpg";
import SiteBreadcrumbs from "@/components/SiteBreadCrumbs";

type Region = {
  name: string;
  position: [number, number];
  description: string;
};

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 7.118246885181027,
  lng: 125.49535579013283,
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
      {/* 🌄 Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Areas</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            From coastal homes to bustling cities, Torres Pest Control is trusted across the Philippines.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-3" data-aos="fade-in">
        <SiteBreadcrumbs />
      </div>

      {/* Google Map */}
      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="200">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {servedRegions.map((region, idx) => (
              <Marker
                key={idx}
                position={{ lat: region.position[0], lng: region.position[1] }}
                title={region.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>

        <div
          className="text-center mt-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
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
    </AppLayout>
  );
};

export default ServicedRegionsPage;
