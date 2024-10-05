import { useNavigate } from "react-router-dom";
import Table from "../components/Table/Table";
import TableRow from "../components/Admin/TableRow";
import { RequestUser } from "../components/Admin/RequestedUserDetails";

const requestedUser = [
	{
		name: "Elius Khan",
		studentId: "1410767201",
		graduationYear: "2019",
		role: "alumni",
		status: "pending",
		certificatesURL:
			"https://media.istockphoto.com/id/1349606247/vector/certificate-template.jpg?s=612x612&w=0&k=20&c=BWqqnPs1l6fOu4u_72gmsgCZ_zV_asBK7VjRnjNBRLQ=",
	},
	{
		name: "Khan Bahadur",
		studentId: "2010767202",
		graduationYear: "2019",
		role: "student",
		status: "pending",
		certificatesURL:
			"https://t3.ftcdn.net/jpg/02/72/40/52/240_F_272405230_QNEo0D1JYD3w7cCbFoGKeJdgJNc4zmXG.jpg",
	},
	{
		name: "Hasnat Shohag",
		studentId: "1910277133",
		graduationYear: "2024",
		role: "alumni",
		status: "pending",
		certificatesURL:
			"https://media.istockphoto.com/id/1349606247/vector/certificate-template.jpg?s=612x612&w=0&k=20&c=BWqqnPs1l6fOu4u_72gmsgCZ_zV_asBK7VjRnjNBRLQ=",
	},
];

const AuthorizationTable = () => {
	const navigate = useNavigate();

	const handleOnClick = (reqUserData: RequestUser) => {
		navigate(`/authorization/${reqUserData.studentId}`, {
			state: { reqUserData },
		});
	};

	return (
		<>
			<div className="flex flex-col justify-between w-full pb-3">
				<Table
					id={"1"}
					tableData={[
						"Name",
						"Student ID",
						"Graduation Year",
						"Role",
						"Status",
						"",
					]}
					customTableClass="w-full"
				>
					{requestedUser.map((user) => {
						return (
							<TableRow
								key={user.studentId}
								options={user}
								onClick={() => handleOnClick(user)}
							/>
						);
					})}
				</Table>
			</div>
		</>
	);
};

export default AuthorizationTable;
