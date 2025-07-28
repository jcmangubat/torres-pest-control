import React, { useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  Facebook,
  MessageCircle,
  Building2,
  Smile,
  ThumbsUp,
  User,
  Star,
} from "lucide-react";

const autoplayInterval = 6000; // in milliseconds

const getSourceIcon = (source: string) => {
  if (source.includes("Facebook"))
    return <Facebook className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
  if (source.includes("Google"))
    return <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />;
  if (source.includes("Client"))
    return <User className="w-5 h-5 text-gray-500 dark:text-gray-300" />;
  if (source.includes("Property"))
    return <Building2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />;
  if (source.includes("Rental"))
    return <Smile className="w-5 h-5 text-green-500 dark:text-green-400" />;
  if (source.includes("New"))
    return (
      <ThumbsUp className="w-5 h-5 text-purple-500 dark:text-purple-400" />
    );
  return <MessageCircle className="w-5 h-5 text-gray-400 dark:text-gray-500" />;
};

const testimonials = [
  {
    name: "Chi Sec",
    content:
      "Thank you Torres Pest Control for a job well done. Haze Torres 👏👏👏",
    source: "Facebook Mentions",
    sourceLink: "https://www.facebook.com/share/193sKnTYJg/",
  },
  {
    name: "Ma'am Coleen",
    content:
      "Thank you sa pagsalig Ma'am Coleen... arrived to a clean and safe environment.",
    source: "Facebook Mentions",
  },
  {
    name: "Chi Sec",
    content:
      "Torres Pest Control is superb sa after sales service!!! #highlyrecommended",
    source: "Facebook Mentions",
    sourceLink: "https://www.facebook.com/share/p/1ArdVAoZdW/",
  },
  {
    name: "Buddy Añabieza Baydal",
    content:
      "With Torres Pest Control – I just got recognized as one of their top fans! 🎉",
    source: "Facebook Mentions",
    sourceLink: "https://www.facebook.com/share/p/1b1QGfPG9G/",
  },
  {
    name: "Satisfied Customer",
    content:
      "Professional service with trained professionals. Highly recommended for pest control in Davao!",
    source: "Facebook Review",
  },
  {
    name: "Mr. Aguilar",
    content:
      "Napakabilis ng response time. Within the same day, they addressed our termite problem.",
    source: "Client Feedback",
  },
  {
    name: "Business Owner, Davao City",
    content:
      "Since hiring Torres, wala nang problema sa cockroach infestations sa kitchen namin.",
    source: "Satisfied Customer",
  },
  {
    name: "Ma'am Theresa",
    content:
      "Clear explanations and thorough inspection. The staff was very accommodating and respectful.",
    source: "Client Feedback",
  },
  {
    name: "Sir Elmer",
    content:
      "They went above and beyond, even inspecting areas I didn’t think were vulnerable to pests.",
    source: "Client Feedback",
  },
  {
    name: "Condo Resident",
    content:
      "Safe and effective. No harsh smells, and we haven’t seen a single ant since the treatment.",
    source: "Client Feedback",
  },
  {
    name: "Restaurant Owner",
    content:
      "Maintaining pest-free premises is vital in my business—Torres delivers every time!",
    source: "Client Feedback",
  },
  {
    name: "Family in Buhangin",
    content:
      "With kids in the house, safety is top priority. Thankful for their pet- and child-safe methods.",
    source: "Client Feedback",
  },
  {
    name: "Ma'am Grace",
    content:
      "I love that they offer aftercare and monitoring. Talagang all-in service.",
    source: "Client Feedback",
  },
  {
    name: "Office Manager",
    content:
      "Scheduled monthly checkups really work for us. Peace of mind, always.",
    source: "Client Feedback",
  },
  {
    name: "Tenant",
    content:
      "No more mosquito issues after fogging. Definitely sleeping better!",
    source: "Rental Property Review",
  },
  {
    name: "Sir Adrian",
    content:
      "They even sealed entry points after the treatment. Very thorough.",
    source: "Client Feedback",
  },
  {
    name: "Landlady",
    content: "Affordable but quality service. Happy tenants, happy landlord.",
    source: "Property Owner Review",
  },
  {
    name: "Ma'am Lani",
    content: "Easy booking and transparent pricing. Walang hidden charges.",
    source: "New Customer",
  },
  {
    name: "Veterinary Clinic Owner",
    content:
      "We needed non-toxic solutions for our clinic—Torres understood the assignment.",
    source: "Specialty Service Feedback",
  },
  {
    name: "Apartment Owner",
    content:
      "Very responsive, even to our after-hours questions. Highly recommend!",
    source: "Landlord Review",
  },
  {
    name: "Sir Dino",
    content:
      "Second time booking. Still impressed by the professionalism and kindness.",
    source: "Returning Client",
  },
  {
    name: "Ma'am Katrina",
    content:
      "They helped us eliminate bed bugs after months of frustration. So grateful!",
    source: "Facebook Comment",
  },
  {
    name: "Davao North Homeowner",
    content:
      "They explained everything step-by-step. Very patient with our questions.",
    source: "Satisfied Customer",
  },
];

const TestimonialSection = () => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 3,
      spacing: 32,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          origin: "auto",
          perView: 1,
          spacing: 0,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          origin: "center",
          perView: 2,
          spacing: 24,
        },
      },
    },
    created(s) {
      s.slides.forEach((slide) => {
        slide.classList.add("transition-all");
      });
    },
    slideChanged(s) {
      s.slides.forEach((slide) => {
        slide.classList.remove("scale-100", "opacity-100", "z-10");
        slide.classList.add("scale-90", "opacity-50", "z-0");
      });
      const current = s.slides[s.track.details.rel];
      current.classList.remove("scale-90", "opacity-50", "z-0");
      current.classList.add("scale-100", "opacity-100", "z-10");
    },
  });

  // Autoplay
  useEffect(() => {
    if (!instanceRef) return;

    const autoplay = () => {
      timer.current = setInterval(() => {
        instanceRef.current?.next();
      }, autoplayInterval);
    };

    autoplay();

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [instanceRef]);

  return (
    <section id="testimonies" className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
          What Our Clients Say
        </h2>
        <div
          ref={sliderRef}
          className="keen-slider w-full max-w-6xl mx-auto py-16 relative"
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex justify-center transition-all transform scale-90 opacity-50"
            >
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 max-w-md w-full text-center border dark:border-gray-700">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">
                  <i>“{t.content}”</i>
                </p>
                <p className="text-md font-bold text-gray-900 dark:text-white">
                  {t.name}
                </p>
                {t.source && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic flex items-center justify-center gap-2">
                    {getSourceIcon(t.source)}
                    {t.sourceLink ? (
                      <a
                        href={t.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {t.source}
                      </a>
                    ) : (
                      <span>{t.source}</span>
                    )}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Custom arrows */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow z-10"
          >
            ‹
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow z-10"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
