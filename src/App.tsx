import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
import AlumniInfoTable from "./page/dashboard/AlumniInfoTable";
import Login from "./page/auth/login";
import Signup from "./page/auth/Signup";
import AlumniProfile from "./components/AlumniProfile";
import Home from "./page/Home";
import PostDetails from "./components/Blog/PostDetails";


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
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<Signup />} />
                <Route
                    path="/dashboard/profile/:studentId"
                    element={<AlumniProfile />}
                />
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <PostDetails />
                        </MainLayout>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <MainLayout>
                            <PostDetails />
                           
                        </MainLayout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
