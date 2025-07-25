import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Torres Pest Control</h3>
            <p className="text-gray-300">
              Professional pest control services in Davao with 14-15 years of
              experience.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Cockroach Control</li>
              <li>Termite Treatment</li>
              <li>Rodent Removal</li>
              <li>Dengue Fogging</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">Phone: +63 917 139 1908</p>
            <p className="text-gray-300">Service Area: Davao, Philippines</p>
            {/* Social Icons */}
            <div className="mt-8 flex justify-left items-center gap-6">
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
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Torres Pest Control. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
