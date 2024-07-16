import { useState, useEffect } from "react";
import axios from "axios";
import { getBaseUrl } from "../hooks/baseUrl";
import { getFromStorage } from "../utils/token";
import { LOCAL_STORAGE_KEYS } from "../constants/Global";
import { toast } from "react-toastify";
import CommitteeMembers from "../components/AlumniAssocation/CommitteeMember";
import { routes } from "../constants/Route";
import { useNavigate } from "react-router-dom";

const AlumniAssociation: React.FC = () => {
    const [committeeMembers, setCommitteeMembers] = useState<object>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const Navigate = useNavigate();
    const token = getFromStorage(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const url = getBaseUrl() + "/executive-committee/list";
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCommitteeMembers(response?.data);
            } catch (error) {
                toast.error(error?.message, {
                    autoClose: 3000,
                });
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 font-serif">
            <div className="flex flex-col justify-center items-center pt-10 pb-16 sm:pt-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    Executive Committee
                </h1>
                <p className="text-xl sm:text-2xl pt-4 ">
                    ICE Alumni Association.
                </p>
                <button
                    className="text-xl sm:text-2xl pt-4 cursor-pointer text-blue-500 underline"
                    onClick={() => {
                        Navigate(
                            routes.addAlumniAssociationCommitteeMember.path
                        );
                    }}
                >
                    Add Committee Member?
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {committeeMembers.length &&
                    committeeMembers.map((member: object) => (
                        <CommitteeMembers
                            key={member.id}
                            id={member.id}
                            image={member.image}
                            role={member.role}
                            name={member.name}
                            designation={member.designation}
                        />
                    ))}
            </div>
        </div>
    );
};

export default AlumniAssociation;
