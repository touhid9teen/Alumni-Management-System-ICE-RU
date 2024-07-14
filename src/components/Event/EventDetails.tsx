import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getBaseUrl } from "../../hooks/baseUrl";
import axios from "axios";
import { getFromStorage } from "../../utils/token";
import { LOCAL_STORAGE_KEYS } from "../../constants/Global";

const EventDetails: React.FC = () => {
    const [eventdata, setEventData] = useState<object>({});
    const location = useLocation();
    const eventId = location.state.eventId;
    const token = getFromStorage(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    useEffect(() => {
        if (eventId) {
            const fatchdataforshow = async () => {
                try {
                    const url = getBaseUrl() + `/event/${eventId}`;
                    const response = await axios.get(url, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    console.log("Resposne", response?.data?.Data);
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
            };
            fatchdataforshow();
        }
    }, []);
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                    src={eventdata?.image_path}
                    alt={eventdata?.title}
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {eventdata.title}
                    </h2>
                    <p className="text-gray-600">
                        {eventdata?.event_date} at {eventdata?.start_time}
                    </p>
                    <p className="text-gray-600">{eventdata.location}</p>
                    {eventdata.description && (
                        <p className="mt-4 text-gray-700">
                            {eventdata?.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
