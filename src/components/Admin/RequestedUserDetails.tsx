// src/components/RequestedUserDetails.tsx
import React from "react";
import { useLocation } from "react-router-dom";

export interface RequestUser {
	name: string;
	studentId: string;
	graduationYear: string;
	role: string;
	status: string;
	certificatesURL?: string; // Making certificatesURL optional
}

const RequestedUserDetails: React.FC = () => {
	const location = useLocation();
	const { reqUserData } = location.state as { reqUserData: RequestUser };

	if (!reqUserData) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				<p className="text-xl font-semibold">No user data available</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
			<div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
				{/* Image section */}
				{reqUserData.certificatesURL ? (
					<img
						src={reqUserData.certificatesURL}
						alt="User Certificate"
						className="w-full object-cover"
						style={{ height: "30rem" }} // Large image at the top
					/>
				) : (
					<div className="w-full h-96 bg-gray-200 flex items-center justify-center">
						<p className="text-gray-600 text-center p-4">
							No certificate available
						</p>
					</div>
				)}

				{/* User Details */}
				<div className="p-8">
					<h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
						Requested User Details
					</h1>
					<div className="space-y-4">
						<div className="flex justify-between text-lg">
							<span className="font-semibold">Name:</span>
							<span>{reqUserData.name}</span>
						</div>
						<div className="flex justify-between text-lg">
							<span className="font-semibold">ID:</span>
							<span>{reqUserData.studentId}</span>
						</div>
						<div className="flex justify-between text-lg">
							<span className="font-semibold">Graduation Year:</span>
							<span>{reqUserData.graduationYear}</span>
						</div>
						<div className="flex justify-between text-lg">
							<span className="font-semibold">Role:</span>
							<span>{reqUserData.role}</span>
						</div>
						<div
							className={`flex justify-between text-lg font-semibold ${
								reqUserData.status === "pending"
									? "text-red-500"
									: "text-green-500"
							}`}
						>
							<span>Status:</span>
							<span>{reqUserData.status}</span>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="mt-8 flex justify-center space-x-4">
						<button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
							Accept
						</button>
						<button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
							Decline
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RequestedUserDetails;
