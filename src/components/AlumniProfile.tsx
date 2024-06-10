import Avarter from "../assets/avatar.png";
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaEdit,
    FaEnvelope,
    FaPhone,
    FaHome,
    FaMapMarkerAlt,
    FaBriefcase,
    FaRegClock,
} from "react-icons/fa";

interface AlumniProfileProps {
    studentId: string;
    // customAlumniProfileProps?: string;
}

const AlumniProfile: React.FC<AlumniProfileProps> = (
    props: AlumniProfileProps
) => {
    const { studentId } = props;

    const alumniData = {
        name: "Md. Touhidul Islam",
        role: "Software Engineer",
        company: "ABCD LTD",
        location: "Dhaka, Bangladesh",
        socialLinks: {
            github: "touhid",
            linkedin: "touhid",
            facebook: "touhid",
            twitter: "touhid",
        },
        session: "2000-2001",
        email: "abc@gmail.com",
        phone: "01788888222",
        liveIn: "Dhaka, Bangladesh",
        from: "Rajshahi, Bangladesh",
        previousJob: "EFGH LTD",
        profilePic: "https://www.flaticon.com/free-icon/profile_3135715",
    };

    return (
        <div
            className="items-center justify-center w-full h-full  bg-white "
            id={studentId}
        >
            <div className="flex flex-col w-full h-full gap-1 ">
                <div className="flex flex-row bg-white mx-16 mt-16 rounded p-2 items-center justify-center">
                    <img
                        src={Avarter}
                        alt={Avarter}
                        className="w-32 h-32 rounded-full border-1 border-black "
                    />

                    <div className="flex flex-col   rounded px-8 py-8">
                        <div className="flex flex-row justify-between">
                            <h2 className="flex text-2xl font-bold">
                                {alumniData.name}
                            </h2>
                            <button>
                                <div className="p-2 bg-custom-gray rounded-full">
                                    <FaEdit className="font-bold text-xl" />
                                </div>
                            </button>
                        </div>

                        <p>{alumniData.role}</p>
                        <p>{alumniData.location}</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-2 mx-16">
                    <div className="flex  flex-col justify-center items-center h-full w-full  gap-1">
                        <div className="flex flex-col items-center p-2 pl-16 bg-white rounded h-full w-full">
                            <div className="flex flex-row gap-4">
                                <FaRegClock />
                                <p className="font-bold">Session : </p>{" "}
                                <p>{alumniData.session}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-2 pl-16 bg-white rounded h-full w-full">
                            <div className="flex flex-row gap-4">
                                <FaEnvelope />
                                <p className="font-bold">Email : </p>{" "}
                                <p>{alumniData.email}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-2 pl-16 bg-white rounded h-full w-full">
                            <div className="flex flex-row gap-4">
                                <FaPhone />
                                <p className="font-bold">Phone : </p>{" "}
                                <p> {alumniData.phone}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-2 pl-16 bg-white rounded h-full w-full">
                            <div className="flex flex-row gap-4">
                                <FaHome />
                                <p className="font-bold">Live in : </p>{" "}
                                <p>{alumniData.liveIn}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-2 pl-16 bg-white rounded h-full w-full">
                            <div className="flex flex-row gap-4">
                                <FaMapMarkerAlt />
                                <p className="font-bold">From : </p>{" "}
                                <p>{alumniData.from}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-2 pl-16 bg-white rounded h-full w-full">
                            <div className="flex flex-row gap-4 ">
                                <FaBriefcase />
                                <p className="font-bold">
                                    Previous Job Information :{" "}
                                </p>{" "}
                                <p>{alumniData.previousJob}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full w-1/3 bg-white gap-2 rounded">
                        <h1 className="font-bold text-xl pb-2">Social Link</h1>
                        <div className="flex flex-row gap-4 text-xl bg-custom-gray rounded-full px-4 py-0.5">
                            <a
                                href={`https://github.com/${alumniData.socialLinks.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <FaGithub className="font-bold" />
                                <p>{alumniData.socialLinks.github}</p>
                            </a>
                        </div>
                        <div className="flex flex-row gap-4 text-xl bg-custom-gray rounded-full px-4 py-0.5">
                            <a
                                href={`https://linkedin.com/in/${alumniData.socialLinks.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <FaLinkedin className="font-bold" />
                                <p>{alumniData.socialLinks.linkedin}</p>
                            </a>
                        </div>
                        <div className="flex flex-row gap-4 text-xl bg-custom-gray rounded-full px-4 py-0.5">
                            <a
                                href={`https://facebook.com/${alumniData.socialLinks.facebook}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <FaFacebook className="font-bold" />
                                <p>{alumniData.socialLinks.facebook}</p>
                            </a>
                        </div>
                        <div className="flex flex-row gap-4 text-xl bg-custom-gray rounded-full px-4 py-0.5">
                            <a
                                href={`https://twitter.com/${alumniData.socialLinks.twitter}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <FaTwitter className="font-bold" />
                                <p>{alumniData.socialLinks.twitter}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumniProfile;
