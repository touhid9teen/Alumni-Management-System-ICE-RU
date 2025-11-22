import {
  BookOpen,
  Calendar,
  ChevronRight,
  Facebook,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// --- Asset Imports ---
import Cover3 from "../assets/cover.jpg";
import Cover1 from "../assets/cover1.jpg";
import Cover2 from "../assets/cover2.jpg";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.jpeg";
// import RULogo from "../assets/ru_logo.png"; // Assuming you have an RU logo
import Secretary from "../assets/secretary.jpg";
import story1 from "../assets/story1.jpeg";
import story2 from "../assets/story2.jpeg";
import story3 from "../assets/story3.jpeg";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
}

const RevealOnScroll = ({ children, delay = 0 }: RevealOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const heroImages = [Cover1, Cover2, Cover3];

  const navLinks = [
    { name: "HOME", href: "", target: "_self" },
    { name: "Governance", href: "" },
    { name: "Administration", href: "" },
    { name: "IQAC", href: "" },
    { name: "Library", href: "" },
    { name: "Academic", href: "" },
    { name: "Facilities", href: "" },
    { name: "Publications", href: "" },
    { name: "Online Services", href: "" },
  ];

  const events = [
    {
      id: 1,
      title: "Annual Alumni Gala 2025",
      date: "Oct 15, 2025 - 6:00 PM",
      venue: "Grand University Hall",
      img: event1,
    },
    {
      id: 2,
      title: "Tech Innovation Summit",
      date: "Nov 02, 2025 - 10:00 AM",
      venue: "Innovation Center",
      img: event2,
    },
    {
      id: 3,
      title: "Batch of '95 Reunion",
      date: "Dec 10, 2025 - 12:00 PM",
      venue: "Campus Green Garden",
      img: event3,
    },
  ];

  const stories = [
    {
      id: 1,
      name: "Sarah Jenkins",
      batch: "Batch 2015",
      role: "CEO at TechFlow",
      text: "The university gave me the foundation to build my own company. The network here is incredible.",
      img: story1,
    },
    {
      id: 2,
      name: "David Okonjo",
      batch: "Batch 2018",
      role: "Lead Architect",
      text: "Returning to campus always feels like coming home. I found my mentors and best friends here.",
      img: story2,
    },
    {
      id: 3,
      name: "Emily Chen",
      batch: "Batch 2020",
      role: "Researcher",
      text: "The alumni scholarship fund helped me pursue my PhD. I am forever grateful to this community.",
      img: story3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // --- FIX START: Improved scroll handling ---
  useEffect(() => {
    const checkScroll = () => {
      // Use window.pageYOffset for broader browser compatibility
      // Set a threshold, e.g., 50px, after which the header changes
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", checkScroll);
    // Call once on mount to set initial state
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  // --- FIX END: Improved scroll handling ---

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className="font-sans text-gray-800 antialiased">
      {/* ================= HEADER / NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-[999] ${
          scrolled || isMenuOpen
            ? "bg-gray-800  backdrop-blur-md shadow-xl py-2"
            : "bg-gray-800  bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Header Branding / Logo */}
            <div className="flex items-center">
              <span
                className={`ml-3 text-xl sm:text-2xl font-bold transition-colors duration-300 text-white`}
              >
                ICE ALUMNI-RU
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center ">
              <ul className="flex items-center gap-1">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target={link.target || "_self"}
                      rel={
                        link.target === "_blank"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="nav-link-underline px-3 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="xl:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-[100] xl:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 sm:w-80 bg-white shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <span className="font-bold text-gray-900 text-lg">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target={link.target || "_self"}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                  >
                    <ChevronRight size={16} className="text-gray-400" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen min-h-[600px] max-h-[1000px] w-full overflow-hidden">
        {/* Background Slider */}
        {heroImages.map((img, i) => (
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

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up">
                Welcome Back to Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Alma Mater
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl animate-fade-in-up delay-100">
                Reconnect with your university community. Celebrate
                achievements, discover networking opportunities, and stay
                updated with upcoming events. Together, let's honor our legacy
                and build a stronger future.
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

        {/* Slider Dots */}
        <div className="absolute bottom-24 sm:bottom-20 right-4 sm:right-8 flex flex-col gap-2 z-20">
          {heroImages.map((_, i) => (
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

      {/* ================= SECRETARY SPEECH ================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* ========== IMAGE ========== */}
              <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
                <div className="relative max-w-[260px] sm:max-w-[300px] md:max-w-[340px] w-full">
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={Secretary}
                      alt="Secretary"
                      className="w-full h-auto object-cover aspect-[4/5] rounded-2xl"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Decorative borders */}
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border-2 border-blue-200 rounded-2xl z-0" />
                  <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full bg-blue-600/10 rounded-2xl z-0" />
                </div>
              </div>

              {/* ========== TEXT CONTENT ========== */}
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

      {/* ================= EVENTS SECTION ================= */}
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
            {events.map((event, i) => (
              <RevealOnScroll key={event.id} delay={i * 100}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                      Opens Soon
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4 flex-1">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar
                          size={16}
                          className="mr-2.5 text-blue-500 flex-shrink-0"
                        />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin
                          size={16}
                          className="mr-2.5 text-red-500 flex-shrink-0"
                        />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                    <button className="w-full py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm sm:text-base">
                      Register Now
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
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

      {/* ================= STORIES SECTION ================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Alumni Success Stories
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stories.map((story, i) => (
              <RevealOnScroll key={story.id} delay={i * 100}>
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative mt-6 sm:mt-8 h-full">
                  <div className="absolute -top-6 left-6 sm:left-8">
                    <img
                      src={story.img}
                      alt={story.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="pt-6 sm:pt-8">
                    <p className="text-gray-600 italic text-base sm:text-lg mb-5 sm:mb-6 leading-relaxed">
                      "{story.text}"
                    </p>
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                        {story.name}
                      </h4>
                      <p className="text-blue-600 font-medium text-sm sm:text-base">
                        {story.batch}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide mt-1">
                        {story.role}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATISTICS SECTION ================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
              {[
                { icon: Users, value: "25K+", label: "Total Alumni" },
                {
                  icon: GraduationCap,
                  value: "12K+",
                  label: "Current Students",
                },
                {
                  icon: BookOpen,
                  value: "850+",
                  label: "Distinguished Teachers",
                },
              ].map((stat, i) => (
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

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <GraduationCap size={28} className="text-blue-500" />
                <span className="text-xl sm:text-2xl font-bold text-white">
                  ICE RU
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Connecting graduates, fostering growth, and celebrating the
                achievements of our diverse community since 1980.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-sm">
                {[
                  "About Us",
                  "Upcoming Events",
                  "Directory",
                  "News & Updates",
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                      <ChevronRight size={14} className="text-gray-600" />{" "}
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-0.5 text-gray-500 flex-shrink-0"
                  />
                  <span>
                    123 University Avenue,
                    <br />
                    Education City, EC 54321
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-500 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-500 flex-shrink-0" />
                  <span>alumni@university.edu</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm uppercase tracking-wider">
                Newsletter
              </h4>
              <p className="text-xs text-gray-500 mb-4">
                Subscribe to get the latest updates and event invitations.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border border-gray-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors font-semibold text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} University of Rajshahi ICE Alumni
              Association. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
