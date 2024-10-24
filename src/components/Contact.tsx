import { Card, CardBody, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import HeaderCard from "./cards/HeaderCard";
import { contacts } from "../data";
import { ContactData } from "../types";

const Contact = () => {
	return (
		<div className="bg-grey-accent p-8 rounded-xl my-8">
			<HeaderCard
				title="Let's Connect"
				titleBg="bg-stone-accent"
				heading="Reach out to me"
				description="Explore my diverse skill set, a testament to my commitment to delivering excellence in product management."
			/>

			<SimpleGrid minChildWidth="300px" spacing="16px" marginTop={14}>
				{contacts.map((contact: ContactData, i: number) => {
					const ContactIcon = contact.icon;

					return (
						<Card
							key={`${contact.title}-${i + 1}`}
							size="sm"
							bg={"#111111"}
							padding={2}
							borderRadius={8}
							className="skills-card"
						>
							<CardBody>
								<Heading size="sm" className="text-white">
									{" "}
									{contact.title}
								</Heading>
								<Text className="text-light-grey-accent text-sm">
									{contact.description}
								</Text>
							</CardBody>
							<div className="flex items-center justify-center bg-white p-6 rounded-full">
								<ContactIcon color={"#747474"} size={24} />
							</div>
						</Card>
					);
				})}
			</SimpleGrid>
		</div>
	);
};

export default Contact;
