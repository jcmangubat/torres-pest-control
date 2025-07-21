import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from './theme-provider';

interface MobileNavProps {
  isScrolled: boolean;
}

const MobileNav = ({ isScrolled }: MobileNavProps) => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (href: string) => {
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
          
          {/* Close button */}
          {/* <div className="absolute top-6 right-6 z-10">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setOpen(false)}
              className="text-gray-700 dark:text-gray-300"
            >
              <X className="h-6 w-6" />
            </Button>
          </div> */}
          
          {/* Centered menu content */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-8">
            <button
              onClick={() => handleNavClick('#services')}
              className="text-3xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('#about')}
              className="text-3xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('#gallery')}
              className="text-3xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-3xl font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Contact
            </button>
            
            {/* Theme toggle */}
            <div className="pt-8">
              <Button
                variant="outline"
                onClick={toggleTheme}
                className="px-6 py-3 text-lg"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 mr-2" />
                ) : (
                  <Moon className="h-5 w-5 mr-2" />
                )}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;