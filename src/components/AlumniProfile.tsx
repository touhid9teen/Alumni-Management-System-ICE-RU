import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoverPhoto from "../assets/coverphoto.webp"; // Assuming Cover Photo remains local
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaBriefcase,
} from "react-icons/fa";

interface Alumni {
    studentId: string;
    name: string;
    jobTypes: string;
    position: string;
    Institute: string;
    location: string;
    socialLinks: {
        github: string;
        linkedin: string;
        facebook: string;
        twitter: string;
    };
    session: string;
    email: string;
    phone: string;
    liveIn: string;
    from: string;
    bio: string; // Add the bio field
    experience: Array<{
        company: string;
        role: string;
        duration: string;
        description: string;
    }>; // Add the experience field
    profilePic: string; // New field for profile picture link
}

const AlumniProfile: React.FC = () => {
    const { studentId } = useParams<{ studentId: string }>();
    const [alumniData, setAlumniData] = useState<Alumni | null>(null);

    useEffect(() => {
        const storedData = localStorage.getItem("alumniDataSet");
        if (storedData) {
            const storedDataSet: Alumni[] = JSON.parse(storedData);
            const alumni = storedDataSet.find(
                (alumni) => alumni.studentId === studentId
            );
            setAlumniData(alumni || null);
        }
    }, [studentId]);

    if (!alumniData) {
        return <div>Alumni data not found</div>;
    }

    return (
        <div className="w-screen h-screen bg-gray-100">
            {/* Header Section with Cover Photo and Avatar */}
            <div className="relative w-full h-64 bg-cover" style={{ backgroundImage: `url(${CoverPhoto})` }}>
                <div className="absolute top-28 left-1/3 transform -translate-x-1/2 flex items-center">
                    <img
                        src={alumniData.profilePic || "defaultAvatarLink"} // Use profilePic dynamically
                        alt="Alumni Avatar"
                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                    />
                    <div className="ml-6">
                        <h1 className="text-4xl font-bold text-white">{alumniData.name}</h1>
                        <p className="text-lg text-white">{alumniData.position} at {alumniData.Institute}</p>
                        <p className="text-sm text-gray-200">{alumniData.location}</p>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 w-full max-w-6xl mx-auto">
                {/* Left Sidebar */}
                <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-lg font-bold mb-4 text-gray-700 border-b-2 border-gray-300 pb-2">Personal Information</h2>
                    <div className="flex items-center gap-2 mb-3 text-gray-600">
                        <FaBriefcase className="text-blue-500" />
                        <p className="text-gray-700">{alumniData.position}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-3 text-gray-600">
                        <FaEnvelope className="text-red-500" />
                        <p className="text-gray-700">{alumniData.email}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-3 text-gray-600">
                        <FaPhone className="text-green-500" />
                        <p className="text-gray-700">{alumniData.phone}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-3 text-gray-600">
                        <FaMapMarkerAlt className="text-yellow-500" />
                        <p className="text-gray-700">{alumniData.liveIn}</p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="w-full md:w-2/4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    {/* About Section */}
                    <h2 id="about" className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">About</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        {alumniData.bio} {/* Display biography here */}
                    </p>

                    {/* Experience Section */}
                    <h2 id="experience" className="text-2xl font-bold mt-8 mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">Experience</h2>
                    {alumniData.experience.length > 0 ? (
                        <div className="list-disc list-inside">
                            {alumniData.experience.map((exp, index) => (
                                <div key={index} className="mb-4">
                                    <p className="font-bold text-gray-800">{exp.role} at {exp.company} ({exp.duration})</p>
                                    <p className="text-gray-700">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-700">No experience details available.</p>
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-lg font-bold mb-4 text-gray-700 border-b-2 border-gray-300 pb-2">Social Links</h2>
                    <div className="flex flex-col gap-4 text-gray-600">
                        <a href={`https://github.com/${alumniData.socialLinks.github}`} target="_blank" className="flex items-center gap-2 hover:text-black transition duration-300">
                            <FaGithub className="text-gray-700 hover:text-black" />
                            <span>{alumniData.socialLinks.github}</span>
                        </a>
                        <a href={`https://linkedin.com/in/${alumniData.socialLinks.linkedin}`} target="_blank" className="flex items-center gap-2 hover:text-black transition duration-300">
                            <FaLinkedin className="text-gray-700 hover:text-blue-700" />
                            <span>{alumniData.socialLinks.linkedin}</span>
                        </a>
                        <a href={`https://facebook.com/${alumniData.socialLinks.facebook}`} target="_blank" className="flex items-center gap-2 hover:text-black transition duration-300">
                            <FaFacebook className="text-gray-700 hover:text-blue-600" />
                            <span>{alumniData.socialLinks.facebook}</span>
                        </a>
                        <a href={`https://twitter.com/${alumniData.socialLinks.twitter}`} target="_blank" className="flex items-center gap-2 hover:text-black transition duration-300">
                            <FaTwitter className="text-gray-700 hover:text-blue-400" />
                            <span>{alumniData.socialLinks.twitter}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumniProfile;




// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Avarter from "../assets/avatar.png";
// import {
//     FaGithub,
//     FaLinkedin,
//     FaFacebook,
//     FaTwitter,
//     FaEdit,
//     FaEnvelope,
//     FaPhone,
//     FaHome,
//     FaMapMarkerAlt,
//     FaBriefcase,
//     FaRegClock,
// } from "react-icons/fa";

// interface Alumni {
//     studentId: string;
//     name: string;
//     jobTypes: string;
//     position: string;
//     Institute: string;
//     location: string;
//     socialLinks: {
//         github: string;
//         linkedin: string;
//         facebook: string;
//         twitter: string;
//     };
//     session: string;
//     email: string;
//     phone: string;
//     liveIn: string;
//     from: string;
// }

// const AlumniProfile: React.FC = () => {
//     const { studentId } = useParams<{ studentId: string }>();
//     const [alumniData, setAlumniData] = useState<Alumni | null>(null);

//     useEffect(() => {
//         const storedData = localStorage.getItem("alumniDataSet");
//         if (storedData) {
//             const storedDataSet: Alumni[] = JSON.parse(storedData);
//             const alumni = storedDataSet.find(
//                 (alumni) => alumni.studentId === studentId
//             );
//             setAlumniData(alumni || null);
//         }
//     }, [studentId]);

//     if (!alumniData) {
//         return <div>Alumni data not found</div>;
//     }

//     return (
//         <div
//             className="items-center justify-center w-full h-full  bg-white "
//             id={studentId}
//         >
//             <div className="flex flex-col w-full h-full gap-1 ">
//                 <div className="flex flex-row bg-white mx-16 mt-16 rounded p-2 items-center justify-center">
//                     <img
//                         src={Avarter}
//                         alt={Avarter}
//                         className="w-32 h-32 rounded-full border-1 border-black "
//                     />

//                     <div className="flex flex-col   rounded px-8 py-8">
//                         <div className="flex flex-row justify-between">
//                             <h2 className="flex text-2xl font-bold">
//                                 {alumniData.name}
//                             </h2>
//                             <button>
//                                 <div className="p-2 bg-custom-gray rounded-full">
//                                     <FaEdit className="font-bold text-xl" />
//                                 </div>
//                             </button>
//                         </div>

//                         <p>{alumniData.position}</p>
//                         <p>{alumniData.location}</p>
//                     </div>
//                 </div>

//                 <div className="flex flex-col justify-center items-center gap-2 mx-16">
//                     <div className="flex  flex-col justify-center items-center h-full w-full  gap-1">
//                         <div className="flex flex-col items-center p-2 pl-16 bg-white rounded h-full w-full">
//                             <div className="flex flex-row gap-4">
//                                 <FaRegClock />
//                                 <p className="font-bold">Session : </p>{" "}
//                                 <p>{alumniData.session}</p>
//                             </div>
//                         </div>
//                         <div className="flex flex-col items-center p-2 pl-16 bg-white rounded h-full w-full">
//                             <div className="flex flex-row gap-4">
//                                 <FaEnvelope />
//                                 <p className="font-bold">Email : </p>{" "}
//                                 <p>{alumniData.email}</p>
//                             </div>
//                         </div>
//                         <div className="flex flex-col items-center p-2 pl-16 bg-white rounded h-full w-full">
//                             <div className="flex flex-row gap-4">
//                                 <FaPhone />
//                                 <p className="font-bold">Phone : </p>{" "}
//                                 <p> {alumniData.phone}</p>
//                             </div>
//                         </div>

//                         <div className="flex flex-col items-center p-2 pl-16 bg-white rounded h-full w-full">
//                             <div className="flex flex-row gap-4">
//                                 <FaHome />
//                                 <p className="font-bold">Live in : </p>{" "}
//                                 <p>{alumniData.liveIn}</p>
//                             </div>
//                         </div>
//                         <div className="flex flex-col items-center p-2 pl-16 bg-white rounded h-full w-full">
//                             <div className="flex flex-row gap-4">
//                                 <FaMapMarkerAlt />
//                                 <p className="font-bold">From : </p>{" "}
//                                 <p>{alumniData.from}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex flex-col items-center justify-center h-full w-1/3 bg-white gap-2 rounded">
//                         <h1 className="font-bold text-xl pb-2">Social Link</h1>
//                         <div className="flex flex-row gap-4 text-xl bg-custom-gray rounded-full px-4 py-0.5">
//                             <a
//                                 href={`https://github.com/${alumniData.socialLinks.github}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="flex items-center gap-2"
//                             >
//                                 <FaGithub className="font-bold" />
//                                 <p>{alumniData.socialLinks.github}</p>
//                             </a>
//                         </div>
//                         <div className="flex flex-row gap-4 text-xl bg-custom-gray rounded-full px-4 py-0.5">
//                             <a
//                                 href={`https://linkedin.com/in/${alumniData.socialLinks.linkedin}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="flex items-center gap-2"
//                             >
//                                 <FaLinkedin className="font-bold" />
//                                 <p>{alumniData.socialLinks.linkedin}</p>
//                             </a>
//                         </div>
//                         <div className="flex flex-row gap-4 text-xl bg-custom-gray rounded-full px-4 py-0.5">
//                             <a
//                                 href={`https://facebook.com/${alumniData.socialLinks.facebook}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="flex items-center gap-2"
//                             >
//                                 <FaFacebook className="font-bold" />
//                                 <p>{alumniData.socialLinks.facebook}</p>
//                             </a>
//                         </div>
//                         <div className="flex flex-row gap-4 text-xl bg-custom-gray rounded-full px-4 py-0.5">
//                             <a
//                                 href={`https://twitter.com/${alumniData.socialLinks.twitter}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="flex items-center gap-2"
//                             >
//                                 <FaTwitter className="font-bold" />
//                                 <p>{alumniData.socialLinks.twitter}</p>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AlumniProfile;
