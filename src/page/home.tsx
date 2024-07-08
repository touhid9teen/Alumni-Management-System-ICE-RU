import React from "react";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<div className="flex-grow bg-gray-100 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-5xl font-bold mb-4">
						Welcome to ICE Alumni Management
					</h1>
					<p className="mb-8">Connecting Alumni, Building Future</p>
					<Link
						to=""
						className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg"
					>
						Learn More
					</Link>
				</div>
			</div>

			{/* About Section */}
			<div className="bg-white p-8">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-4">About Us</h2>
					<p>
						The ICE Alumni Management system is designed to foster connections
						among alumni of the Institute of Computer Engineering. It serves as
						a platform for alumni to share opportunities, experiences, and
						memories.
					</p>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-gray-800 text-white p-4">
				<div className="container mx-auto text-center">
					© {new Date().getFullYear()} ICE Alumni Management. All rights
					reserved.
				</div>
			</footer>
		</div>
	);
};

export default Home;
