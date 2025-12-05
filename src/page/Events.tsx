import axios from "axios";
import {
  ArrowRight,
  Award,
  Calendar,
  Clock,
  Filter,
  MapPin,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EventItem from "../components/Event/EventItem";
import { LOCAL_STORAGE_KEYS } from "../constants/Global";
import { routes } from "../constants/Route";
import { getBaseUrl } from "../hooks/baseUrl";
import { getFromStorage } from "../utils/token";

interface Event {
  id: number;
  title: string;
  event_date: string;
  start_time: string;
  location: string;
  description: string;
  image_path: string;
}

interface SuccessfulEvent {
  id: number;
  title: string;
  completed: number;
  rating: number;
  image: string;
  category: string;
}

const Events: React.FC = () => {
  const [eventData, setEventData] = useState<Event[]>([]);
  const [idDeleted, setIdDeleted] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<string>("All");
  const [showMoreUpcoming, setShowMoreUpcoming] = useState<boolean>(false);
  const [showMoreSuccessful, setShowMoreSuccessful] = useState<boolean>(false);

  const token = getFromStorage(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

  const navigate = useNavigate();

  // Dummy upcoming events
  const allUpcomingEvents: Event[] = [
    {
      id: 101,
      title: "AI & Machine Learning Summit 2025",
      event_date: "2025-12-15",
      start_time: "09:00 AM",
      location: "Tech Hub - Virtual",
      description:
        "Join industry experts discussing the future of AI and machine learning innovations.",
      image_path:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
    {
      id: 102,
      title: "Career Growth Networking Session",
      event_date: "2025-12-20",
      start_time: "06:00 PM",
      location: "Alumni Center, Room 201",
      description:
        "Connect with successful alumni and explore career advancement opportunities.",
      image_path:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    },
    {
      id: 103,
      title: "Web Development Workshop",
      event_date: "2025-12-22",
      start_time: "05:00 PM",
      location: "Computer Lab Building A",
      description:
        "Hands-on workshop on modern web development using React and Node.js.",
      image_path:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
    {
      id: 104,
      title: "Data Science and Analytics Masterclass",
      event_date: "2025-12-28",
      start_time: "10:00 AM",
      location: "Virtual",
      description:
        "Learn advanced data science techniques from industry leaders.",
      image_path:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    },
    {
      id: 105,
      title: "Startup Pitching Competition",
      event_date: "2026-01-05",
      start_time: "02:00 PM",
      location: "Innovation Hub",
      description:
        "Showcase your startup ideas and compete for funding and mentorship.",
      image_path:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
    {
      id: 106,
      title: "Leadership Development Program",
      event_date: "2026-01-10",
      start_time: "04:00 PM",
      location: "Executive Suite",
      description:
        "Develop leadership skills with renowned organizational development experts.",
      image_path:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    },
  ];

  // Dummy successful/past events
  const successfulEvents: SuccessfulEvent[] = [
    {
      id: 201,
      title: "Annual Alumni Gala",
      completed: 450,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Social",
    },
    {
      id: 202,
      title: "Tech Innovation Conference 2024",
      completed: 320,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      category: "Conference",
    },
    {
      id: 203,
      title: "Professional Development Workshop",
      completed: 280,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Workshop",
    },
    {
      id: 204,
      title: "Entrepreneurship Bootcamp",
      completed: 195,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      category: "Bootcamp",
    },
    {
      id: 205,
      title: "Industry Insights: Finance & Tech",
      completed: 340,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Seminar",
    },
    {
      id: 206,
      title: "Mentorship Kick-off Event",
      completed: 560,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      category: "Networking",
    },
    {
      id: 207,
      title: "Cloud Computing Certification Course",
      completed: 220,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Course",
    },
    {
      id: 208,
      title: "Women Leaders Empowerment Summit",
      completed: 380,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      category: "Summit",
    },
  ];

  // Prepare data for display
  const upcomingToShow = showMoreUpcoming
    ? allUpcomingEvents
    : allUpcomingEvents.slice(0, 3);
  const successfulToShow = showMoreSuccessful
    ? successfulEvents
    : successfulEvents.slice(0, 3);

  const handleDelete = async (eventId: number) => {
    try {
      const url = getBaseUrl() + `/event/delete/${eventId}`;
      await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Event deleted successfully", { autoClose: 3000 });
      setIdDeleted((prevCount) => prevCount + 1);
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete event", { autoClose: 3000 });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = getBaseUrl() + "/events";
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setEventData(response.data.Data);
      } catch (error: unknown) {
        // Use dummy data if API fails
        setEventData(allUpcomingEvents);
        let errorMessage = "An unexpected error occurred. Please try again.";
        if (axios.isAxiosError(error) && error.response?.data) {
          errorMessage =
            typeof error.response.data === "string"
              ? error.response.data
              : errorMessage;
        }
        toast.error(errorMessage, {
          autoClose: 3000,
        });
      }
      setIsLoading(false);
    };
    fetchData();
  }, [idDeleted, token]);

  // Filter events based on search and month
  useEffect(() => {
    const filtered = eventData.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase());

      const eventMonth = new Date(event.event_date).getMonth();
      const matchesMonth =
        selectedMonth === "All" ||
        eventMonth.toString() === selectedMonth ||
        new Date(event.event_date) > new Date();

      return matchesSearch && matchesMonth;
    });

    setFilteredEvents(filtered);
  }, [searchTerm, selectedMonth, eventData]);

  // Get unique months from events
  const getEventMonths = () => {
    const months = eventData.map((event) =>
      new Date(event.event_date).toLocaleString("default", { month: "long" })
    );
    return ["All", ...Array.from(new Set(months))];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Banner Header */}
      <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-transparent opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-3">Upcoming Events</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Peek at some alumni events happening just around the corner.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Statistics Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <Calendar size={24} className="text-white" />
              </div>
              <h3 className="text-gray-700 font-semibold text-lg">
                Upcoming Events
              </h3>
            </div>
            <p className="text-4xl font-bold text-blue-900">
              {allUpcomingEvents.length}
            </p>
            <p className="text-sm text-gray-600 mt-2">Coming Soon</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-gray-700 font-semibold text-lg">
                Past Events
              </h3>
            </div>
            <p className="text-4xl font-bold text-blue-900">
              {successfulEvents.length}
            </p>
            <p className="text-sm text-gray-600 mt-2">Successfully Completed</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-gray-700 font-semibold text-lg">
                Total Attendees
              </h3>
            </div>
            <p className="text-4xl font-bold text-blue-900">2.5K+</p>
            <p className="text-sm text-gray-600 mt-2">Alumni Participated</p>
          </div>
        </section>

        {/* Header Section with Create Button */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-2">
                  Event Listing
                </h2>
                <p className="text-blue-700">
                  Join our community events and network with alumni
                </p>
              </div>
              <button
                onClick={() => {
                  navigate(routes.createEvent.path, {
                    state: { form: "create-event" },
                  });
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition font-semibold whitespace-nowrap"
              >
                <Plus size={20} /> Create Event
              </button>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-3 top-3.5 text-blue-600"
                />
                <input
                  type="text"
                  placeholder="Search events by title, location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border-2 border-blue-300 px-10 py-3 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div className="relative">
                <Filter
                  size={20}
                  className="absolute left-3 top-3.5 text-blue-600"
                />
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full border-2 border-blue-300 px-10 py-3 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition appearance-none bg-white"
                >
                  {getEventMonths().map((month) => (
                    <option key={month} value={month}>
                      {month === "All" ? "All Months" : month}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Showing{" "}
              <span className="font-semibold text-blue-600">
                {filteredEvents.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-blue-600">
                {eventData.length}
              </span>{" "}
              events
            </p>
          </div>
        </section>

        {/* Events List */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <Calendar size={20} className="text-white" />
            </div>
            Event Listing
          </h2>
          {isLoading ? (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-12 text-center">
              <div className="inline-block animate-spin">
                <Calendar size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mt-4 mb-2">
                Loading Events
              </h3>
              <p className="text-gray-600">
                Please wait while we fetch the latest events...
              </p>
            </div>
          ) : filteredEvents.length > 0 ? (
            <div className="space-y-6 mb-8">
              {filteredEvents.map((event: Event) => (
                <EventItem
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.event_date}
                  startTime={event.start_time}
                  location={event.location}
                  description={event.description}
                  eventImage={event.image_path}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-12 text-center mb-8">
              <Calendar size={48} className="mx-auto text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                No Events Found
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || selectedMonth !== "All"
                  ? "Try adjusting your search or filter criteria"
                  : "No events have been scheduled yet"}
              </p>
              {eventData.length === 0 && (
                <button
                  onClick={() => {
                    navigate(routes.createEvent.path, {
                      state: { form: "create-event" },
                    });
                  }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition font-semibold"
                >
                  <Plus size={20} /> Create First Event
                </button>
              )}
            </div>
          )}
        </section>

        {/* Featured Upcoming Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <Clock size={20} className="text-white" />
            </div>
            Featured Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {upcomingToShow.map((event) => (
              <div
                key={event.id}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all bg-white"
              >
                <div className="relative">
                  <img
                    src={event.image_path}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Upcoming
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm mb-4">
                    <p className="flex items-center gap-2 text-gray-700">
                      <Calendar size={16} className="text-blue-600" />
                      <strong>{event.event_date}</strong>
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                      <Clock size={16} className="text-blue-600" />
                      <strong>{event.start_time}</strong>
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                      <MapPin size={16} className="text-blue-600" />
                      <strong>{event.location}</strong>
                    </p>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg hover:shadow-lg transition font-bold flex items-center justify-center gap-2">
                    Register Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {allUpcomingEvents.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowMoreUpcoming(!showMoreUpcoming)}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition font-bold text-lg"
              >
                {showMoreUpcoming
                  ? "← Show Less"
                  : "View More Upcoming Events →"}
              </button>
            </div>
          )}
        </section>

        {/* Successful Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <Award size={20} className="text-white" />
            </div>
            Past Successful Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {successfulToShow.map((event) => (
              <div
                key={event.id}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all bg-white"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {event.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <p className="flex items-center gap-2 text-gray-700">
                      <Users size={18} className="text-blue-600" />
                      <span>
                        <strong>{event.completed}</strong> Alumni Attended
                      </span>
                    </p>
                    <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < Math.floor(event.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="font-bold text-gray-900">
                        {event.rating}
                      </span>
                      <span className="text-gray-600">/ 5.0</span>
                    </div>
                  </div>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition font-bold flex items-center justify-center gap-2">
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {successfulEvents.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowMoreSuccessful(!showMoreSuccessful)}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition font-bold text-lg"
              >
                {showMoreSuccessful ? "← Show Less" : "View More Past Events →"}
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Events;
