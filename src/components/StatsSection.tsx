import React from "react";
import { Home, Building2, CalendarCheck2, SmilePlus } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Home className="w-10 h-10 text-green-600" />,
      label: "Homes Protected",
      value: "10,000+",
      animation: "fade-up",
    },
    {
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
      label: "Establishments Served",
      value: "2,000+",
      animation: "fade-up",
    },
    {
      icon: <CalendarCheck2 className="w-10 h-10 text-orange-500" />,
      label: "Years of Service",
      value: "15+",
      animation: "fade-up",
    },
    {
      icon: <SmilePlus className="w-10 h-10 text-yellow-500" />,
      label: "Client Satisfaction",
      value: "99%",
      animation: "fade-up",
    },
  ];

  return (
    <section className="bg-neutral-300 dark:bg-sky-950 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center"
              data-aos={stat.animation}
              data-aos-delay={idx * 100}
              data-aos-duration="700"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
