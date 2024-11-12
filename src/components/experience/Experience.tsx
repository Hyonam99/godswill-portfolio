import HeaderCard from "../cards/HeaderCard";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	ListItem,
	UnorderedList,
} from "@chakra-ui/react";
import style from "./experience.module.css";

const Experience = () => {
	return (
		<div className="mb-8 md:mb-20">
			<HeaderCard
				title="Career"
				heading="Experiences"
				description="Navigating my professional journey, one role at a time"
			/>

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
								Technical Product Manager - Inventroo
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={2}>
						<UnorderedList>
							<ListItem className="text-light-grey-accent font-normal">
								Directed end-to-end project management for Troo's product suite,
								achieving 90% on-time delivery by focusing on cross-functional
								collaboration and strategic alignment
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Oversaw the development of TrooPay, a middleware that integrates
								with multiple payment gateways, improving transactional
								efficiencies by 30% and ensuring adherence to data privacy and
								compliance standards.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Collaborated with a team of developers on data management and
								network connectivity protocols, overseeing data flow
								optimization and secure communication between systems.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Leveraged data analysis to identify areas for feature
								enhancement, enabling continuous improvement and ensuring
								alignment with client requirements.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Partnered with business development teams to lead product
								demonstrations for restaurants, cafes, and FMCG distributors,
								contributing to a 20% increase in product adoption by refining
								product features based on user feedback and market needs.
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem paddingY={2} className={style["accordion-item"]}>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Product Manager - GetPayed
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={2}>
						<UnorderedList>
							<ListItem className="text-light-grey-accent font-normal">
								Led the POS terminal integration for agency banking,
								collaborating on network protocols and security measures for
								safe data transmission.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Enhanced the Payed fintech application with user data management
								features, improving customer experience through secure,
								user-friendly design.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Improved customer satisfaction by streamlining the
								order-to-execution workflow, aligning project deliverables with
								market demands.
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem paddingY={2} className={style["accordion-item"]}>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Product Manager - TribeSquare
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={2}>
						<UnorderedList>
							<ListItem className="text-light-grey-accent font-normal">
								Developed and managed multiple fintech and e-commerce products,
								emphasizing client satisfaction and timely delivery of
								functional specifications for product enhancements.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Integrated product feedback into functional specifications and
								user requirements, ensuring products met both client needs and
								regulatory standards.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Resolved customer-reported issues efficiently, reducing
								resolution time by 80% and ensuring continuous system uptime,
								driving operational efficiency and customer satisfaction.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Gathered and analyzed customer feedback, resulting in a 25%
								increase in satisfaction ratings by implementing process
								improvements and enhancing product features.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Spearheaded the development of Vetibrae, a product designed to
								improve productivity and provide work insights for remote teams,
								driving innovation in remote workforce management.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Handled end-to-end processes, from recruitment to optimizing
								internal workflows, improving overall efficiency and ensuring
								smooth operations across the organization.
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem paddingY={2} className={style["accordion-item"]}>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Product Manager - Warehouzit
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={2}>
						<UnorderedList>
							<ListItem className="text-light-grey-accent font-normal">
								Conducted in-depth UX interviews to tailor product
								functionalities, and leveraged insights for improving user data
								handling and storage efficiency.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Utilized analytics and tracking tools to evaluate product
								performance and guide data-driven decisions for user
								engagement and retention.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Worked on the development and successful launch of Warehouzit,
								collaborating with a team of five to achieve a 20% increase in
								user adoption within the first four weeks of launch.
							</ListItem>
							<ListItem className="text-light-grey-accent font-normal">
								Implemented AARRR metric tracking using Pendo.io and Google
								Sheets, which facilitated a 25% growth in customer acquisition
								and conversion rates, aligning with data-driven
								decision-making strategies.
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default Experience;
