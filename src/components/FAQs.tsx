import React from "react";

const faqs = [
  {
    question: "What types of pests do you handle?",
    answer:
      "We provide control services for common pests such as ants, cockroaches, termites, rodents, mosquitoes, bed bugs, and more. Specialized treatments are also available upon request.",
  },
  {
    question: "Is your pest control service safe for kids and pets?",
    answer:
      "Yes, we use eco-friendly and approved chemicals that are safe for children and pets when used as directed. We advise keeping them away during and shortly after treatment for added safety.",
  },
  {
    question: "How often should I schedule pest control?",
    answer:
      "This depends on your location and the type of pests. Generally, we recommend quarterly service to maintain a pest-free environment.",
  },
  {
    question: "Do you offer one-time services?",
    answer:
      "Yes, we provide both one-time treatments and ongoing maintenance plans tailored to your needs.",
  },
  {
    question: "How long does a typical treatment take?",
    answer:
      "Most treatments take between 30 minutes to 1 hour, depending on the size of your property and the severity of the infestation.",
  },
];

const FAQs = () => {
  return (
    <section id="FAQs" className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 transition"
            >
              <summary className="cursor-pointer text-lg font-medium text-gray-800 dark:text-white flex justify-between items-center">
                {faq.question}
                <span className="ml-2 transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
