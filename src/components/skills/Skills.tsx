import {
	Card,
	CardBody,
	Heading,
	Text,
	SimpleGrid,
} from "@chakra-ui/react";
import HeaderCard from "../cards/HeaderCard";
import { skills } from "../../data";
import { SkillsData } from "../../types";
import "./skills.css"

const Skills = () => {
	return (
		<div className="bg-grey-accent p-8 rounded-xl mt-8">
			<HeaderCard
				title="Skills and Tools"
				titleBg="bg-stone-accent"
				heading="Skills"
				description="Explore my diverse skill set, a testament to my commitment to delivering excellence in product management."
			/>

			<SimpleGrid minChildWidth="300px" spacing="16px" marginTop={14}>
				{skills.map((skill: SkillsData, i: number) => {
					const SkillIcon = skill.icon;

					return (
						<Card
							key={`${skill.title}-${i + 1}`}
							size="sm"
							bg={"#111111"}
							padding={2}
							borderRadius={8}
							className="skills-card"
						>
							<div className="flex items-center justify-center bg-white p-6 rounded-md">
								<SkillIcon color={"#747474"} size={32} />
							</div>
							<CardBody>
								<Heading size="sm" className="text-white">
									{" "}
									{skill.title}
								</Heading>
								<Text className="text-light-grey-accent text-sm">
									{skill.description}
								</Text>
							</CardBody>
						</Card>
					);
				})}
			</SimpleGrid>
		</div>
	);
};

export default Skills;
