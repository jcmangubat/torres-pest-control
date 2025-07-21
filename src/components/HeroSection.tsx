import { Button } from "@/components/ui/button";
import { Phone, Shield, CheckCircle } from "lucide-react";
import HeroImageGallery from "./HeroImageGallery";
import tpc_bkg_1 from "@/assets/images/tpc-bkg-1.avif";

const HeroSection = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 md:pt-32 overflow-hidden"
      style={{ backgroundImage: `url(${tpc_bkg_1})` }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <Shield className="h-16 w-16 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Protecting Homes & Businesses in Davao
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Professional pest control services with 14-15 years of experience.
              Eco-friendly solutions that keep your family and environment safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white px-8 py-4 text-lg"
                onClick={() => (window.location.href = "tel:+639171391908")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +63 917 139 1908
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-gray-800 px-8 py-4 text-lg"
              >
                Get Free Inspection
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                Free Quotation
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                Eco-Friendly Methods
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                Trained Professionals
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <HeroImageGallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
