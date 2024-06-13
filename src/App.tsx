import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
import AlumniInfoTable from "./page/dashboard/AlumniInfoTable";
import Login from "./page/auth/login";
import Signup from "./page/auth/Signup";
import AlumniProfile from "./components/AlumniProfile";
import Home from "./page/Home";
import AvatarWithDescription from "./components/AvatarWithDescription";
import avatar from "./assets/avatar.png";
import moment from 'moment';
function App(): JSX.Element {
    const now = moment();
    const timestamp = now.valueOf();
    const timestampString = timestamp.toString(); 
    const validTimestamp = Date.parse(timestampString) ? timestampString : new Date().toISOString();
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
                            <AvatarWithDescription
                                avatar={avatar}
                                title={"Mr. X"}
                                time={validTimestamp}
                                onClick={() => {}}
                            />
                        </MainLayout>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <MainLayout>
                            <AvatarWithDescription
                                avatar={avatar}
                                time={validTimestamp}
                                title={"Mr. X"}
                                onClick={() => {}}
                            />
                        </MainLayout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
