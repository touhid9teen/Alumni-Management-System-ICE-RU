import { useEffect, useState } from "react";
import EventItem from "../components/Event/EventItem";
import CreateEventForm from "../components/Event/CreateEventForm";
import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../constants/Global";
import { getFromStorage } from "../utils/token";
import { getBaseUrl } from "../hooks/baseUrl";
import { toast } from "react-toastify";

const Events: React.FC = () => {
    const [createEventForm, showCreateEventForm] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [eventData, setEventData] = useState<object>({});
    const handleShowEventForm = () => {
        showCreateEventForm(!createEventForm);
    };

    const token = getFromStorage(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

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
                setEventData(response?.data?.Data);
                toast.success("Event create successful!", {
                    autoClose: 1500,
                });
            } catch (error) {
                const errorMessage =
                    typeof error?.response?.data === "string"
                        ? error.response.data
                        : "An unexpected error occurred. Please try again.";
                toast.error(errorMessage, {
                    autoClose: 3000,
                });
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);
    return (
        <div className="flex flex-col font-serif">
            <div className="flex flex-col justify-center items-center pt-10 pb-16 sm:pt-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    Upcoming Event
                </h1>
                <p className="text-xl sm:text-2xl pt-4">
                    Peek at some alumni events happening just around the corner.
                </p>
                <button
                    className="text-xl sm:text-2xl pt-4 cursor-pointer text-blue-500 underline"
                    onClick={handleShowEventForm}
                >
                    Write a Event ?
                </button>
                {createEventForm && <CreateEventForm />}
            </div>
            {eventData.length > 0 ? (
                eventData.map((event) => (
                    <EventItem
                        title={event.title}
                        date={event.event_date}
                        startTime={event.start_time}
                        location={event.location}
                        description={event.description}
                        eventImage={event.image_path}
                    />
                ))
            ) : (
                <div>No events found.</div> // Optional: Display when there are no events
            )}
        </div>
    );
};

export default Events;
