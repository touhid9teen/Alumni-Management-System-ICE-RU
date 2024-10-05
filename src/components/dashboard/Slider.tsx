import React, { useState, useEffect } from "react";

interface SliderProps {
	images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const next = (current + 1) % images.length;
		const id = setTimeout(() => setCurrent(next), 3000); // Change image every 3 seconds
		return () => clearTimeout(id);
	}, [current, images.length]);

	return (
		<div className="relative">
			{images.map((image, index) => (
				<img
					key={index}
					src={image}
					alt={`Slide ${index}`}
					className={`w-full h-auto transition-opacity duration-500 ease-in-out ${
						index === current ? "opacity-100" : "opacity-0"
					}`}
					style={{ position: "absolute", top: 0, left: 0 }}
				/>
			))}
			<button
				className="absolute top-1/2 left-0 bg-gray-800 text-white p-1"
				onClick={() =>
					setCurrent((current - 1 + images.length) % images.length)
				}
			>
				Prev
			</button>
			<button
				className="absolute top-1/2 right-0 bg-gray-800 text-white p-1"
				onClick={() => setCurrent((current + 1) % images.length)}
			>
				Next
			</button>
		</div>
	);
};

export default Slider;
