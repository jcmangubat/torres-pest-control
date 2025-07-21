import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNav from "./MobileNav";
import tpc_00 from "@/assets/images/tpc_00.jpg";
import tpc_01 from "@/assets/images/tpc_01.jpg";

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
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <img
                src={tpc_00}
                alt="Torres Pest Control Logo"
                className="h-16 w-16 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  <span className="text-red-600">TORRES</span>{" "}
                  <span className="text-blue-600">PEST CONTROL</span>
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Your Trusted Pest Control Specialist
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-6">
              <a
                href="#services"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                Contact
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </nav>
          )}

          {/* <!--Mobile Navigation--> */}
          {isMobile && <MobileNav isScrolled={isScrolled} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
