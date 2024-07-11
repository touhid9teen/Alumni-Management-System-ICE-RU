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
import AlumniInfoTable from "../page/dashboard/AlumniInfoTable";
import AlumniAssociation from "../page/AlumniAssociation";

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
			// add public routes in this way
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
						<AlumniInfoTable />
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
]);
export default MainRoutes;
