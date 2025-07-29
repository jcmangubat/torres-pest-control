import { Button } from "@/components/ui/button";
import { Phone, Shield, CheckCircle } from "lucide-react";
import AdsGallery from "./AdsGallery";
import tpc_bkg_1 from "@/assets/images/hero/tpc_hero_1.png";
import { HERO_RESPECT_THEME } from "@/config/site-config";

type HeroSectionProps = {
  respectTheme?: boolean;
};

const scrollToContactAndFocusName = () => {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });

    // Slight delay to ensure scrolling completes before focus
    setTimeout(() => {
      const nameInput = el.querySelector(
        "input[placeholder='Your Name']"
      ) as HTMLInputElement;
      if (nameInput) nameInput.focus();
    }, 600); // tweak if needed
  }
};

const HeroSection = ({
  respectTheme = HERO_RESPECT_THEME,
}: HeroSectionProps) => {
  const themeClass = respectTheme ? "" : "dark";

  return (
    <section
      id="hero-section"
      // data-aos="fade-up"
      // data-aos-delay="100"
      // data-aos-easing="ease-out"
      // data-aos-duration="1000"
      className={`${themeClass} relative w-full bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-32 md:pt-48 overflow-hidden`}
    >
      <div
        id="hero-bg-overlay"
        className="absolute inset-0 bg-black/20 dark:bg-black/50"
        style={{
          backgroundImage: `url(${tpc_bkg_1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // filter: "sepia(1) brightness(0.3)",
          // filter: "sepia(.5) brightness(0.5) contrast(1.2) saturate(1.2)",
          filter: "sepia(.5) brightness(0.6) saturate(0.8) contrast(0.6)",
        }}
      ></div>
      <div className="relative z-10 w-full px-4 md:px-12 lg:px-64">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="zoom-in" className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <Shield className="h-16 w-16 text-green-600 dark:text-green-400" />
            </div>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Your family deserves peace. <i>Not pests.</i>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8"
            >
              Professional pest control services with 14-15 years of experience.
              Eco-friendly solutions that keep your family and environment safe.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white px-8 py-4 text-lg"
                onClick={() => (window.location.href = "tel:+639171391908")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +63 917 139 1908
              </Button>
              <Button
                onClick={scrollToContactAndFocusName}
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-gray-800 px-8 py-4 text-lg"
              >
                Get Free Inspection
              </Button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 text-sm text-gray-600 dark:text-gray-400"
            >
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
          <div
            id="ads-player"
            // data-aos="zoom-out"
            // data-aos-delay="500"
            className="flex justify-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]"
          >
            <AdsGallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
