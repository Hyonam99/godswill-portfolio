import { useState } from "react";
import "./image-flipper.css";
import { projects } from "../../data";
import { BiWorld } from "react-icons/bi";
import { BiLogoPlayStore } from "react-icons/bi";
import { GrAppleAppStore } from "react-icons/gr";
import { Link } from "react-router-dom";

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

						<div className="flex items-center gap-2 py-3">
							{project.webLink !== "" && (
								<Link
									to={project.webLink}
									target="_blank"
									className="flex items-center gap-1"
								>
									<BiWorld size={20} color="#ffffff"/> visit
								</Link>
							)}
							{project.playStoreLink !== "" && (
								<Link to={project.playStoreLink} target="_blank">
									<BiLogoPlayStore size={20} color="#ffffff"/>
								</Link>
							)}
							{project.appleStoreLink !== "" && (
								<Link to={project.appleStoreLink} target="_blank">
									<GrAppleAppStore size={20} color="#ffffff"/>
								</Link>
							)}
						</div>
					</div>
					{/* Content of each card goes here */}
					<img src={project.imageUrl} alt={`Card ${index}`} />
				</div>
			))}
		</div>
	);
};

export default ImageCabinet;
