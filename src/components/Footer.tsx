import { useEffect, useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import slugify from "slugify";
import { Link } from "react-router-dom";
import tpc_00 from "@/assets/images/tpc_00.jpg";

// Footer component to display company info, services, and contact details
// It fetches the grouped services from a JSON file and displays them in two columns
// along with company information and social media links.
const Footer = () => {
  const [groupedServices, setGroupedServices] = useState<
    { title: string; services: { title: string }[] }[]
  >([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/content/services/grouped-services.json");
        const data = await res.json();
        setGroupedServices(data);
      } catch {
        setGroupedServices([]);
      }
    };

    fetchServices();
  }, []);

  const midpoint = Math.ceil(groupedServices.length / 2);
  const leftGroups = groupedServices.slice(0, midpoint);
  const rightGroups = groupedServices.slice(midpoint);

  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-800 dark:text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <img
              src={tpc_00}
              alt="Torres Pest Control Logo"
              className="h-10 w-10 rounded-full mb-2"
            />
            <h3 className="text-1xl font-bold text-gray-900 dark:text-white mb-3">
              <span className="text-red-600">TORRES</span>{" "}
              <span className="text-blue-600">PEST CONTROL</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Professional pest control services in Davao with 14–15 years of
              experience.
            </p>

            {/* Business Hours */}
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Business Hours</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Mon–Sat: 8:00 AM – 6:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>

            {/* Google Maps Link */}
            <div className="mt-4">
              <a
                href="https://www.google.com/maps/place/Tugbok+Davao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Column 2: Services Left */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Services</h4>
            {leftGroups.map((group) => (
              <div key={group.title} className="mb-6">
                <h5 className="font-bold text-sm mb-2 text-gray-700 dark:text-gray-300">{group.title}</h5>
                <ul className="ml-4 list-disc text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {group.services.map((service) => (
                    <li key={service.title}>
                      <Link
                        to={`/services/${slugify(service.title, {
                          lower: true,
                          strict: true,
                        })}`}
                        className="hover:text-green-500 transition-colors"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 3: Services Right */}
          <div className="pt-10 lg:pt-0 mt-10">
            {rightGroups.map((group) => (
              <div key={group.title} className="mb-6">
                <h5 className="font-bold text-sm mb-2 text-gray-700 dark:text-gray-300">{group.title}</h5>
                <ul className="ml-4 list-disc text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {group.services.map((service) => (
                    <li key={service.title}>
                      <Link
                        to={`/services/${slugify(service.title, {
                          lower: true,
                          strict: true,
                        })}`}
                        className="hover:text-green-500 transition-colors"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 4: Contact + Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Contact</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Phone: +63 917 139 1908
              <br />
              B11A L65 Martylville Subdivision
              <br />
              San Lorenzo Purok 13 Brgy Ula,
              <br />
              Tugbok, Davao City, Davao Del Sur, Philippines
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/torrespestcontrolPH"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-blue-500 hover:text-blue-700" />
              </a>
              <a
                href="https://www.instagram.com/torrespestcontrol_ph"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-600" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-red-600 hover:text-red-700" />
              </a>
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Quick Links</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li><Link to="/about" className="hover:text-green-500">About Us</Link></li>
                <li><Link to="/about/#FAQs" className="hover:text-green-500">FAQs</Link></li>
                <li><Link to="/terms" className="hover:text-green-500">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-green-500">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Torres Pest Control. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;