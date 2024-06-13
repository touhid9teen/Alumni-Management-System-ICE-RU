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
import PostSummary from "./components/Blog/PostSummary";
import moment from "moment";
import photo from "./assets/AI6.jpg";
import photo1 from "./assets/AI1.jpg";
import photo2 from "./assets/AI2.jpg";
import photo3 from "./assets/AI3.jpg"
import photo4 from "./assets/AI8.jpg"
function App(): JSX.Element {
    const now = moment();
    const timestamp = now.valueOf();
    const timestampString = timestamp.toString();
    const validTimestamp = Date.parse(timestampString)
        ? timestampString
        : new Date().toISOString();
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
                {/* <Route
                    path="/"
                    element={
                        <MainLayout>
                            <AvatarWithDescription
                                avatar={avatar}
                                title={"Mr. X"}
                                time={validTimestamp}
                                onClick={() => {}}
                            />
                            <PostSummary
                                content={"Hello there..."}
                                onClick={() => {}}
                            />
                        </MainLayout>
                    }
                /> */}
                <Route
                    path="/home"
                    element={
                        <MainLayout>
                            <div className="h-1/2 w-1/2 flex flex-col ">
                                <AvatarWithDescription
                                    avatar={avatar}
                                    time={validTimestamp}
                                    title={"Mr. X"}
                                    onClick={() => {}}
                                />
                                <PostSummary
                                    content={"Hello there... Hello, Codeforces We are pleased to announce Round  Thanks to XTX Markets for supporting theinitiative! In 2024, we are holding 4 such rounds. The series results will take into account the best 3 participations out of 4. On Sunday, June 9, 2024 at 20:35UTC+6 we will host Codeforces Global Round 26.Codeforces Global Round 26 marks the second round in the 2024 series of Codeforces Global Rounds. hese rounds are open and rated for everyone."}


                                    onClick={() => {}}
                                    photo={[photo, photo1, photo2,photo3,photo4]}
                                />
                            </div>
                        </MainLayout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
