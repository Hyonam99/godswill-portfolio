import { Card, CardBody, SimpleGrid } from "@chakra-ui/react";
import HeaderCard from "./cards/HeaderCard";
import { contacts } from "../data";
import { ContactData } from "../types";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<div className="bg-grey-accent p-4 md:p-8 rounded-xl mb-8 md:mb-20">
			<HeaderCard
				title="Let's Connect"
				titleBg="bg-stone-accent"
				heading="Reach out to me"
				description="Explore my diverse skill set, a testament to my commitment to delivering excellence in product management."
			/>

			<SimpleGrid minChildWidth="260px" spacing="16px" marginTop={4}>
				{contacts.map((contact: ContactData, i: number) => {
					const ContactIcon = contact.icon;

					return (
						<Card
							key={`${contact.title}-${i + 1}`}
							size="sm"
							bg={"#111111"}
							padding={2}
							borderRadius={8}
							// className="skills-card"
						>
							<CardBody
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<div>
									<h2 className="text-white"> {contact.title}</h2>
									<p className="text-light-grey-accent text-sm">
										{contact.description}
									</p>
								</div>
								<Link
									to={contact.linkUrl}
									target="_blank"
									className="flex items-center justify-center bg-white p-4 rounded-full"
								>
									<ContactIcon color={"#747474"} size={24} />
								</Link>
							</CardBody>
						</Card>
					);
				})}
			</SimpleGrid>
		</div>
	);
};

export default Contact;
