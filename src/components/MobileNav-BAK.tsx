import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

interface MobileNavProps {
  isScrolled: boolean;
}

const MobileNav = ({ isScrolled }: MobileNavProps) => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setOpen(false);
    const isAnchorLink = href.startsWith("#") || href.startsWith("/#");
    const hash = href.replace("/#", "#");
    const pathOnly = href.split("#")[0];

    const isOnCurrentPage = window.location.pathname === pathOnly;

    if (isAnchorLink && isOnCurrentPage) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="lg" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full h-full p-0 border-none bg-white dark:bg-gray-900"
      >
        <div className="relative w-full h-full flex flex-col">
          {/* Centered menu content */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-8">
            <button
              onClick={() => handleNavClick("/#services")}
              className="text-3xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className="text-3xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("/certificates")}
              className="text-3xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Certificates
            </button>
            <button
              onClick={() => handleNavClick("/#testimonies")}
              className="text-3xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Testimonies
            </button>
            <button
              onClick={() => handleNavClick("/regions")}
              className="text-3xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Served Regions
            </button>
            <button
              onClick={() => handleNavClick("/gallery")}
              className="text-3xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick("/#contact")}
              className="text-3xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Contact
            </button>

            <div className="pt-8 flex flex-col items-center space-y-4">
              
              {/* Social Icons */}
              <div className="flex justify-center items-center gap-6">
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
                {/* <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-7 h-7 text-red-600 hover:text-red-700 transition" />
                </a> */}
              </div>

              {/* Theme toggle */}
              <Button
                variant="outline"
                onClick={toggleTheme}
                className="px-6 py-3 text-lg"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 mr-2" />
                ) : (
                  <Moon className="h-5 w-5 mr-2" />
                )}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
