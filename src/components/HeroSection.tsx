import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Shield, CheckCircle } from "lucide-react";
import AdsGallery from "./AdsGallery";
import { HERO_RESPECT_THEME } from "@/config/site-config";
import tpc_bkg_1 from "@/assets/images/hero/tpc_hero_1.png";
import tpc_bkg_2 from "@/assets/images/hero/tpc_hero_2.png";
import tpc_bkg_3 from "@/assets/images/hero/tpc_hero_3.png";
import tpc_bkg_4 from "@/assets/images/hero/tpc_hero_4.jpg";

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
  const backgroundImages = [tpc_bkg_1, tpc_bkg_2, tpc_bkg_3, tpc_bkg_4];

  const [bgIndex, setBgIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      setSlideIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      text: "Your family deserves peace. Not pests.",
      subText:
        "Professional pest control services with 14-15 years of experience. Eco-friendly solutions that keep your family and environment safe.",
    },
    {
      text: "Free inspections. Zero pressure.",
      subText:
        "Get honest assessments from our experts—no commitments, just helpful advice tailored to your needs.",
    },
    {
      text: "Protect your home from termites before they strike.",
      subText:
        "Our proactive solutions shield your property from costly termite damage, using environmentally safe methods.",
    },
    {
      text: "Business-friendly pest control that works after hours.",
      subText:
        "Flexible scheduling and discreet service designed to keep your workplace pest-free without disrupting operations.",
    },
    {
      text: "Eco-smart solutions for a safer tomorrow.",
      subText:
        "We use low-toxicity treatments that are safe for kids, pets, and the planet—because protection shouldn’t come with compromise.",
    },
  ];

  return (
    <section
      id="hero-section"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-easing="ease-out"
      data-aos-duration="1000"
      className={`${themeClass} relative w-full bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-32 md:pt-48 overflow-hidden`}
    >
      {/* <div
        id="hero-bg-overlay"
        className="absolute inset-0 bg-black/20 dark:bg-black/50 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "sepia(.5) brightness(0.6) saturate(0.8) contrast(0.6)",
        }}
      ></div> */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-black/20 dark:bg-black/50 transition-opacity duration-1000 ease-in-out ${
              i === bgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "sepia(.5) brightness(0.6) saturate(0.8) contrast(0.6)",
            }}
          />
        ))}
      </div>
      <div className="relative z-10 w-full px-4 md:px-12 lg:px-64">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="zoom-in" className="text-center lg:text-left">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="flex justify-center lg:justify-start mb-6"
            >
              <Shield className="h-16 w-16 text-green-600 dark:text-green-400" />
            </div>
            {/* <h1
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
            </p> */}

            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-opacity duration-700 ease-in-out"
              key={heroSlides[slideIndex].text} // This helps trigger re-render animation
            >
              {heroSlides[slideIndex].text}
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8 transition-opacity duration-700 ease-in-out"
              key={heroSlides[slideIndex].subText}
            >
              {heroSlides[slideIndex].subText}
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
