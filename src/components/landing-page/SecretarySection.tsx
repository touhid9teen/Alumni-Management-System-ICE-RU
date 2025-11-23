import RevealOnScroll from "../RevealOnScroll";

interface SecretarySectionProps {
  secretaryImage: string;
}

const SecretarySection: React.FC<SecretarySectionProps> = ({
  secretaryImage,
}): JSX.Element => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
              <div className="relative max-w-[260px] sm:max-w-[300px] md:max-w-[340px] w-full">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={secretaryImage}
                    alt="Secretary"
                    className="w-full h-auto object-cover aspect-[4/5] rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border-2 border-blue-200 rounded-2xl z-0" />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full bg-blue-600/10 rounded-2xl z-0" />
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400" />
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm">
                  Secretary's Message
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Building Bridges{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Across Generations
                </span>
              </h2>
              <blockquote className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 relative">
                <span className="absolute -left-2 -top-2 text-6xl text-blue-100 font-serif">
                  "
                </span>
                <p className="relative z-10 pl-4 sm:pl-6">
                  Our alumni are the heartbeat of this university. Your
                  achievements inspire our current students, and your support
                  paves the way for future innovations. This platform is
                  designed to keep our bond strong, no matter where you are in
                  the world.
                </p>
              </blockquote>
              <div className="flex items-center gap-4 border-l-4 border-blue-600 pl-4 sm:pl-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Dr. Robert Langdon
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    General Secretary, Alumni Association
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default SecretarySection;
