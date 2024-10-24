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
import style from "./experience.module.css"

const Experience = () => {
	return (
		<div>
			<HeaderCard
				title="Career"
				heading="Experiences"
				description="Navigating my professional journey, one role at a time"
			/>

			<Accordion
				defaultIndex={[0]}
				allowMultiple
				marginTop={14}
				className={style["accordion-container"]}
			>
				<AccordionItem paddingY={2} className={style["accordion-item"]}>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								TribeSquare
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={2}>
						<UnorderedList>
							<ListItem className="text-light-grey-accent font-normal">Lorem ipsum dolor sit amet</ListItem>
							<ListItem className="text-light-grey-accent font-normal">Lorem ipsum dolor sit amet</ListItem>
							<ListItem className="text-light-grey-accent font-normal">Lorem ipsum dolor sit amet</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>
				
				<AccordionItem paddingY={2} className={style["accordion-item"]}>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								TribeSquare
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={2}>
						<UnorderedList>
							<ListItem className="text-light-grey-accent font-normal">Lorem ipsum dolor sit amet</ListItem>
							<ListItem className="text-light-grey-accent font-normal">Lorem ipsum dolor sit amet</ListItem>
							<ListItem className="text-light-grey-accent font-normal">Lorem ipsum dolor sit amet</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default Experience;
