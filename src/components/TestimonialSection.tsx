import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
  {
    name: "Ma'am Coleen",
    content:
      "Thank you sa pagsalig Ma'am Coleen... arrived to a clean and safe environment.",
    source: "Facebook Review",
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
    source: "Business Review",
  },
  {
    name: "Ma'am Theresa",
    content:
      "Clear explanations and thorough inspection. The staff was very accommodating and respectful.",
    source: "Facebook Feedback",
  },
  {
    name: "Sir Elmer",
    content:
      "They went above and beyond, even inspecting areas I didn’t think were vulnerable to pests.",
    source: "Satisfied Customer",
  },
  {
    name: "Condo Resident",
    content:
      "Safe and effective. No harsh smells, and we haven’t seen a single ant since the treatment.",
    source: "Google Review",
  },
  {
    name: "Restaurant Owner",
    content:
      "Maintaining pest-free premises is vital in my business—Torres delivers every time!",
    source: "Business Testimonial",
  },
  {
    name: "Family in Buhangin",
    content:
      "With kids in the house, safety is top priority. Thankful for their pet- and child-safe methods.",
    source: "Homeowner Feedback",
  },
  {
    name: "Ma'am Grace",
    content:
      "I love that they offer aftercare and monitoring. Talagang all-in service.",
    source: "Repeat Client",
  },
  {
    name: "Office Manager",
    content:
      "Scheduled monthly checkups really work for us. Peace of mind, always.",
    source: "Corporate Testimonial",
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
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
          What Our Clients Say
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <div className="bg-white dark:bg-gray-800 relative shadow-xl hover:shadow-2xl transition-shadow rounded-2xl px-6 py-8 max-w-xl w-full mx-2 border dark:border-gray-700">
                {/* Decorative quote icon */}
                <svg
                  className="w-8 h-8 text-gray-300 dark:text-gray-600 absolute top-6 left-6 opacity-30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V19a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7.83A5.17 5.17 0 0 0 7.17 6zM19.17 6A5.17 5.17 0 0 0 14 11.17V19a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7.83A5.17 5.17 0 0 0 19.17 6z" />
                </svg>

                <p className="text-lg text-gray-800 dark:text-gray-100 mb-4 leading-relaxed z-10 relative">
                  “{testimonial.content}”
                </p>

                <p className="text-sm font-semibold text-gray-900 dark:text-white mt-4">
                  — {testimonial.name}
                </p>

                {testimonial.source && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-1">
                    {testimonial.source}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
