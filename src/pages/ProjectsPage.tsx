import ImageCabinet from "../components/image-flipper";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Card,
	CardBody,
	Heading,
	Text,
	CardFooter,
	IconButton,
} from "@chakra-ui/react";
import { projects } from "../data";
import { BiLogoPlayStore } from "react-icons/bi";
import { GrAppleAppStore } from "react-icons/gr";
import style from "../components/experience/experience.module.css";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
	return (
		<section>
			<div className="hidden md:block">
				<ImageCabinet />
			</div>

			<div className="block md:hidden">
				{projects.map((project, i) => (
					<Accordion
						defaultIndex={[0]}
						allowMultiple
						marginTop={4}
						className={style["accordion-container"]}
					>
						<AccordionItem paddingY={2} className={style["accordion-item"]}>
							<h2>
								<AccordionButton>
									<Box as="span" flex="1" textAlign="left">
										{project.title}
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={2}>
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
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</section>
	);
};

export default ProjectsPage;
