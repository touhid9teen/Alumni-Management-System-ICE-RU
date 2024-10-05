import React, { useState } from "react";
import { useNavigate } from "react-router";
import Select from "react-select";
import AvatarWithDescription from "../../components/AvatarWithDescription";
import Table from "../../components/Table/Table";
import TableRow from "../../components/Table/TableRow";
import { alumniDataSet } from "./../../data/AlumniData";

const jobTypeOptions = [
	{ value: "Private", label: "Private" },
	{ value: "Government", label: "Government" },
	{ value: "Freelance", label: "Freelance" },
	{ value: "Startup", label: "Startup" },
];

const positionOptions = [
	{ value: "Software Engineer", label: "Software Engineer" },
	{ value: "Data Analyst", label: "Data Analyst" },
	{ value: "Web Developer", label: "Web Developer" },
	{ value: "Project Manager", label: "Project Manager" },
	{ value: "CTO", label: "CTO" },
];

const locationOptions = [
	{ value: "Dhaka, Bangladesh", label: "Dhaka, Bangladesh" },
	{ value: "New York, USA", label: "New York, USA" },
	{ value: "London, UK", label: "London, UK" },
	{ value: "Toronto, Canada", label: "Toronto, Canada" },
	{ value: "San Francisco, USA", label: "San Francisco, USA" },
];

const ContactTable: React.FC = () => {
	const navigate = useNavigate();
	const [filters, setFilters] = useState({
		jobType: "",
		position: "",
		location: "",
	});

	const handleFilterChange = (selectedOption, action) => {
		setFilters({
			...filters,
			[action.name]: selectedOption ? selectedOption.value : "",
		});
	};

	return (
		<>
			<div className="flex flex-col justify-between w-full pb-3">
				<div className="flex gap-4 mb-4">
					<div style={{ width: "250px" }}>
						<label htmlFor="jobType" className="block text-sm font-medium mb-2">
							Job Type
						</label>
						<Select
							id="jobType"
							name="jobType"
							options={jobTypeOptions}
							onChange={handleFilterChange}
							className="w-full"
							placeholder="Select Job Type"
						/>
					</div>
					<div style={{ width: "250px" }}>
						<label
							htmlFor="position"
							className="block text-sm font-medium mb-2"
						>
							Position
						</label>
						<Select
							id="position"
							name="position"
							options={positionOptions}
							onChange={handleFilterChange}
							className="w-full"
							placeholder="Select Position"
						/>
					</div>
					<div style={{ width: "250px" }}>
						<label
							htmlFor="location"
							className="block text-sm font-medium mb-2"
						>
							Location
						</label>
						<Select
							id="location"
							name="location"
							options={locationOptions}
							onChange={handleFilterChange}
							className="w-full"
							placeholder="Select Location"
						/>
					</div>
					<div className="flex items-end">
						<button
							onClick={() => console.log("Searching with filters:", filters)}
							className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
						>
							Search
						</button>
					</div>
				</div>
				<Table
					id="1"
					tableData={["Name", "Job Types", "Position", "Institute", "Location"]}
					customTableClass="w-full"
				>
					{alumniDataSet.map((user) => (
						<TableRow
							key={user.studentId}
							studentId={user.studentId}
							name={
								<AvatarWithDescription
									avatar={user.profilePic}
									title={user.name}
									onClick={() =>
										navigate(`/dashboard/profile/${user.studentId}`)
									}
								/>
							}
							jobTypes={user.jobTypes}
							position={user.position}
							Institute={user.Institute}
							location={user.location}
						/>
					))}
				</Table>
			</div>
		</>
	);
};

export default ContactTable;
