import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/Route";
import Button from "../../elements/Button";
import { getUserRole } from "../../utils/token";

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
  const role = getUserRole();
  return (
    <div
      className="flex py-5 gap-20 md:gap-10 bg-white shadow-md rounded-lg mb-4 relative"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <div className="relative border w-30 h-30 md:w-1/2 overflow-hidden rounded-t-lg md:rounded-none md:rounded-l-lg">
        <img
          src={eventImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Buttons overlay */}
        {showOverlay && role === "admin" && (
          <div className="flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-50 p-5 gap-2">
            <Button
              customClass="px-5 py-2 !text-black bg-han-purple hover:bg-han-purple-dark transition duration-200 rounded"
              onClick={() => {
                navigate(routes.createEvent.path, {
                  state: { eventId: id },
                });
              }}
              aria-label="Update Event"
            >
              Update
            </Button>
            <Button
              customClass="px-5 py-2 !text-black bg-red-600 hover:bg-red-700 transition duration-200 rounded"
              onClick={() => handleDelete(id)}
              aria-label="Delete Event"
            >
              Delete
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-col items-start gap-3 md:w-1/2 p-5">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-3 ">
          {title}
        </h1>
        <p className="text-md md:text-lg lg:text-xl">Event Date: {date}</p>
        <p className="text-md md:text-lg lg:text-xl">Time: {startTime}</p>
        <p className="text-md md:text-lg lg:text-xl">Location: {location}</p>

        <div className="flex flex-col md:flex-row justify-end items-center gap-5 w-full">
          <Button
            buttonType="submit"
            customClass="flex justify-center p-3 !py-4 item-center font-semibold !text-white bg-blue-400 hover:bg-blue-900 transition duration-200"
            //disabled={isLoading}
          >
            Register Now
          </Button>
          <Button
            buttonType="button" // Change to "button" for navigation
            customClass="flex justify-center p-3 !py-4 item-center font-semibold !text-white bg-blue-400 hover:bg-blue-900 transition duration-200"
            //disabled={isLoading}
            onClick={() => {
              navigate(routes.eventDetails.path.replace(":id", id.toString()), {
                state: { eventId: id },
              });
            }}
          >
            See Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
