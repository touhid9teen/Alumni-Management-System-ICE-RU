import avatar from "../../assets/avatar.png";
import AvatarWithDescription from "../../components/AvatarWithDescription";
import Table from "../../components/Table/Table";
import TableRow from "../../components/Table/TableRow";
import Button from "../../elements/Button";

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
    const users = [
        {
            id: "1",
            name: "John Doe",
            jobTypes: "Privet",
            position: "Software Engineer",
            Institute: "ABC Institute",
            location: "New York",
        },
        {
            id: "2",
            name: "Jane Doe",
            jobTypes: "Public",
            position: "Software Engineer",
            Institute: "DEF Institute",
            location: "San Francisco",
        },
        {
            id: "3",
            name: "John Smith",
            jobTypes: "Public",
            position: "Software Engineer",
            Institute: "GHI Institute",
            location: "Los Angeles",
        },
        {
            id: "4",
            name: "Jane Smith",
            jobTypes: "Privet",
            position: "Software Engineer",
            Institute: "JKL Institute",
            location: "Chicago",
        },
        {
            id: "5",
            name: "John Doe",
            jobTypes: "Privet",
            position: "Software Engineer",
            Institute: "ABC Institute",
            location: "New York",
        },
        {
            id: "6",
            name: "Jane Doe",
            jobTypes: "Public",
            position: "Software Engineer",
            Institute: "DEF Institute",
            location: "San Francisco",
        },
        {
            id: "7",
            name: "John Smith",
            jobTypes: "Public",
            position: "Software Engineer",
            Institute: "GHI Institute",
            location: "Los Angeles",
        },
        {
            id: "8",
            name: "Jane Smith",
            jobTypes: "Privet",
            position: "Software Engineer",
            Institute: "JKL Institute",
            location: "Chicago",
        },
        {
            id: "9",
            name: "John Doe",
            jobTypes: "Privet",
            position: "Software Engineer",
            Institute: "ABC Institute",
            location: "New York",
        },
        {
            id: "10",
            name: "Jane Doe",
            jobTypes: "Public",
            position: "Software Engineer",
            Institute: "DEF Institute",
            location: "San Francisco",
        },
        {
            id: "11",
            name: "John Smith",
            jobTypes: "Public",
            position: "Software Engineer",
            Institute: "GHI Institute",
            location: "Los Angeles",
        },
        {
            id: "12",
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
                            id={user.id}
                            name={
                                <AvatarWithDescription
                                    avatar={avatar}
                                    title={user.name}
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
