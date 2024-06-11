import { useNavigate } from "react-router";
import avatar from "../../assets/avatar.png";
import AvatarWithDescription from "../../components/AvatarWithDescription";
import Table from "../../components/Table/Table";
import TableRow from "../../components/Table/TableRow";

export interface User {
    address: string;
    contactNumbers: Array<string>;
    createdBy: string;
    designation: string;
    emailAddresses: Array<string>;
    id: string;
    organisation: string;
    website: string;
}

const ContactTable: React.FC = () => {
    const navigate = useNavigate();
    const alumniDataSet = [
        {
            studentId: "1",
            name: "Md. Touhidul Islam",
            jobTypes: "Private",
            position: "Software Engineer",
            Institute: "ABC Institute",
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
        },
        {
            studentId: "2",
            name: "Jane Doe",
            jobTypes: "Government",
            position: "Data Analyst",
            Institute: "XYZ University",
            location: "New York, USA",
            socialLinks: {
                github: "janeDoe",
                linkedin: "janeDoe",
                facebook: "janeDoe",
                twitter: "janeDoe",
            },
            session: "2001-2002",
            email: "jane.doe@example.com",
            phone: "+1-555-555-5555",
            liveIn: "New York, USA",
            from: "Los Angeles, USA",
        },
        {
            studentId: "3",
            name: "John Smith",
            jobTypes: "Freelance",
            position: "Web Developer",
            Institute: "DEF College",
            location: "London, UK",
            socialLinks: {
                github: "johnsmith",
                linkedin: "johnsmith",
                facebook: "johnsmith",
                twitter: "johnsmith",
            },
            session: "1999-2000",
            email: "john.smith@example.com",
            phone: "+44-20-1234-5678",
            liveIn: "London, UK",
            from: "Manchester, UK",
        },
        {
            studentId: "4",
            name: "Alice Johnson",
            jobTypes: "Private",
            position: "Project Manager",
            Institute: "GHI University",
            location: "Toronto, Canada",
            socialLinks: {
                github: "alicejohnson",
                linkedin: "alicejohnson",
                facebook: "alicejohnson",
                twitter: "alicejohnson",
            },
            session: "2002-2003",
            email: "alice.johnson@example.com",
            phone: "+1-416-555-7890",
            liveIn: "Toronto, Canada",
            from: "Vancouver, Canada",
        },
        {
            studentId: "5",
            name: "Bob Lee",
            jobTypes: "Startup",
            position: "CTO",
            Institute: "JKL Institute",
            location: "San Francisco, USA",
            socialLinks: {
                github: "boblee",
                linkedin: "boblee",
                facebook: "boblee",
                twitter: "boblee",
            },
            session: "2003-2004",
            email: "bob.lee@example.com",
            phone: "+1-650-555-1234",
            liveIn: "San Francisco, USA",
            from: "Seattle, USA",
        },
    ];

    localStorage.setItem("alumniDataSet", JSON.stringify(alumniDataSet));

    return (
        <>
            <div className="flex flex-col justify-between w-full pb-3">
                <Table
                    id={"1"}
                    tableData={[
                        "Name",
                        "Job Types",
                        "Position",
                        "Institute",
                        "Location",
                    ]}
                    customTableClass="w-full"
                >
                    {alumniDataSet.map((user) => (
                        <TableRow
                            stduentId={user.studentId}
                            name={
                                <AvatarWithDescription
                                    avatar={avatar}
                                    title={user.name}
                                    onClick={() => {
                                        navigate(
                                            `/alumnus/profile/${user.studentId}`
                                        );
                                    }}
                                />
                            }
                            jobTypes={user.jobTypes}
                            position={user.position}
                            Institute={user.Institute}
                            location={user.location}
                        />
                    ))}
                </Table>
            </div>
        </>
    );
};

export default ContactTable;
