import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getBaseUrl } from "../../hooks/baseUrl";
import axios from "axios";
import { getFromStorage } from "../../utils/token";
import { LOCAL_STORAGE_KEYS } from "../../constants/Global";
import { toast } from "react-toastify";

interface EventData {
    id: number;
    title: string;
    event_date: string;
    start_time: string;
    location: string;
    description?: string;
    image_path: string;
}

const EventDetails: React.FC = () => {
<<<<<<< HEAD
    const [eventData, setEventData] = useState<EventData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const location = useLocation();
    const eventId = location.state?.eventId;
    const token = getFromStorage(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

    useEffect(() => {
        const fetchEventData = async () => {
            if (eventId && token) {
                try {
                    const url = getBaseUrl() + `/event/${eventId}`;
                    const response = await axios.get(url, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    setEventData(response.data.Data); // Assuming the event data is inside `Data`
                    setIsLoading(false);
                } catch (error) {
                    const errorMessage =
                        typeof error?.response?.data === "string"
                            ? error.response.data
                            : "An unexpected error occurred. Please try again.";
                    toast.error(errorMessage, {
                        autoClose: 3000,
                    });
                    setIsLoading(false);
                }
            }
        };

        fetchEventData();
    }, [eventId, token]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!eventData) {
        return <div>No event data found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {eventData.image_path && (
                    <img
                        src={eventData.image_path}
                        alt={eventData.title}
                        className="w-full h-64 object-cover"
                    />
                )}
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {eventData.title}
                    </h2>
                    <p className="text-gray-600">
                        {eventData.event_date} at {eventData.start_time}
                    </p>
                    <p className="text-gray-600">{eventData.location}</p>
                    {eventData.description && (
                        <p className="mt-4 text-gray-700">
                            {eventData.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
=======
	// const [eventdata, setEventData] = useState<object>({});
	const location = useLocation();
	const eventdata = location.state.eventData;
	// console.log(eventdata);
	const token = getFromStorage(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
	// useEffect(() => {
	// 	if (eventId) {
	// 		const fatchdataforshow = async () => {
	// 			try {
	// 				const url = getBaseUrl() + `/event/${eventId}`;
	// 				const response = await axios.get(url, {
	// 					headers: {
	// 						Authorization: `Bearer ${token}`,
	// 					},
	// 				});

	// 				console.log("Resposne", response?.data?.Data);
	// 				setEventData(response?.data?.Data);
	// 			} catch (error) {
	// 				const errorMessage =
	// 					typeof error?.response?.data === "string"
	// 						? error.response.data
	// 						: "An unexpected error occurred. Please try again.";
	// 				toast.error(errorMessage, {
	// 					autoClose: 3000,
	// 				});
	// 			}
	// 		};
	// 		fatchdataforshow();
	// 	}
	// }, []);
	return (
		<div className="max-w-4xl mx-auto p-4">
			<div className="bg-white shadow-lg rounded-lg overflow-hidden">
				<img
					src={eventdata?.eventImage}
					alt={eventdata?.title || "Event image"}
					className="w-full h-64 object-cover"
				/>
				<div className="p-6">
					<h2 className="text-2xl font-bold text-gray-800">
						{eventdata?.title}
					</h2>
					<p className="text-gray-600">
						{eventdata?.eventDate} at {eventdata?.startTime}
					</p>
					<p className="text-gray-600">{eventdata?.location}</p>
					{eventdata?.description && (
						<p className="mt-4 text-gray-700">{eventdata?.description}</p>
					)}
				</div>
			</div>
		</div>
	);
>>>>>>> 0cf3f98819055a34473e99d17fbb7ec7ff592e7b
};

export default EventDetails;
