import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify"; // use this or a custom slug function
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
  Bomb,
  Biohazard,
} from "lucide-react";

type ServiceProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  imageSrc?: string;
};

const slugifyTitle = (title: string) =>
  slugify(title, { lower: true, strict: true });

const ServiceCard = ({ icon, title, description, imageSrc }: ServiceProps) => {
  const slug = slugifyTitle(title);

  return (
    <Link to={`/services/${slug}`}>
      <Card
        className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow border-2 hover:border-green-200 dark:hover:border-green-600 dark:bg-gray-800 cursor-pointer"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="700"
      >
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
    </Link>
  );
};

const iconsMap: Record<string, JSX.Element> = {
  Bug: <Bug className="h-8 w-8 text-red-600 dark:text-red-400" />,
  Rat: <Rat className="h-8 w-8 text-gray-700 dark:text-gray-400" />,
  Droplets: (
    <Droplets className="h-8 w-8 text-purple-600 dark:text-purple-400" />
  ),
  SprayCan: <SprayCan className="h-8 w-8 text-pink-600 dark:text-pink-400" />,
  Shield: <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  Construction: (
    <Construction className="h-8 w-8 text-green-600 dark:text-green-400" />
  ),
  Eye: <Eye className="h-8 w-8 text-teal-600 dark:text-teal-400" />,
  Footprints: (
    <Footprints className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
  ),
  Home: <Home className="h-8 w-8 text-gray-600 dark:text-gray-400" />,
  FileText: <FileText className="h-8 w-8 text-blue-500 dark:text-blue-300" />,
  Lightbulb: (
    <Lightbulb className="h-8 w-8 text-green-600 dark:text-yellow-400" />
  ),
  Bomb: <Bomb className="h-8 w-8 text-red-600 dark:text-red-400" />,
  Biohazard: <Biohazard className="h-8 w-8 text-red-600 dark:text-red-400" />,
};

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
  <section className="mb-16 unselectable">
    <h3
      data-aos="fade-right"
      className="text-2xl font-semibold text-gray-800 dark:text-white mb-6"
    >
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
  // State to hold grouped services
  const [groupedServices, setGroupedServices] = useState<
    { title: string; services: ServiceProps[] }[]
  >([]);

  // Fetch services data from JSON file
  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch("/content/services/grouped-services.json");
      const data = await res.json();

      const enriched = data.map((group: any) => ({
        title: group.title,
        services: group.services.map((s: any) => ({
          ...s,
          icon: iconsMap[s.icon] || <Bug className="h-8 w-8" />,
        })),
      }));

      setGroupedServices(enriched);
    };

    fetchServices();
  }, []);

  // If no services are loaded, show a loading state
  return (
    <section
      id="services"
      className="pt-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-down"
          >
            Our Professional Services
          </h2>
          <p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
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
