import EventItem from "../components/Event/EventItem";

const Events: React.FC = () => {
    const Events = [
        {
            eventId: 1,
            heading: "Stanford GSB United: Annual Gathering 2024",
            date: "2024-07-04",
            startTime: "02:30 AM",
            endTime: "05:30 AM",
            location: "Good Morning Cafe & Grill Toranomon",
            eventimage:'https://via.placeholder.com/600x400?text=Event+1',
            description:
                "Join us for the annual gathering of Stanford GSB United. Connect with alumni and enjoy a delightful morning at the Good Morning Cafe & Grill Toranomon.",
        },
        {
            eventId: 2,
            heading: "Summer Tango Workshops (Foundations I)",
            date: "2024-07-04",
            startTime: "12:45 PM",
            endTime: "02:00 PM",
            location: "Oshman Family JCC, Palo Alto",
            eventimage:'https://via.placeholder.com/600x400?text=Event+2',
            description:
                "Kickstart your summer with our Tango Foundations I workshop. Perfect for beginners looking to learn the basics of Tango dancing.",
        },
        {
            eventId: 3,
            heading: "Summer Tango Workshops (Foundations II)",
            date: "2024-07-04",
            startTime: "02:45 PM",
            endTime: "04:00 PM",
            location: "Feeling Flow Studio, Palo Alto",
            eventimage:'https://via.placeholder.com/600x400?text=Event+3',
            description:
                "Continue your Tango journey with our Foundations II workshop. Designed for those who have completed the Foundations I workshop or have some Tango experience.",
        },
        {
            eventId: 4,
            heading: "Tech Innovators Meetup 2024",
            date: "2024-08-15",
            startTime: "10:00 AM",
            endTime: "12:00 PM",
            location: "Silicon Valley Conference Center",
            eventimage:'https://via.placeholder.com/600x400?text=Event+4',
            description:
                "Network with tech innovators and enthusiasts at our annual meetup. Discover the latest trends and share ideas with industry leaders.",
        },
        {
            eventId: 5,
            heading: "Annual Charity Run",
            date: "2024-09-10",
            startTime: "06:00 AM",
            endTime: "09:00 AM",
            location: "Central Park, New York",
            eventimage:'https://via.placeholder.com/600x400?text=Event+5',
            description:
                "Participate in our annual charity run to support local communities. Enjoy a morning run through Central Park and make a difference.",
        },
        {
            eventId: 6,
            heading: "Digital Marketing Workshop",
            date: "2024-10-05",
            startTime: "09:00 AM",
            endTime: "05:00 PM",
            location: "Online Event",
            eventimage:'https://via.placeholder.com/600x400?text=Event+6',
            description:
                "Join our comprehensive digital marketing workshop to enhance your skills. Learn from experts and gain practical knowledge to boost your career.",
        },
        {
            eventId: 7,
            heading: "Art & Wine Festival",
            date: "2024-11-20",
            startTime: "01:00 PM",
            endTime: "06:00 PM",
            location: "Downtown Plaza, San Francisco",
            eventimage:'https://via.placeholder.com/600x400?text=Event+7',
            description:
                "Enjoy a day of art exhibitions and wine tasting at our annual Art & Wine Festival. Meet local artists and sample fine wines from the region.",
        },
        {
            eventId: 8,
            heading: "Leadership Summit 2024",
            date: "2024-12-10",
            startTime: "08:00 AM",
            endTime: "05:00 PM",
            location: "Hilton Hotel, Los Angeles",
            eventimage:'https://via.placeholder.com/600x400?text=Event+8',
            description:
                "Attend our Leadership Summit to learn from top industry leaders. Gain insights into effective leadership strategies and network with professionals.",
        },
    ];
    return (
        <div className="flex flex-col font-serif">
            <div className="flex flex-col justify-center items-center pt-10 sm:pt-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    Upcoming Event
                </h1>
                <p className="text-xl sm:text-2xl pt-4">
                    Peek at some alumni events happening just around the corner.
                </p>
            </div>
            {Events.map((event) => (
                <EventItem
                    key={event.eventId}
                    heading={event.heading}
                    date={event.date}
                    startTime={event.startTime}
                    endTime={event.endTime}
                    eventImage={event.eventimage}
                    location={event.location}
                />
            ))}
        </div>
    );
};

export default Events;
