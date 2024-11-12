import { Link } from "react-router-dom";
import { projects } from "../data";
import { ProjectData } from "../types";
import HeaderCard from "./cards/HeaderCard";
import {
	Card,
	CardBody,
	Heading,
	Text,
	SimpleGrid,
	CardFooter,
	IconButton,
} from "@chakra-ui/react";
import { BiLogoPlayStore } from "react-icons/bi";
import { GrAppleAppStore } from "react-icons/gr";

const Projects = () => {
	return (
		<div className="mb-8 md:mb-20">
			<HeaderCard
				title="Passion"
				titleBg="bg-stone-accent"
				heading="More Projects"
				description="Turning fun ideas into impact driven solutions"
			/>

			<SimpleGrid minChildWidth="300px" spacing="16px" marginTop={4}>
				{projects.slice(2).map((project: ProjectData, i: number) => {
					return (
						<Card
							key={`${project.title}-${i + 1}`}
							size="sm"
							bg={"#111111"}
							padding={2}
							borderRadius={8}
							className="project-card"
						>
							<div className="bg-white rounded-xl h-[268px]">
								<img
									src={project.imageUrl}
									className="w-full h-[268px] rounded-xl object-cover object-center"
								/>
							</div>
							<CardBody>
								<Heading size="sm" className="text-white">
									{" "}
									{project.title}
								</Heading>
								<Text className="text-light-grey-accent text-sm">
									{project.description}
								</Text>
							</CardBody>
							<CardFooter>
								{project.webLink !== "" && (
									<Link
										to={project.webLink}
										target="_blank"
										className="w-full text-center bg-white py-2 px-5 rounded-md mr-2 hover:text-stone-accent"
									>
										View Website
									</Link>
								)}
								{project.playStoreLink !== "" && (
									<Link to={project.playStoreLink} target="_blank">
										<IconButton
											aria-label="view-mobile-app"
											icon={<BiLogoPlayStore size={24} />}
											marginRight={2}
										/>
									</Link>
								)}
								{project.appleStoreLink !== "" && (
									<Link to={project.appleStoreLink} target="_blank">
										<IconButton
											aria-label="view-mobile-app"
											icon={<GrAppleAppStore size={24} />}
										/>
									</Link>
								)}
							</CardFooter>
						</Card>
					);
				})}
			</SimpleGrid>
		</div>
	);
};

export default Projects;
