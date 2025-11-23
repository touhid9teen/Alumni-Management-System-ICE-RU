import { ChevronRight } from "lucide-react";
import type { EventsSectionProps } from "../../types";
import EventCard from "../cards/EventCard";
import RevealOnScroll from "../RevealOnScroll";

const EventsSection: React.FC<EventsSectionProps> = ({
  events,
}): JSX.Element => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              What's Happening
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Reconnect with old friends and make new ones at our exclusive
              alumni gatherings
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event, i: number) => (
            <EventCard key={event.id} events={event} delay={i * 100} />
          ))}
        </div>

        <RevealOnScroll delay={200}>
          <div className="text-center mt-10 sm:mt-12">
            <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full font-semibold transition-all group text-sm sm:text-base">
              View All Events
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default EventsSection;
