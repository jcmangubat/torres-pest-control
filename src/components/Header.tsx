import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNav from "./MobileNav";
import tpc_00 from "@/assets/images/tpc_00.jpg";
import { Facebook, Instagram } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHome = location.pathname === "/";
  // Transparent overlay only when fixed header sits on the home hero (md+)
  const overHero = isHome && !isScrolled && !isMobile;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      transition-all duration-300
      md:fixed md:top-0 md:left-0 md:right-0 md:z-50 unselectable
      ${
        overHero
          ? "border-b border-transparent bg-transparent md:bg-transparent"
          : isScrolled
            ? "border-b border-gray-200 dark:border-gray-700 md:bg-white/80 md:dark:bg-gray-900/80 md:backdrop-blur-md md:shadow-lg"
            : "border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
      }
    `}
    >
      <div className="w-full max-w-full px-6 xl:max-w-none">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <img
                src={tpc_00}
                alt="Torres Pest Control Logo"
                className={`tpc-logo h-20 w-20 rounded-full p-2 ${
                  overHero ? "bg-white/90" : ""
                }`}
              />
              <div className="tpc-banner" style={{ marginLeft: 0 }}>
                <p
                  className={`text-2xl font-bold ${
                    overHero ? "text-white" : "text-gray-900 dark:text-white"
                  }`}
                >
                  <span className={overHero ? "text-[#ff4d52]" : "text-red-600"}>
                    TORRES
                  </span>{" "}
                  <span
                    className={overHero ? "text-[#6bb3f0]" : "text-blue-600"}
                  >
                    PEST CONTROL
                  </span>
                </p>
                <p
                  className={`text-sm ${
                    overHero
                      ? "text-white/70"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                  style={{ paddingLeft: "0.25rem" }}
                >
                  Your Trusted Pest Control Specialist
                </p>
              </div>
            </a>
          </div>

          {/* Center Nav */}
          {!isMobile && (
            <nav
              className={`mx-auto hidden items-center space-x-6 md:flex ${
                overHero
                  ? "[&_.nav-link]:text-white/90 [&_.nav-link:hover]:text-white"
                  : ""
              }`}
              aria-label="Primary"
            >
              <a href="/#services" className="nav-link">
                Services
              </a>
              <a href="/about" className="nav-link">
                About
              </a>
              <a href="/certificates" className="nav-link">
                Certificates
              </a>
              <a href="/#testimonies" className="nav-link">
                Testimonies
              </a>
              <a href="/regions" className="nav-link">
                Served Regions
              </a>
              <a href="/blogs" className="nav-link">
                Blogs
              </a>
              <a href="/gallery" className="nav-link">
                Gallery
              </a>
              <a href="/#contact" className="nav-link">
                Contact
              </a>
            </nav>
          )}

          {/* Right: Social + Theme */}
          {!isMobile && (
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label={
                  theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
                }
                className={`p-2 ${overHero ? "text-white hover:bg-white/10 hover:text-white" : ""}`}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <a
                href="https://www.facebook.com/torrespestcontrolPH"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook
                  className={`h-7 w-7 transition ${
                    overHero
                      ? "text-white/90 hover:text-white"
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                />
              </a>
              <a
                href="https://www.instagram.com/torrespestcontrol_ph"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram
                  className={`h-7 w-7 transition ${
                    overHero
                      ? "text-white/90 hover:text-white"
                      : "text-pink-500 hover:text-pink-600"
                  }`}
                />
              </a>
            </div>
          )}

          {/* Mobile nav fallback */}
          {isMobile && <MobileNav isScrolled={isScrolled} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
