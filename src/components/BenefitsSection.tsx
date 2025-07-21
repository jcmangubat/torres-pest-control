import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Shield, Home } from "lucide-react";
import tpc_bkg_4 from "@/assets/images/tpc-bkg-4.png";
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

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
      style={{
        backgroundImage: `url(${tpc_bkg_4})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "saturate(172%)",
      }}
    >
      {/* <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-0" /> */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="neon-text text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
            Why Choose Torres Pest Control?
          </h2>
          <p
            className="neon-text text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-500"
            style={{ color: "rgb(255 255 255);" }}
          >
            Safe, effective, and environmentally responsible pest control
            solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
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
      </div>
    </section>
  );
};

export default BenefitsSection;
