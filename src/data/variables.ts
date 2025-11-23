import event1 from "../assets/event1.png";
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.jpeg";

import story1 from "../assets/story1.jpeg";
import story2 from "../assets/story2.jpeg";
import story3 from "../assets/story3.jpeg";
interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  img: string;
}
interface Story {
  id: number;
  name: string;
  batch: string;
  role: string;
  img: string;
  text: string;
}
interface NavLink {
  name: string;
  href: string;
  target?: string;
}

export const navLinks: NavLink[] = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Events", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact", href: "#" },
];

export const events: Event[] = [
  {
    id: 1,
    title: "Annual Alumni Reunion 2024",
    date: "15 March 2024",
    venue: "Grand Auditorium",
    img: event1,
  },
  {
    id: 2,
    title: "Networking Breakfast Series",
    date: "22 March 2024",
    venue: "University Cafeteria",
    img: event2,
  },
  {
    id: 3,
    title: "Career Development Workshop",
    date: "29 March 2024",
    venue: "Conference Hall B",
    img: event3,
  },
];

export const stories: Story[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    batch: "Class of 2015",
    role: "Senior Software Engineer at Tech Corp",
    img: story1,
    text: "My time at the university shaped me into the professional I am today. The connections I made through alumni events have been invaluable.",
  },
  {
    id: 2,
    name: "Michael Chen",
    batch: "Class of 2018",
    role: "Entrepreneur & Startup Founder",
    img: story2,
    text: "The skills and knowledge I gained continue to help me build my business. I'm grateful for the alumni network's ongoing support.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    batch: "Class of 2016",
    role: "Marketing Director at Global Brand",
    img: story3,
    text: "Being part of this alumni community keeps me connected to my roots and motivated to give back to the university.",
  },
];
