import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import MainRoutes from "./routes/baseRoutes";

function App(): JSX.Element {
	return (
		<Suspense>
			<RouterProvider router={MainRoutes} />
		</Suspense>
	);
}

export default App;

{
	/* <Router>
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
							<Blog />
						</MainLayout>
					}
				/>
				<Route
					path="/home"
					element={
						<MainLayout>
							<Blog />
						</MainLayout>
					}
				/>
			</Routes>
		</Router> */
}
