import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import LocationMap from "./LocationMap";

const ContactSection = () => {
  const [propertyType, setPropertyType] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => setStatus("sent"))
      .catch(() => setStatus("error"));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <LocationMap />
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get Your Free Inspection Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Contact us for a free quotation and professional pest control
            service
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="user_name"
                ref={nameInputRef}
                placeholder="Your Name"
                className="dark:bg-gray-800 dark:border-gray-600"
              />
              <Input
                name="user_email"
                placeholder="Your Email"
                type="email"
                className="dark:bg-gray-800 dark:border-gray-600"
              />
              <Input
                name="user_phone"
                placeholder="Your Phone Number"
                type="phone"
                className="dark:bg-gray-800 dark:border-gray-600"
              />

              <select
                name="infestation_type"
                defaultValue=""
                className="w-full px-4 py-3 rounded-md border dark:bg-gray-800 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              >
                <option value="" disabled>
                  Type of Infestation (optional)
                </option>
                <option value="none">None / Just Inquiry</option>
                <option value="ants">Ants</option>
                <option value="bedbugs">Bed Bugs</option>
                <option value="Bees">
                  Bees (Nesting in structures or high-risk areas)
                </option>
                <option value="beetles">
                  Beetles (Carpet Beetles, Wood-Boring Beetles)
                </option>
                <option value="cockroaches">Cockroaches</option>
                <option value="flea">Fleas (on pets or in the home)</option>
                <option value="flies">Flies (House Flies, Fruit Flies)</option>
                <option value="mosquitoes">Mosquitoes</option>
                <option value="rodents">Rodents</option>
                <option value="spiders">Spiders (House Spiders, Webs)</option>
                <option value="termites">
                  Termites (Subterranean, Drywood)
                </option>
                <option value="ticks">Ticks (on pets or in the yard)</option>
                <option value="Wasps">Wasps (Lampinig / Paper Wasps)</option>
                <option value="others">Other Pest Problems</option>
              </select>

              {/* 🏠 Property Type Dropdown */}
              <select
                name="property_type"
                defaultValue=""
                required
                className="w-full px-4 py-3 rounded-md border dark:bg-gray-800 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              >
                <option value="" disabled>
                  What type of property you’d like us to visit for free?
                </option>

                {/* Residential */}
                <option value="residential">
                  Residential (Home, Apartment)
                </option>

                {/* Commercial / Business */}
                <option value="commercial">
                  Commercial (Shop, Storefront)
                </option>
                <option value="hospitality">Hospitality (Hotel, Resort)</option>
                <option value="warehouse">Warehouse / Storage</option>
                <option value="industrial">
                  Industrial (Factory, Manufacturing Plant)
                </option>

                {/* Agricultural */}
                <option value="agricultural">
                  Agricultural (Farm, Poultry, Fishpond)
                </option>

                {/* Medical / Education */}
                <option value="educational">
                  Educational (School, Daycare)
                </option>
                <option value="medical">
                  Medical Facility (Clinic, Hospital)
                </option>

                {/* Government / Institutional */}
                <option value="government">Government Office</option>
                <option value="religious">Religious Institution</option>
                <option value="military">Military Facility / Barracks</option>
                <option value="science-lab">Science Laboratory</option>

                {/* Maritime */}
                <option value="dock">Dock / Port Facility</option>
                <option value="boat">Boat / Ship / Vessel</option>

                {/* Other */}
                <option value="vacant">Vacant Lot / Construction Site</option>
                <option value="other">Other (Please Specify in Message)</option>
              </select>

              {/* 📅 Preferred Day to Call */}
              <select
                name="preferred_day"
                defaultValue=""
                className="w-full px-4 py-3 rounded-md border dark:bg-gray-800 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              >
                <option value="" disabled>
                  Preferred Day to Call
                </option>
                <option value="any">Any Day</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>

              {/* ⏰ Preferred Time to Call */}
              <select
                name="preferred_time"
                defaultValue=""
                className="w-full px-4 py-3 rounded-md border dark:bg-gray-800 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              >
                <option value="" disabled>
                  Preferred Time to Call
                </option>
                <option value="any">Any Time of the Day</option>
                <option value="morning">Morning (8AM – 11AM)</option>
                <option value="afternoon">Afternoon (1PM – 4PM)</option>
                <option value="evening">Evening (6PM – 8PM)</option>
                <option value="urgent">Emergency / Urgent</option>
              </select>

              {/* Conditionally show extra fields */}
              {(propertyType === "commercial" ||
                propertyType === "warehouse") && (
                <Input
                  name="business_name"
                  placeholder="Business Name"
                  className="dark:bg-gray-800 dark:border-gray-600"
                />
              )}

              {propertyType === "agricultural" && (
                <Input
                  name="farm_area"
                  placeholder="Farm Area Size (e.g. 3 hectares)"
                  className="dark:bg-gray-800 dark:border-gray-600"
                />
              )}
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={12}
                className="dark:bg-gray-800 dark:border-gray-600"
              />
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
              >
                Send Message
              </Button>

              {status === "sending" && (
                <p className="text-sm text-gray-500">Sending...</p>
              )}
              {status === "sent" && (
                <p className="text-sm text-green-600">
                  Message sent! We will reply soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Try again later.
                </p>
              )}
            </form>
          </div>
          <div>
            {/* <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <iframe
                title="Torres Pest Control Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d482.3403169200329!2d125.49535579013283!3d7.118246885181027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1753104680166!5m2!1sen!2sph"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div> */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>
                  B11A L65 Martylville Subdivision <br />
                  San Lorenzo Purok 13 Brgy Ula, <br />
                  Tugbok, Davao City, Davao Del Sur, Philippines
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  +63 917 139 1908
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  service@torrespestcontrol.ph
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  WhatsApp Available
                </span>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white"
                onClick={() => (window.location.href = "tel:+639171391908")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now for Free Inspection
              </Button>
              <Button
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-gray-800"
                onClick={() =>
                  window.open("https://wa.me/639171391908", "_blank")
                }
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
            <div className="mt-10 space-y-8">
              {/* Certifications */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Certifications
                </h4>
                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li>✔ DOH-Accredited Pest Control Provider</li>
                  <li>✔ PCO Certified Technicians</li>
                  <li>✔ 14+ Years of Local Experience</li>
                </ul>
              </div>

              {/* Operating Hours */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Operating Hours
                </h4>
                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li>Mon–Sat: 8:00 AM – 6:00 PM</li>
                  <li>Sunday: Emergency Calls Only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
