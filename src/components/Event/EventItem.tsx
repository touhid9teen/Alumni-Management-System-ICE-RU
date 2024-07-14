import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/Button";
import { routes } from "../../constants/Route";
import { toast } from "react-toastify";

interface EventItemProps {
    id: number;
    title: string;
    date: string;
    startTime: string;
    endTime?: string;
    location: string;
    description?: string;
    eventImage: string;
    handleDelete: (eventId: number) => void;
}

const EventItem: React.FC<EventItemProps> = (props: EventItemProps) => {
    const {
        id,
        title,
        date,
        startTime,
        location,
        // description,
        eventImage,
        handleDelete,
    } = props;

    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const navigate = useNavigate();
   
    return (
        <div
            className="flex py-5 gap-20 md:gap-10  bg-white shadow-md rounded-lg mb-4 relative"
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
        >
            {showOverlay && (
                <div className="flex flex-col items-center justify-center gap-10 absolute h-[94%] border bg-royal-indigo p-5 bg-opacity-60">
                    <Button
                        customClass="px-5 !text-black"
                        onClick={() => {
                            navigate(routes.createEvent.path, {
                                state: { eventId: id },
                            });
                        }}
                    >
                        Update
                    </Button>
                    <Button customClass="px-5 !text-black" onClick={() => handleDelete(id )}>
                        Delete
                    </Button>
                </div>
            )}
            <div className="border w-30 h-30 md:w-1/2">
                <img
                    src={eventImage}
                    alt={title}
                    className="object-cover w-[50%] rounded-t-lg md:rounded-none md:rounded-l-lg"
                />
            </div>

            <div className="flex  flex-col items-start gap-3 md:w-1/2 p-5">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-3 ">
                    {title}
                </h1>
                <p className="text-md md:text-lg lg:text-xl">
                    Event Date: {date}
                </p>
                <p className="text-md md:text-lg lg:text-xl">
                    Time: {startTime}
                </p>

                <p className="text-md md:text-lg lg:text-xl">
                    Location: {location}
                </p>

                <div className="flex flex-col md:flex-row justify-end items-center gap-5 w-full">
                    <Button
                        buttonType="submit"
                        customClass="flex justify-center p-3 !py-4 item-center font-semibold !text-textDark bg-tranquil-blue hover:bg-han-purple hover:!text-white"
                        //disabled={isLoading}
                    >
                        Register Now
                    </Button>
                    <Button
                        buttonType="submit"
                        customClass="flex justify-center p-3 !py-4 item-center font-semibold !text-textDark bg-tranquil-blue hover:bg-han-purple hover:!text-white"
                        //disabled={isLoading}
                    >
                        See Details
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EventItem;
