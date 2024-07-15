import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventItem from "../components/Event/EventItem";
import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../constants/Global";
import { getFromStorage } from "../utils/token";
import { getBaseUrl } from "../hooks/baseUrl";
import { toast } from "react-toastify";
import { routes } from "../constants/Route";

const Events: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [eventData, setEventData] = useState<object>({});
    const [idDeleted, setIdDeleted] = useState<number>(0);

    const token = getFromStorage(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    const navigate = useNavigate();

    const handleDelete = async (eventId: number) => {
        try {
            const url = getBaseUrl() + `/event/delete/${eventId}`;
            await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setIdDeleted((prevCount) => prevCount + 1);
        } catch (error) {
            console.log(error);
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
                setEventData(response?.data?.Data);
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
    }, [idDeleted]);
    return (
        <div className="flex flex-col font-serif">
            <div className="flex flex-col justify-center items-center pt-10 pb-16 sm:pt-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    Upcoming Event
                </h1>
                <p className="text-xl sm:text-2xl pt-4 ">
                    Peek at some alumni events happening just around the corner.
                </p>
                <button
                    className="text-xl sm:text-2xl pt-4 cursor-pointer text-blue-500 underline"
                    onClick={() => {
                        navigate(routes.createEvent.path, {
                            state: { form: "create-event" },
                        });
                    }}
                >
                    Write a Event ?
                </button>
            </div>
            {eventData.length > 0 ? (
                eventData.map((event) => (
                    <EventItem
                        id={event.id}
                        title={event.title}
                        date={event.event_date}
                        startTime={event.start_time}
                        location={event.location}
                        description={event.description}
                        eventImage={event.image_path}
                        handleDelete={handleDelete}
                    />
                ))
            ) : (
                <div>No events found.</div> // Optional: Display when there are no events
            )}
        </div>
    );
};

export default Events;
