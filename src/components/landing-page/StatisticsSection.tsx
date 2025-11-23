import { BookOpen, GraduationCap, Users } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

const StatisticsSection: React.FC = (): JSX.Element => {
  const stats: Stat[] = [
    { icon: Users, value: "25K+", label: "Total Alumni" },
    { icon: GraduationCap, value: "12K+", label: "Current Students" },
    { icon: BookOpen, value: "850+", label: "Distinguished Teachers" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
            {stats.map((stat, i: number) => (
              <div key={i} className="p-4 sm:p-6">
                <stat.icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 text-blue-300" />
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-blue-200 uppercase tracking-widest text-xs sm:text-sm font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default StatisticsSection;
