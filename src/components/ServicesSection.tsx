import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bug, Zap, Shield, Home, Droplets, Eye, Construction, Footprints, Rat } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Bug className="h-8 w-8 text-red-600 dark:text-red-400" />,
      title: "Cockroach Control",
      description: "Complete elimination of cockroach infestations using safe, effective methods."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Ant & Termite Treatment",
      description: "Protect your property from structural damage with our specialized treatments."
    },
    {
      icon: <Rat className="h-8 w-8 text-gray-600 dark:text-gray-400" />,
      title: "Rodent Removal",
      description: "Safe removal of rats and mice to prevent disease and fire hazards."
    },
    {
      icon: <Droplets className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Dengue Mosquito Fogging",
      description: "Targeted fogging to eliminate dengue-carrying mosquitoes."
    },
    {
      // icon: <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />,
      icon: <Construction className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Soil Treatment",
      description: "Shields your foundation from termite threats before they even start."
    },
    {
      icon: <Eye className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Termite Inspections",
      description: "Comprehensive inspections and preventive maintenance programs."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive pest control solutions for homes and businesses in Davao
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 dark:hover:border-green-600 dark:bg-gray-800">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;