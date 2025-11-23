import { Outlet } from "react-router-dom";

import Header from "./Header";
import Loader from "../Loader";
import { SESSION_STATUS } from "../../constants/Global";
import { useSession } from "../../hooks/useSession";

const PublicWrapper = () => {
	const { status } = useSession();

	if (status === SESSION_STATUS.LOADING) return <Loader />;

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default PublicWrapper;
