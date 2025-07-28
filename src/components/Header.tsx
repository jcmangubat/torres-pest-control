import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNav from "./MobileNav";
import tpc_00 from "@/assets/images/tpc_00.jpg";
import tpc_01 from "@/assets/images/tpc_01.jpg";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      transition-all duration-300 border-b border-gray-200 dark:border-gray-700
      md:fixed md:top-0 md:left-0 md:right-0 md:z-50
      ${
        isScrolled
          ? "md:bg-white/80 md:dark:bg-gray-900/80 md:backdrop-blur-md md:shadow-lg"
          : "bg-white dark:bg-gray-900 shadow-sm"
      }
    `}
    >
      {/* <div className="w-full px-6 py-4 max-w-full lg:max-w-7xl xl:max-w-screen-xl"> */}
      <div className="w-full px-6 max-w-full xl:max-w-none">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <img
                src={tpc_00}
                alt="Torres Pest Control Logo"
                className="h-20- w-20 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  <span className="text-red-600">TORRES</span>{" "}
                  <span className="text-blue-600">PEST CONTROL</span>
                </h1>
                <p
                  className="text-sm text-gray-600 dark:text-gray-300"
                  style={{ paddingLeft: "0.25rem" }}
                >
                  Your Trusted Pest Control Specialist
                </p>
              </div>
            </a>
          </div>

          {/* Center Nav */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6 mx-auto">
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
                className="p-2"
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
              >
                <Facebook className="w-7 h-7 text-blue-600 hover:text-blue-800 transition" />
              </a>
              <a
                href="https://www.instagram.com/torrespestcontrol_ph"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-7 h-7 text-pink-500 hover:text-pink-600 transition" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-7 h-7 text-red-600 hover:text-red-700 transition" />
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
