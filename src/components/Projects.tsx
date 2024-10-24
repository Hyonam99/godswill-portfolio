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
	Button,
	IconButton,
} from "@chakra-ui/react";
import { BiLogoPlayStore } from "react-icons/bi";

const Projects = () => {
	return (
		<div>
			<HeaderCard
				title="Passion"
				titleBg="bg-stone-accent"
				heading="More Projects"
				description="Turning fun ideas into impact driven solutions"
			/>

			<SimpleGrid minChildWidth="300px" spacing="16px" marginTop={14}>
				{projects.map((project: ProjectData, i: number) => {

					return (
						<Card
							key={`${project.title}-${i + 1}`}
							size="sm"
							bg={"#111111"}
							padding={2}
							borderRadius={8}
							className="project-card"
						>
							<div className="flex items-center justify-center bg-white rounded-md">
								<img src={project.imageUrl} />
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
								<Button sx={{ width: "100%", marginRight: "8px" }}>View Website</Button>
								<IconButton
									aria-label="view-mobile-app"
									icon={<BiLogoPlayStore size={24} />}
								/>
							</CardFooter>
						</Card>
					);
				})}
			</SimpleGrid>
		</div>
	);
};

export default Projects;
