import { useEffect, useState } from "react";

interface HeroSectionProps {
  heroImages: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroImages,
}): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] w-full overflow-hidden pt-16">
      {heroImages.map((img: string, i: number) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Campus view ${i + 1}`}
            className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
              i === currentSlide ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up">
              Welcome Back to Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Alma Mater
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl animate-fade-in-up delay-100">
              Reconnect with your university community. Celebrate achievements,
              discover networking opportunities, and stay updated with upcoming
              events. Together, let's honor our legacy and build a stronger
              future.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up delay-200">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Sign In Now
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-blue-700 text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:-translate-y-0.5">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 sm:bottom-20 right-4 sm:right-8 flex flex-col gap-2 z-20">
        {heroImages.map((_: string, i: number) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all border-2 ${
              i === currentSlide
                ? "bg-blue-500 border-blue-500 scale-125"
                : "bg-transparent border-white/60 hover:border-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
