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
