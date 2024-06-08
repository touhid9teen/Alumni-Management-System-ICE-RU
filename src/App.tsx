//import { BrowserRouter as Router } from "react-router-dom";
//import Sidebar from "./components/Layout.tsx/Sidebar";
import Table from "./components/Table/Table";
import TableRow from "./components/Table/TableRow";
function App() {
    const tableData = [
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
    ];
    return (
        // <Router>
        //     {/* Your other components, including Sidebar, go here */}
        //     <Sidebar />
        // </Router>

        <div>
            <Table
                id="1"
                tableData={[
                    "Name",
                    "Job Types",
                    "Position",
                    "Institute",
                    "Location",
                ]}
            >
                {tableData.map((data) => (
                    <TableRow 
                    id={data.id} 
                    name={data.name} 
                    jobTypes={data.jobTypes}
                    position={data.position}
                    Institute={data.Institute}
                    location={data.location}
                    />
                ))}
            </Table>
        </div>
    );
}

export default App;
