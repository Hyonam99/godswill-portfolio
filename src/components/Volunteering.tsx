import HeaderCard from "./cards/HeaderCard";
import { Card, CardBody, Text, SimpleGrid } from "@chakra-ui/react";

const Volunteering = () => {
	return (
		<div className="my-8">
			<HeaderCard
				title="Giving to the community"
				heading="Volunteering"
				description="Explore where I have contributed to the tech community"
			/>

			<SimpleGrid minChildWidth="300px" spacing="16px" marginTop={14}>
				<Card
					size="sm"
					bg={"#111111"}
					padding={2}
					borderRadius={8}
					className="project-card"
				>
					<CardBody>
						<h2 className="text-white mb-2">
							Tech Support Volunteer, TIIDELab
						</h2>
						<Text className="text-light-grey-accent text-sm mb-2">
							Provided technical and operational support to foster a learning
							environment for developer training initiatives.
						</Text>
					</CardBody>
				</Card>

				<Card
					size="sm"
					bg={"#111111"}
					padding={2}
					borderRadius={8}
					className="project-card"
				>
					<CardBody>
						<h2 className="text-white mb-2">
							Programs Manager, Product Buddies
						</h2>
						<Text className="text-light-grey-accent text-sm mb-2">
							Managed community resources, sessions, and activities, enabling
							knowledge sharing and professional development among members.
						</Text>
					</CardBody>
				</Card>
			</SimpleGrid>
		</div>
	);
};

export default Volunteering;
