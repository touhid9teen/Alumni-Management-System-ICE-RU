import { createBrowserRouter } from "react-router-dom";

import PageNotFound from "../page/NotFoundPage";
import { routes } from "../constants/Route";
import PublicWrapper from "../components/Layout/PublicWrapper";
import Home from "../page/home";
import AuthWrapper from "../components/Layout/AuthWrapper";
import Login from "../page/auth/login";
import Signup from "../page/auth/Signup";
import BaseWrapper from "../components/Layout/BaseWrapper";
import Blog from "../page/Blog";
import AlumniProfile from "../components/AlumniProfile";
import MainLayout from "../layouts/MainLayout";
import AlumniAssociation from "../page/AlumniAssociation";
import Events from "../page/Events";
import CreateEventForm from "../components/Event/CreateEventForm";
import EventDetails from "../components/Event/EventDetails";
import CreateCommitteeForm from "../components/AlumniAssocation/CreateCommitteeForm";
import AuthorizationTable from "../page/AuthorizationTable";
import RequestedUserDetails from "../components/Admin/RequestedUserDetails";
import AlumniPage from "../page/dashboard/AlumniPage";
import MentorPage from "../page/Mentorship";
import AlumniSettingsPage from "../page/Setting";

const MainRoutes = createBrowserRouter([
  {
    children: [
      {
        path: routes.pageNotFound.path,
        element: <PageNotFound />,
      },
    ],
  },
  {
    element: <PublicWrapper />,
    children: [
      {
        path: routes.home.path,
        element: (
          <MainLayout>
            <Home />
          </MainLayout>
        ),
      },
      {
        path: routes.alumniAssociationCommittee.path,
        element: (
          <MainLayout>
            <AlumniAssociation />
          </MainLayout>
        ),
      },
    ],
  },
  {
    element: <AuthWrapper />,
    children: [
      {
        path: routes.login.path,
        element: <Login />,
      },
      {
        path: routes.signup.path,
        element: <Signup />,
      },
    ],
  },
  {
    element: <BaseWrapper />,
    children: [
      {
        path: routes.blog.path,
        element: (
          <MainLayout>
            <Blog />,
          </MainLayout>
        ),
      },
      {
        path: routes.alumniProfile.path,
        element: <AlumniProfile />,
      },
      {
        path: routes.alumniTableInfo.path,
        element: (
          <MainLayout>
            <AlumniPage />
          </MainLayout>
        ),
      },
      {
        path: routes.events.path,
        element: (
          <MainLayout>
            <Events />
          </MainLayout>
        ),
      },
      {
        path: routes.createEvent.path,
        element: (
          <MainLayout>
            <CreateEventForm />
          </MainLayout>
        ),
      },
      {
        path: routes.eventDetails.path,
        element: (
          <MainLayout>
            <EventDetails />
          </MainLayout>
        ),
      },
      {
        path: routes.mentorship.path,
        element: (
          <MainLayout>
            <MentorPage />
          </MainLayout>
        ),
      },
      {
        path: routes.addAlumniAssociationCommitteeMember.path,
        element: (
          <MainLayout>
            <CreateCommitteeForm />
          </MainLayout>
        ),
      },
      {
        path: routes.authorization.path,
        element: (
          <MainLayout>
            <AuthorizationTable />
          </MainLayout>
        ),
      },
      {
        path: routes.requestedUser.path,
        element: (
          <MainLayout>
            <RequestedUserDetails />
          </MainLayout>
        ),
      },
      {
        path: routes.setting.path,
        element: (
          <MainLayout>
            <AlumniSettingsPage />
          </MainLayout>
        ),
      },
    ],
  },
]);
export default MainRoutes;
