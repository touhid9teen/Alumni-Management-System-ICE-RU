import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import image1 from "../assets/Administration-Building.jpg";
import image2 from "../assets/wazed_mia_building.jpg";
import image3 from "../assets/dept_ice.jpg";

interface InfoCardProps {
	members: number; // You can add more properties as needed
}

const Home: React.FC = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	const images = [image1, image2, image3];
	const infoRef = useRef<HTMLDivElement>(null);

	const scrollToInfo = () => {
		infoRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const InfoCard: React.FC<InfoCardProps> = () => {
		return (
			<div
				ref={infoRef}
				className="max-w-7xl mx-auto mt-8 p-5 bg-white rounded-lg"
			>
				<h1 className="text-[44px] font-semibold text-center mb-2">
					ICE Alumni RU
				</h1>
				<p className="text-gray-700 text-[22px] text-justify">
					To meet the challenges of the fourth industrial revolution, the
					Department of Information and Communication Engineering is conducting
					curriculum enrichment and research activities in keeping with all the
					steps taken by the government to make Bangladesh a
					technology-dependent nation. In line with that, forming ICE Alumni,
					RU, is also an important effort. The ICE Alumni RU will be a
					groundbreaking platform for technical knowledge exchange by matching
					current students studying in the department with degree holders
					working in practical fields and advanced research institutes at home
					and abroad. ICE Alumni RU aims to be a non-political, non-sectarian,
					and non-profit association.
				</p>
			</div>
		);
	};

	return (
		<div className="relative font-serif">
			<Slider {...settings}>
				{images.map((src, index) => (
					<div key={index} className="relative h-[700px] w-full">
						<img
							src={src}
							alt={`Slide ${index + 1}`}
							className="h-full w-full object-cover"
						/>
						<div
							className="flex flex-col absolute inset-0 items-center justify-center bg-transparent"
							style={{ zIndex: 10 }}
						>
							<span className="text-[36px] font-semibold text-white pb-2">
								Mission & Vision of ICE Alumni
							</span>
							<button onClick={scrollToInfo}>
								<span className="bg-blue-500 text-white py-2 px-4 rounded-full text-lg">
									Read More
								</span>
							</button>
						</div>
					</div>
				))}
			</Slider>
			<InfoCard />
			{/* Footer */}
			{/* <footer className="bg-green-800 text-white p-4">
				<div className="container mx-auto text-center">
					© {new Date().getFullYear()} ICE Alumni Management. All rights
					reserved.
				</div>
			</footer> */}
		</div>
	);
};

export default Home;
