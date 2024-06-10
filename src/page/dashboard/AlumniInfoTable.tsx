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
    const users = [
        {
            studentId: "1",
            name: "John Doe",
            jobTypes: "Privet",
            position: "Software Engineer",
            Institute: "ABC Institute",
            location: "New York",
        },
        {
            studentId: "2",
            name: "Jane Doe",
            jobTypes: "Public",
            position: "Software Engineer",
            Institute: "DEF Institute",
            location: "San Francisco",
        },
        {
            studentId: "3",
            name: "John Smith",
            jobTypes: "Public",
            position: "Software Engineer",
            Institute: "GHI Institute",
            location: "Los Angeles",
        },
        {
            studentId: "4",
            name: "Jane Smith",
            jobTypes: "Privet",
            position: "Software Engineer",
            Institute: "JKL Institute",
            location: "Chicago",
        },
        {
            studentId: "5",
            name: "John Doe",
            jobTypes: "Privet",
            position: "Software Engineer",
            Institute: "ABC Institute",
            location: "New York",
        },
        {
            studentId: "6",
            name: "Jane Doe",
            jobTypes: "Public",
            position: "Software Engineer",
            Institute: "DEF Institute",
            location: "San Francisco",
        },
        {
            studentId: "7",
            name: "John Smith",
            jobTypes: "Public",
            position: "Software Engineer",
            Institute: "GHI Institute",
            location: "Los Angeles",
        },
        {
            studentId: "8",
            name: "Jane Smith",
            jobTypes: "Privet",
            position: "Software Engineer",
            Institute: "JKL Institute",
            location: "Chicago",
        },
        {
            studentId: "9",
            name: "John Doe",
            jobTypes: "Privet",
            position: "Software Engineer",
            Institute: "ABC Institute",
            location: "New York",
        },
        {
            studentId: "10",
            name: "Jane Doe",
            jobTypes: "Public",
            position: "Software Engineer",
            Institute: "DEF Institute",
            location: "San Francisco",
        },
        {
            studentId: "11",
            name: "John Smith",
            jobTypes: "Public",
            position: "Software Engineer",
            Institute: "GHI Institute",
            location: "Los Angeles",
        },
        {
            studentId: "12",
            name: "Jane Smith",
            jobTypes: "Privet",
            position: "Software Engineer",
            Institute: "JKL Institute",
            location: "Chicago",
        },
    ];

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
                    {users.map((user) => (
                        <TableRow
                            stduentId={user.studentId}
                            name={
                                <AvatarWithDescription
                                    avatar={avatar}
                                    title={user.name}
                                    onClick={() => {
                                        navigate(
                                            "/dashboard/profile"
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
