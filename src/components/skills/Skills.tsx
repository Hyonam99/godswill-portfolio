import { Card, CardBody, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import HeaderCard from "../cards/HeaderCard";
import { skills } from "../../data";
import { SkillsData } from "../../types";
import "./skills.css";

const Skills = () => {
	return (
		<div className="bg-grey-accent p-4 md:p-8 rounded-xl mt-8 mb-8 md:mb-20">
			<HeaderCard
				title="Proficiencies"
				titleBg="bg-stone-accent"
				heading="Skills and Tools"
				description="Explore my diverse skill set, a testament to my commitment to delivering excellence in product management."
			/>

			<SimpleGrid minChildWidth="260px" spacing="16px" marginTop={4}>
				{skills.map((skill: SkillsData, i: number) => {
					// const SkillIcon = skill.icon;

					return (
						<Card
							key={`${skill.title}-${i + 1}`}
							size="sm"
							bg={"#111111"}
							padding={2}
							borderRadius={8}
							className="skills-card"
						>
							{/* <div className="absolute right-2 top-3 flex items-center justify-center bg-white p-2 rounded-full">
								<SkillIcon color={"#747474"} size={18} />
							</div> */}
							<CardBody>
								<Heading size="sm" className="text-white mb-1">
									{" "}
									{skill.title}
								</Heading>
								<Text className="text-light-grey-accent text-sm mb-1">
									<span className="text-[#cbe3f6d5]">{skill.firstTag}: </span>{" "}
									{skill.firstDesc}
								</Text>
								<Text className="text-light-grey-accent text-sm">
									<span className="text-[#cbe3f6d5]">{skill.secondTag}: </span>
									{skill.secondDesc}
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
