import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bug,
  Rat,
  Droplets,
  SprayCan,
  Shield,
  Construction,
  Eye,
  Footprints,
  Home,
  FileText,
  Lightbulb,
  Bomb
} from "lucide-react";

type ServiceProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  imageSrc?: string;
};

const ServiceCard = ({ icon, title, description, imageSrc }: ServiceProps) => (
  <Card className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow border-2 hover:border-green-200 dark:hover:border-green-600 dark:bg-gray-800">
    <CardHeader className="text-center">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 object-cover rounded-t-md mb-4"
        />
      )}
      <div className="flex justify-center mb-4">{icon}</div>
      <CardTitle className="text-xl dark:text-white">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 dark:text-gray-300 text-center">
        {description}
      </p>
    </CardContent>
  </Card>
);

// Subcomponent: Service Group
const ServiceGroup = ({
  title,
  services,
}: {
  title: string;
  services: {
    icon: JSX.Element;
    title: string;
    description: string;
    imageSrc?: string;
  }[];
}) => (
  <section className="mb-16">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
      {title}
    </h3>
    <div
      className={`grid gap-8 ${
        services.length >= 3
          ? "md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          imageSrc={service.imageSrc}
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
          description:
            "Safe, effective elimination of common pests and vermin.",
          imageSrc: "/images/services/tpc_srvc_0.png",
        },
        {
          icon: <Rat className="h-8 w-8 text-gray-700 dark:text-gray-400" />,
          title: "Rodent Removal",
          description:
            "Strategic removal of rats and mice to reduce health and fire hazards.",
          imageSrc: "/images/services/tpc_srvc_3.jpg",
        },
        {
          icon: (
            <Droplets className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          ),
          title: "Fogging & Misting",
          description: "Targeted mosquito and airborne insect control.",
          imageSrc: "/images/services/tpc_srvc_2.png",
        },
        {
          icon: (
            <SprayCan className="h-8 w-8 text-pink-600 dark:text-pink-400" />
          ),
          title: "Fumigation Services",
          description:
            "Full-structure vermin removal using controlled treatments.",
          imageSrc: "/images/services/tpc_srvc_4.png",
        },
        {
          icon: (
            <Lightbulb className="h-8 w-8 text-green-600 dark:text-yellow-400" />
          ),
          title: "Insect Light Trap Installation",
          description: "Effective indoor insect control using UV light traps.",
          imageSrc: "/images/services/tpc_srvc_25.jpg",
        },
      ],
    },
    {
      title: "🪵 Termite Defense & Prevention",
      services: [
        {
          icon: <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
          title: "Termite Control",
          description:
            "Protect your property from structural damage with specialized treatments.",
          imageSrc: "/images/services/tpc_srvc_5.png",
        },
        {
          icon: (
            <Construction className="h-8 w-8 text-green-600 dark:text-green-400" />
          ),
          title: "Soil Treatment",
          description:
            "Shields your foundation from termite threats before they even start.",
          imageSrc: "/images/services/tpc_srvc_6.jpg",
        },
        {
          icon: <Eye className="h-8 w-8 text-teal-600 dark:text-teal-400" />,
          title: "Termite Inspections & Proofing",
          description:
            "Comprehensive inspections and preventive maintenance programs.",
          imageSrc: "/images/services/tpc_srvc_8.jpg",
        },
        {
          icon: <Bomb className="h-8 w-8 text-red-600 dark:text-red-400" />,
          title: "Mound Demolition",
          description:
            "Targeted destruction of termite mounds to prevent infestations.",
          imageSrc: "/images/services/tpc_srvc_27.jpg",
        },
      ],
    },
    {
      title: "🎯 Specialized Termite Systems",
      services: [
        {
          icon: (
            <Footprints className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
          ),
          title: "Exterra Termite Baiting System",
          description:
            "Advanced termite baiting solution for long-term protection.",
          imageSrc: "/images/services/tpc_srvc_9.jpg",
        },
        {
          icon: (
            <Footprints className="h-8 w-8 text-yellow-500 dark:text-yellow-300" />
          ),
          title: "Extermix Termite Baiting System",
          description:
            "Alternative baiting strategy for diverse termite colonies.",
          imageSrc: "/images/services/tpc_srvc_10.jpg",
        },
        {
          icon: (
            <Construction className="h-8 w-8 text-orange-600 dark:text-orange-400" />
          ),
          title: "Drilling Services",
          description:
            "Precision drilling for bait placement and termite-proofing access.",
          imageSrc: "/images/services/tpc_srvc_11.jpg",
        },
      ],
    },
    {
      title: "🔧 Long-Term Termite Care",
      services: [
        {
          icon: (
            <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          ),
          title: "Termite Abatement Maintenance",
          description:
            "Ongoing inspections and treatments to maintain structural integrity.",
          imageSrc: "/images/services/tpc_srvc_16.png",
        },
      ],
    },
    {
      title: "🏡 Structural & Perimeter Shielding",
      services: [
        {
          icon: <Home className="h-8 w-8 text-gray-600 dark:text-gray-400" />,
          title: "Perimeter Barrier Treatments",
          description:
            "Exterior spray solutions to defend your property perimeter.",
          imageSrc: "/images/services/tpc_srvc_17.jpg",
        },
        {
          icon: <Home className="h-8 w-8 text-gray-600 dark:text-gray-400" />,
          title: "Crawl Space & Attic Treatments",
          description:
            "Targeted vermin and pest control in concealed interior areas.",
          imageSrc: "/images/services/tpc_srvc_15.jpg",
        },
        {
          icon: (
            <Footprints className="h-8 w-8 text-yellow-700 dark:text-yellow-500" />
          ),
          title: "Wall Injection Systems",
          description:
            "Interior termite treatment for sealed structures and wall cavities.",
          imageSrc: "/images/services/tpc_srvc_18.jpg",
        },
      ],
    },
    {
      title: "🌿 Eco-Friendly & Child-Safe Options",
      services: [
        {
          icon: (
            <Droplets className="h-8 w-8 text-green-600 dark:text-green-400" />
          ),
          title: "Organic Pest Control Solutions",
          description:
            "Low-toxicity, plant-based solutions for safe pest treatment.",
          imageSrc: "/images/services/tpc_srvc_20.jpg",
        },
        {
          icon: <Shield className="h-8 w-8 text-pink-500 dark:text-pink-300" />,
          title: "Child & Pet-Safe Protocols",
          description: "Specialized treatments for sensitive homes and spaces.",
          imageSrc: "/images/services/tpc_srvc_21.png",
        },
      ],
    },
    {
      title: "📋 Compliance & Sanitation Support",
      services: [
        {
          icon: (
            <FileText className="h-8 w-8 text-blue-500 dark:text-blue-300" />
          ),
          title: "DOH Documentation Support",
          description:
            "Comprehensive documentation including government-issued permits, detailed service logs, and verified records maintained in alignment with local and national health department compliance requirements.",
          imageSrc: "/images/services/tpc_srvc_22.png",
        },
        {
          icon: (
            <FileText className="h-8 w-8 text-blue-700 dark:text-blue-400" />
          ),
          title: "Compliance Audit Preparation",
          description:
            "Systematic pre-audit preparation and documentation review tailored to the needs of regulated industries, ensuring readiness for inspections, certification, and health department evaluations.",
          imageSrc: "/images/services/tpc_srvc_13.jpg",
        },
        {
          icon: (
            <SprayCan className="h-8 w-8 text-gray-500 dark:text-gray-300" />
          ),
          title: "Virus Disinfection Services",
          description:
            "Professional disinfection services utilizing advanced fogging and sanitation techniques to eliminate viruses and pathogens from high-traffic environments such as schools, corporate offices, and healthcare facilities.",
          imageSrc: "/images/services/tpc_srvc_24.png",
        },
      ],
    },
  ];

  return (
    <section id="services" className="pt-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pest, vermin, termite, and sanitation solutions trusted across Davao
            homes and businesses.
          </p>
        </div>

        {groupedServices.map((group, idx) => (
          <ServiceGroup
            key={idx}
            title={group.title}
            services={group.services}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
