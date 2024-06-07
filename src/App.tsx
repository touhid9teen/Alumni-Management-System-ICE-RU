import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// ...

function App() {
    return (
        <Router>
            {/* Your other components, including Sidebar, go here */}
            <Sidebar />
        </Router>
    );
}

export default App;
