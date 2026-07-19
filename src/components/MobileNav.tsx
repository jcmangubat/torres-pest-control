import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

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
  const handleNavClick = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full h-full p-0 border-none bg-white dark:bg-gray-900"
      >
        <div className="relative w-full h-full flex flex-col">
          <nav
            className="flex-1 flex flex-col items-center justify-center space-y-8 px-8"
            aria-label="Mobile"
          >
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
              onClick={() => handleNavClick("/blogs")}
              className="text-3xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Blogs
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
              <div className="flex justify-center items-center gap-6">
                <a
                  href="https://www.facebook.com/torrespestcontrolPH"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-7 h-7 text-blue-600 hover:text-blue-800 transition" />
                </a>
                <a
                  href="https://www.instagram.com/torrespestcontrol_ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7 text-pink-500 hover:text-pink-600 transition" />
                </a>
              </div>

              <Button
                variant="outline"
                onClick={toggleTheme}
                className="px-6 py-3 text-lg"
                aria-label={
                  theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 mr-2" />
                ) : (
                  <Moon className="h-5 w-5 mr-2" />
                )}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
