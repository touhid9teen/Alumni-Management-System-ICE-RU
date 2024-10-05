import React from "react";

interface InfoCardProps {
	members: number;
	// Add other fields as necessary
}

const InfoCard: React.FC<InfoCardProps> = ({ members }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg p-5 bg-white">
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">Alumni Organization Stats</div>
				<p className="text-gray-700 text-base">Members: {members}</p>
				{/* Add more stats here */}
			</div>
		</div>
	);
};

export default InfoCard;
