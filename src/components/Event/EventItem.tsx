import React from "react";

interface EventItemProps {
    //eventId: number;
    heading: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    //description: string;
    eventImage: string; 
}

const EventItem: React.FC<EventItemProps> = (props: EventItemProps) => {
    const {
        //eventId,
        heading,
        date,
        startTime,
        endTime,
        location,
        //description,
        eventImage,
    } = props;

    return (
        <div className="flex flex-row items-center justify-center pt-5 pb-5 xs:pt-10 sm:pt-20 border-b bg-white shadow-md rounded-lg">
            <div className="flex flex-col items-center w-full xs:w-3/4 sm:w-2/4">
                <img
                    src={eventImage}
                    alt={heading}
                    className="w-full h-64 object-cover rounded-t-lg"
                />
            </div>

            <div className="flex flex-col items-start w-full xs:w-3/4 sm:w-2/4 p-5">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold leading-tight mb-3">
                    {heading}
                </h1>
                <div className="flex flex-row justify-start items-center space-x-2 xs:space-x-3 sm:space-x-4 mb-2">
                    <p className="text-lg xs:text-xl sm:text-2xl">{date}</p>
                    <p className="text-lg xs:text-xl sm:text-2xl">
                        {startTime}
                    </p>
                    <span className="text-lg xs:text-xl sm:text-2xl">to</span>
                    <p className="text-lg xs:text-xl sm:text-2xl">{endTime}</p>
                </div>
                <div className="flex flex-row justify-start items-center space-x-2 xs:space-x-3 sm:space-x-4">
                    <p className="text-lg xs:text-xl sm:text-2xl">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default EventItem;
