import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Heart,
  Shield,
  Home,
  BadgeCheck
} from "lucide-react";
import "./../styles/benefitsSection.css";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Leaf className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: "Eco-Friendly IPM Methods",
      description:
        "Integrated Pest Management using environmentally safe solutions that protect your family and pets.",
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600 dark:text-red-400" />,
      title: "Family Safety First",
      description:
        "Our treatments are designed to eliminate pests while keeping your loved ones safe from harmful chemicals.",
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "Disease Prevention",
      description:
        "Protect your family from dengue, malaria, and other pest-borne diseases with our targeted treatments.",
    },
    {
      icon: <Home className="h-12 w-12 text-orange-600 dark:text-orange-400" />,
      title: "Property Protection",
      description:
        "Prevent structural damage and fire hazards caused by termites and rodents chewing electrical wires.",
    },
  ];

  const credentials = [
    "Certified Trained Technicians",
    "Competitive Pricing",
    "High Satisfaction",
    "PFPMOA (Philippine Federation of Pest Management Operators Inc.) Accredited",
    "PCAP (Pest Control Association of the Philippines Inc.) Accredited",
    "MUPMA (Mindanao Urban Pest Management Association Inc.) Accredited",
    "Certified Fumigator Applicator License No. 06-0517-053 • FPA Control No. XI-69-00",
    "Basic Occupational Safety and Health Training (BOSH)",
    "Construction Safety and Health Course for Site Safety Officers (COSH)",
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 unselectable"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
          >
            Why Choose Torres Pest Control?
          </h2>
          <p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Safe, effective, and environmentally responsible pest control
            solutions
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              data-aos-duration="700"
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transition Image between Benefits and Credentials */}
        <div
          className="mb-16 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src={"/images/pest-control-professionals.jpg"}
            alt="Pest control professionals at work"
            className="rounded-2xl shadow-lg max-w-3xl w-full h-auto object-cover"
          />
        </div>

        {/* Credentials & Accreditations */}
        <div className="text-center mb-10">
          <h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            data-aos="fade-up"
          >
            Accreditations & Assurance
          </h3>
          <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {credentials.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <BadgeCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
