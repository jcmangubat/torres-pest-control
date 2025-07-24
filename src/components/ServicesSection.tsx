import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bug, Rat, Droplets, SprayCan, Shield, Construction,
  Eye, Footprints, Home, FileText
} from "lucide-react";

// Subcomponent: Service Card
const ServiceCard = ({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) => (
  <Card className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow border-2 hover:border-green-200 dark:hover:border-green-600 dark:bg-gray-800">
    <CardHeader className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <CardTitle className="text-xl dark:text-white">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </CardContent>
  </Card>
);

// Subcomponent: Service Group
const ServiceGroup = ({
  title,
  services
}: {
  title: string;
  services: { icon: JSX.Element; title: string; description: string }[];
}) => (
  <section className="mb-16">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
      {title}
    </h3>
    <div className={`grid gap-8 ${services.length >= 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </section>
);

const ServicesSection = () => {
  const groupedServices = [
    {
      title: "🛡️ General Pest & Vermin Control",
      services: [
        {
          icon: <Bug className="h-8 w-8 text-red-600 dark:text-red-400" />,
          title: "General Pest Control",
          description: "Safe, effective elimination of common pests and vermin."
        },
        {
          icon: <Rat className="h-8 w-8 text-gray-700 dark:text-gray-400" />,
          title: "Rodent Removal",
          description: "Strategic removal of rats and mice to reduce health and fire hazards."
        },
        {
          icon: <Droplets className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
          title: "Fogging & Misting",
          description: "Targeted mosquito and airborne insect control."
        },
        {
          icon: <SprayCan className="h-8 w-8 text-pink-600 dark:text-pink-400" />,
          title: "Fumigation Services",
          description: "Full-structure vermin removal using controlled treatments."
        }
      ]
    },
    {
      title: "🪵 Termite Defense & Prevention",
      services: [
        {
          icon: <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
          title: "Termite Control",
          description: "Protect your property from structural damage with specialized treatments."
        },
        {
          icon: <Construction className="h-8 w-8 text-green-600 dark:text-green-400" />,
          title: "Soil Treatment",
          description: "Shields your foundation from termite threats before they even start."
        },
        {
          icon: <Eye className="h-8 w-8 text-teal-600 dark:text-teal-400" />,
          title: "Termite Inspections & Proofing",
          description: "Comprehensive inspections and preventive maintenance programs."
        }
      ]
    },
    {
      title: "🎯 Specialized Termite Systems",
      services: [
        {
          icon: <Footprints className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />,
          title: "Exterra Termite Baiting System",
          description: "Advanced termite baiting solution for long-term protection."
        },
        {
          icon: <Footprints className="h-8 w-8 text-yellow-500 dark:text-yellow-300" />,
          title: "Extermix Termite Baiting System",
          description: "Alternative baiting strategy for diverse termite colonies."
        },
        {
          icon: <Construction className="h-8 w-8 text-orange-600 dark:text-orange-400" />,
          title: "Drilling Services",
          description: "Precision drilling for bait placement and termite-proofing access."
        },
        {
          icon: <Home className="h-8 w-8 text-lime-600 dark:text-lime-400" />,
          title: "E Group 'Lihog Brad' Termite Services",
          description: "Locally trusted termite interventions tailored to Davao conditions."
        }
      ]
    },
    {
      title: "🔧 Long-Term Termite Care",
      services: [
        {
          icon: <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
          title: "Termite Abatement Maintenance",
          description: "Ongoing inspections and treatments to maintain structural integrity."
        }
      ]
    },
    {
      title: "🏡 Structural & Perimeter Shielding",
      services: [
        {
          icon: <Home className="h-8 w-8 text-gray-600 dark:text-gray-400" />,
          title: "Perimeter Barrier Treatments",
          description: "Exterior spray solutions to defend your property perimeter."
        },
        {
          icon: <Home className="h-8 w-8 text-gray-600 dark:text-gray-400" />,
          title: "Crawl Space & Attic Treatments",
          description: "Targeted vermin and pest control in concealed interior areas."
        },
        {
          icon: <Footprints className="h-8 w-8 text-yellow-700 dark:text-yellow-500" />,
          title: "Wall Injection Systems",
          description: "Interior termite treatment for sealed structures and wall cavities."
        }
      ]
    },
    {
      title: "🌿 Eco-Friendly & Child-Safe Options",
      services: [
        {
          icon: <Droplets className="h-8 w-8 text-green-600 dark:text-green-400" />,
          title: "Organic Pest Control Solutions",
          description: "Low-toxicity, plant-based solutions for safe pest treatment."
        },
        {
          icon: <Shield className="h-8 w-8 text-pink-500 dark:text-pink-300" />,
          title: "Child & Pet-Safe Protocols",
          description: "Specialized treatments for sensitive homes and spaces."
        }
      ]
    },
    {
      title: "📋 Compliance & Sanitation Support",
      services: [
        {
          icon: <FileText className="h-8 w-8 text-blue-500 dark:text-blue-300" />,
          title: "DOH Documentation Support",
          description: "Permits, service logs, and records for health department compliance."
        },
        {
          icon: <FileText className="h-8 w-8 text-blue-700 dark:text-blue-400" />,
          title: "Compliance Audit Preparation",
          description: "Pre-assessment and reporting for regulated industries."
        },
        {
          icon: <SprayCan className="h-8 w-8 text-gray-500 dark:text-gray-300" />,
          title: "Virus Disinfection Services",
          description: "Fogging and sanitation for schools, offices, and hospitals."
        }
      ]
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
            Pest, vermin, termite, and sanitation solutions trusted across Davao homes and businesses.
          </p>
        </div>

        {groupedServices.map((group, idx) => (
          <ServiceGroup key={idx} title={group.title} services={group.services} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
