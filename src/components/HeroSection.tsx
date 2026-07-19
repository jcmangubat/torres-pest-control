import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { HERO_RESPECT_THEME } from "@/config/site-config";
import tpcLogo from "@/assets/images/tpc_00.jpg";
import tpc_bkg_1 from "@/assets/images/hero/tpc_hero_1.jpg";
import tpc_bkg_2 from "@/assets/images/hero/tpc_hero_2.png";
import tpc_bkg_3 from "@/assets/images/hero/tpc_hero_3.png";
import tpc_bkg_4 from "@/assets/images/hero/tpc_hero_4.jpg";

type HeroSectionProps = {
  respectTheme?: boolean;
};

const backgroundImages = [tpc_bkg_1, tpc_bkg_2, tpc_bkg_3, tpc_bkg_4];

const heroSlides = [
  {
    text: "Your family deserves peace. Not pests.",
    subText:
      "Professional pest control for Davao homes and businesses — eco-conscious, family-safe, trusted for 15+ years.",
  },
  {
    text: "Free inspections. Zero pressure.",
    subText:
      "Honest assessments from licensed technicians — helpful advice tailored to your property, no commitments.",
  },
  {
    text: "Stop termites before they strike.",
    subText:
      "Proactive treatment that shields your property from costly damage using environmentally responsible methods.",
  },
  {
    text: "Business-ready protection, after hours.",
    subText:
      "Discreet scheduling that keeps workplaces pest-free without disrupting your operations.",
  },
];

const scrollToContactAndFocusName = () => {
  const el = document.getElementById("contact");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    document.getElementById("contact-name")?.focus();
  }, 600);
};

const HeroSection = ({
  respectTheme = HERO_RESPECT_THEME,
}: HeroSectionProps) => {
  const themeClass = respectTheme ? "" : "dark";
  const [bgIndex, setBgIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  const slide = heroSlides[slideIndex];

  return (
    <section
      id="hero-section"
      className={`${themeClass} hero-home unselectable relative min-h-[100svh] w-full overflow-hidden`}
    >
      {/* Full-bleed rotating photography */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === bgIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center ${
                i === bgIndex && !reduceMotion ? "hero-kenburns" : ""
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/92 via-[#0a1628]/72 to-[#0a1628]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-[#0a1628]/40" />
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-8 md:justify-center md:pb-24 md:pt-32">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-4 md:mb-8">
              <img
                src={tpcLogo}
                alt=""
                className="h-14 w-14 rounded-full bg-white/95 p-1.5 shadow-lg md:h-16 md:w-16"
              />
              <div>
                <h1 className="font-display text-[clamp(2.4rem,8vw,5.5rem)] font-bold leading-[0.9] tracking-tight text-white">
                  <span className="text-[#e31c23]">TORRES</span>
                  <br />
                  <span className="text-[#2b6cb0]">PEST CONTROL</span>
                </h1>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={slide.text}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-[clamp(1.35rem,3.2vw,2.15rem)] font-semibold leading-snug tracking-wide text-white/95">
                  {slide.text}
                </p>
                <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-white/75 sm:text-lg">
                  {slide.subText}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                className="h-12 bg-[#e31c23] px-6 text-base font-semibold text-white hover:bg-[#c4181e]"
                onClick={() => (window.location.href = "tel:+639171391908")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +63 917 139 1908
              </Button>
              <Button
                onClick={scrollToContactAndFocusName}
                size="lg"
                variant="outline"
                className="h-12 border-white/40 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              >
                Get Free Inspection
              </Button>
            </motion.div>
          </motion.div>

          {/* Slide indicators */}
          <div
            className="mt-10 flex gap-2"
            role="tablist"
            aria-label="Hero slides"
          >
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === slideIndex}
                onClick={() => {
                  setSlideIndex(i);
                  setBgIndex(i % backgroundImages.length);
                }}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === slideIndex
                    ? "w-10 bg-[#e31c23]"
                    : "w-4 bg-white/35 hover:bg-white/55"
                }`}
                aria-label={`Show slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
