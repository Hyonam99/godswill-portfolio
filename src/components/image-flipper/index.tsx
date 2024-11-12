import { useState } from "react";
import "./image-flipper.css";
import { projects } from "../../data";

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

	return (
		<div className="cards-container">
			{projects.map((project, index) => (
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
						<h2 className={`text-2xl font-semibold`}>{project.title}!</h2>
						<p
							className={`${
								hoveredIndex === index && showOverlay
									? "show-text"
									: "hide-text"
							}`}
						>
							{project.description}
						</p>
					</div>
					{/* Content of each card goes here */}
					<img src={project.imageUrl} alt={`Card ${index}`} />
				</div>
			))}
		</div>
	);
};

export default ImageCabinet;
