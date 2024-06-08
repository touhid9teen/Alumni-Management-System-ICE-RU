import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Layout.tsx/Sidebar";
import TableHeader from "./components/Table/TableHeader";
import TableRow from "./components/Table/TableRow";
function App() {
    return (
        // <Router>
        //     {/* Your other components, including Sidebar, go here */}
        //     <Sidebar />
        // </Router>
        <div>
            <TableHeader
                id="1"
                tableData={[
                    "Name",
                    "JobTypes",
                    "Position",
                    "Institute",
                    "Location",
                ]}
            />
            <TableRow
                id="1"
                name="John Doe"
                jobTypes="Privet"
                position="Software Engineer"
                Institute="ABC Institute"
                location="New York"
            />
        </div>
    );
}

export default App;
