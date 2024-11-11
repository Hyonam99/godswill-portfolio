import { useState } from "react";
import "./image-flipper.css";

const ImageCabinet = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number>(0);
	const [showOverlay, setShowOverlay] = useState<boolean>(false);

	const handleMouseEnter = (index: number) => {
		setHoveredIndex(index);
		setShowOverlay(true);
	};
	const handleMouseLeave = () => {
		setHoveredIndex(0);
		setShowOverlay(false);
	};

	const cards = [1, 2, 3, 4, 5]; // Just for example, add actual content or images

	return (
		<div className="cards-container">
			{cards.map((_, index) => (
				<div
					key={index}
					className={`card ${hoveredIndex === index ? "hovered" : ""}`}
					onMouseEnter={() => handleMouseEnter(index)}
					onMouseLeave={handleMouseLeave}
				>
					<div
						className={`${
							hoveredIndex === index && showOverlay ? "overlay" : "hide"
						}`}
					>
						<h2 className={`text-2xl font-semibold`}>TribePay!</h2>
						<p
							className={`${
								hoveredIndex === index && showOverlay
									? "show-text"
									: "hide-text"
							}`}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas
							deleniti enim?
						</p>
					</div>
					{/* Content of each card goes here */}
					<img src={`/static-images/mockup-image.jpg`} alt={`Card ${index}`} />
				</div>
			))}
		</div>
	);
};

export default ImageCabinet;
