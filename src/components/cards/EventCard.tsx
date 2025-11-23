import { Calendar, MapPin } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

interface EventData {
  img: string;
  title: string;
  date: string;
  venue: string;
}

interface EventCardProps {
  events: EventData;
  delay?: number;
}

const EventsCard: React.FC<EventCardProps> = ({
  events,
  delay = 0,
}): JSX.Element => {
  return (
    <RevealOnScroll delay={delay}>
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={events.img}
            alt={events.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute top-4 left-4 px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
            Opens Soon
          </span>
        </div>
        <div className="p-5 sm:p-6 flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {events.title}
          </h3>
          <div className="space-y-2 mb-4 flex-1">
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar
                size={16}
                className="mr-2.5 text-blue-500 flex-shrink-0"
              />
              <span>{events.date}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin size={16} className="mr-2.5 text-red-500 flex-shrink-0" />
              <span>{events.venue}</span>
            </div>
          </div>
          <button className="w-full py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm sm:text-base">
            Register Now
          </button>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default EventsCard;
