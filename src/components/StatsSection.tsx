import { Home, Building2, CalendarCheck2, SmilePlus } from "lucide-react";

const stats = [
  {
    icon: <Home className="h-8 w-8 text-[#e31c23]" />,
    label: "Homes Protected",
    value: "10,000+",
  },
  {
    icon: <Building2 className="h-8 w-8 text-[#2b6cb0]" />,
    label: "Establishments Served",
    value: "2,000+",
  },
  {
    icon: <CalendarCheck2 className="h-8 w-8 text-[#e31c23]" />,
    label: "Years of Service",
    value: "15+",
  },
  {
    icon: <SmilePlus className="h-8 w-8 text-[#2b6cb0]" />,
    label: "Client Satisfaction",
    value: "99%",
  },
];

const StatsSection = () => {
  return (
    <section className="border-y border-black/5 bg-[#f4f7fb] py-10 transition-colors duration-300 dark:border-white/10 dark:bg-[#111827]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              data-aos-duration="700"
            >
              <div className="mb-3">{stat.icon}</div>
              <h3 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {stat.value}
              </h3>
              <p className="mt-1 font-body text-sm text-gray-600 dark:text-gray-400">
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
