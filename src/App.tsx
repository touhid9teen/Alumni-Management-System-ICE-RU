import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Layout.tsx/Sidebar";
import TableHeader from "./components/Table/TableHeader";

function App() {
    return (
        // <Router>
        //     {/* Your other components, including Sidebar, go here */}
        //     <Sidebar />
        // </Router>
        <TableHeader id="1" tableData={["Name", "Email", "Role", "Status"]} />
    );
}

export default App;
