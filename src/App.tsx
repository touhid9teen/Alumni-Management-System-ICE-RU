import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
import AlumniInfoTable from "./page/dashboard/AlumniInfoTable";
import Login from "./page/auth/login";
import Signup from "./page/auth/Signup";

function App(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route
                    path="/dashboard"
                    element={
                        <MainLayout>
                            <AlumniInfoTable />
                        </MainLayout>
                    }
                />
                <Route path="/" element={<Login />} />
                <Route path="/singup" element={<Signup/>} />
            </Routes>
        </Router>
    );
}

export default App;
