import React from "react";
import Button from "../../elements/Button";

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
        <div className="flex flex-col md:flex-row items-center justify-center py-5 border-b bg-white shadow-md rounded-lg mb-4">
            <div className="flex flex-col items-center w-full md:w-1/2">
                <img
                    src={eventImage}
                    alt={heading}
                    className="w-full h-64 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                />
            </div>

            <div className="flex flex-col items-start w-full md:w-1/2 p-5">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-3 ">
                    {heading}
                </h1>
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-2  text-gray-500">
                    <div className="flex flex-row justify-start items-center space-x-2">
                        <p className="text-md md:text-lg lg:text-xl">{date}</p>
                        <p className="text-md md:text-lg lg:text-xl">
                            {startTime}
                        </p>
                        <span className="text-md md:text-lg lg:text-xl">
                            to
                        </span>
                        <p className="text-md md:text-lg lg:text-xl">
                            {endTime}
                        </p>
                    </div>
                    <div className="flex flex-row justify-start items-center space-x-2">
                        <p className="text-md md:text-lg lg:text-xl">
                            {location}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-end items-center gap-5  w-full">
                    {/* <button
                        className="flex justify-center items-center bg-primary text-black px-2 mt-4 w-full md:w-auto h-12 font-semibold text-sm rounded"
                        type="button"
                    >
                        Register Now
                    </button>

                    <button
                        className="flex justify-center items-center bg-primary text-black px-2 mt-4 w-full md:w-auto h-12 font-semibold text-sm rounded"
                        type="button"
                    >
                        See Details
                    </button> */}
                    <Button
						buttonType="submit"
						customClass="flex justify-center p-2 item-center font-semibold text-base text-black !py-0"
						//disabled={isLoading}
					>
						Register Now
					</Button>
                    <Button
						buttonType="submit"
						customClass="flex justify-center p-2 item-center font-semibold text-base text-black !py-0"
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
