import React, { useState } from "react";
import {
  Plus,
  Calendar,
  MapPin,
  Users,
  Award,
  ArrowRight,
  X,
  Briefcase,
  Star,
} from "lucide-react";
import {
  allSuccessPrograms,
  allUpcomingWorkshops,
} from "../data/AlumniMentorship";

export default function MentorPage() {
  const [mentorships, setMentorships] = useState<
    Array<{
      id: number;
      name: string;
      expertise: string;
      bio: string;
      contact: string;
    }>
  >([]);
  const [showForm, setShowForm] = useState(false);
  const [showMoreWorkshops, setShowMoreWorkshops] = useState(false);
  const [showMorePrograms, setShowMorePrograms] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    expertise: "",
    bio: "",
    contact: "",
  });

  const upcomingToShow = showMoreWorkshops
    ? allUpcomingWorkshops
    : allUpcomingWorkshops.slice(0, 3);
  const programsToShow = showMorePrograms
    ? allSuccessPrograms
    : allSuccessPrograms.slice(0, 3);

  const handleSubmit = () => {
    if (formData.name && formData.expertise) {
      setMentorships([...mentorships, { ...formData, id: Date.now() }]);
      setFormData({ name: "", expertise: "", bio: "", contact: "" });
      setShowForm(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Banner Header */}
      <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden ">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-transparent opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-3">Alumni Mentorship Program</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Connect with Industry Experts, Learn New Skills, and Accelerate Your
            Career Growth
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
              Explore Programs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Create Mentorship Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-8 border-l-4 border-blue-600">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-2">
                  Become a Mentor Today
                </h2>
                <p className="text-blue-700">
                  Share your expertise and guide the next generation of
                  professionals
                </p>
              </div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-7 py-4 rounded-lg hover:shadow-lg transition font-bold text-lg whitespace-nowrap"
              >
                <Plus size={22} /> Create Mentorship
              </button>
            </div>
          </div>

          {showForm && (
            <div className="bg-white border-2 border-blue-200 p-8 rounded-xl mb-8 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900">
                  Create Your Mentorship Profile
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border-2 border-blue-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 transition"
                />
                <input
                  type="text"
                  name="expertise"
                  placeholder="Area of Expertise"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  className="border-2 border-blue-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-blue-50 transition"
                />
              </div>
              <textarea
                name="bio"
                placeholder="Brief Bio (Optional)"
                value={formData.bio}
                onChange={handleInputChange}
                className="w-full border-2 border-blue-300 px-4 py-3 rounded-lg mb-4 focus:outline-none focus:border-blue-600 focus:bg-blue-50 transition"
                rows={3}
              />
              <input
                type="email"
                name="contact"
                placeholder="Contact Email"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full border-2 border-blue-300 px-4 py-3 rounded-lg mb-6 focus:outline-none focus:border-blue-600 focus:bg-blue-50 transition"
              />
              <div className="flex gap-3">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:shadow-lg transition font-bold"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-gray-100 text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-200 transition font-bold"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {mentorships.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentorships.map((mentor) => (
                <div
                  key={mentor.id}
                  className="border-2 border-blue-200 p-6 rounded-xl bg-white hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-4 flex items-center justify-center">
                    <Briefcase size={28} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-blue-700 mb-2">
                    <strong>Expertise:</strong> {mentor.expertise}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Contact:</strong> {mentor.contact || "N/A"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Upcoming Workshops */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <Calendar size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Upcoming Workshops
            </h2>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold ml-auto">
              {allUpcomingWorkshops.length} Events
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {upcomingToShow.map((workshop) => (
              <div
                key={workshop.id}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all bg-white hover:border-blue-300"
              >
                <div className="relative">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {workshop.attendees} Going
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {workshop.title}
                  </h3>
                  <div className="space-y-2 text-sm mb-4">
                    <p className="text-gray-700">
                      <strong className="text-blue-600">Mentor:</strong>{" "}
                      {workshop.mentor}
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                      <Calendar size={16} className="text-blue-600" />{" "}
                      <strong>{workshop.date}</strong>
                    </p>
                    <p className="text-gray-700">
                      <strong>Time:</strong> {workshop.time}
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                      <MapPin size={16} className="text-blue-600" />{" "}
                      <strong>{workshop.venue}</strong>
                    </p>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg hover:shadow-lg transition font-bold flex items-center justify-center gap-2">
                    Register Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {allUpcomingWorkshops.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowMoreWorkshops(!showMoreWorkshops)}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition font-bold text-lg"
              >
                {showMoreWorkshops ? "← Show Less" : "View More Workshops →"}
              </button>
            </div>
          )}
        </section>

        {/* Success Programs */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <Award size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Successful Programs & Workshops
            </h2>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold ml-auto">
              {allSuccessPrograms.length} Programs
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {programsToShow.map((program) => (
              <div
                key={program.id}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all bg-white hover:border-blue-300"
              >
                <div className="relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {program.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <p className="flex items-center gap-2 text-gray-700">
                      <Users size={18} className="text-blue-600" />{" "}
                      <span>
                        <strong>{program.completed}</strong> Alumni Completed
                      </span>
                    </p>
                    <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < Math.floor(program.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="font-bold text-gray-900">
                        {program.rating}
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
          {allSuccessPrograms.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowMorePrograms(!showMorePrograms)}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition font-bold text-lg"
              >
                {showMorePrograms ? "← Show Less" : "View More Programs →"}
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
