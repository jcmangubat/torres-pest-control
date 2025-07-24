import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/components/AppLayout";
import PhotoCollage from "@/components/PhotoCollage";

const serviceAreas = [
  {
    name: "Panglao",
    description:
      "Protecting beach resorts and eco-tourism sites around Alona Beach.",
    images: [
      "/images/locations/panglao_1.jpeg",
      "/images/locations/panglao_2.jpeg",
      "/images/locations/panglao_3.avif",
      "/images/locations/panglao_4.avif",
      "/images/locations/panglao_5.webp",
      "/images/locations/panglao_6.jpg",
    ],
  },
  {
    name: "Digos",
    description:
      "From farms to mountain lodges — keeping Mt. Apo’s gateway clean.",
    images: [
      "/images/locations/panglao_1.jpeg",
      "/images/locations/panglao_2.jpeg",
      "/images/locations/panglao_3.avif",
      "/images/locations/panglao_4.avif",
      "/images/locations/panglao_5.webp",
      "/images/locations/panglao_6.jpg",
    ],
  },
  {
    name: "Cebu City",
    description: "Trusted in business districts and heritage landmarks.",
    images: [
      "/images/locations/panglao_1.jpeg",
      "/images/locations/panglao_2.jpeg",
      "/images/locations/panglao_3.avif",
      "/images/locations/panglao_4.avif",
      "/images/locations/panglao_5.webp",
      "/images/locations/panglao_6.jpg",
    ],
  },
  {
    name: "Davao City",
    description:
      "Eco-friendly pest control across one of the country’s safest cities.",
    images: [
      "/images/locations/panglao_1.jpeg",
      "/images/locations/panglao_2.jpeg",
      "/images/locations/panglao_3.avif",
      "/images/locations/panglao_4.avif",
      "/images/locations/panglao_5.webp",
      "/images/locations/panglao_6.jpg",
    ],
  },
  {
    name: "Dumaguete City",
    description:
      "We serve schools, coastal homes, and historic sites with care.",
    images: [
      "/images/locations/panglao_1.jpeg",
      "/images/locations/panglao_2.jpeg",
      "/images/locations/panglao_3.avif",
      "/images/locations/panglao_4.avif",
      "/images/locations/panglao_5.webp",
      "/images/locations/panglao_6.jpg",
    ],
  },
  {
    name: "Samal Island",
    description:
      "Island-grade protection for resorts and beachside properties.",
    images: [
      "/images/locations/panglao_1.jpeg",
      "/images/locations/panglao_2.jpeg",
      "/images/locations/panglao_3.avif",
      "/images/locations/panglao_4.avif",
      "/images/locations/panglao_5.webp",
      "/images/locations/panglao_6.jpg",
    ],
  },
];

const ServicedRegionsPage = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4">
        <section className="py-32 text-center bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Our Service Areas
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We proudly serve homes and businesses across the Philippines—from
            coastal escapes to urban centers.
          </p>
        </section>

        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceAreas.map(({ name, description, images }) => (
              <Card className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow border-2 hover:border-green-200 dark:hover:border-green-600 dark:bg-gray-800">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <PhotoCollage
                      photos={images}
                      width={600}
                      height={400}
                      altPrefix={name}
                    />
                  </div>
                  <CardTitle className="text-xl dark:text-white">
                    {name}, Philippines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
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
        </section>
      </div>
    </AppLayout>
  );
};

export default ServicedRegionsPage;
