import { Link } from "react-router-dom";
import HeaderCard from "./cards/HeaderCard";
import { Card, CardBody, SimpleGrid } from "@chakra-ui/react";
import { BsSubstack } from "react-icons/bs";
import { FaHashnode, FaMedium } from "react-icons/fa6";

const Articles = () => {
	return (
		<div className="mb-8 md:mb-20">
			<HeaderCard
				title="Giving to the community"
				heading="Articles"
				description="Explore my insights on tech, product management, innovation and life in my writings."
			/>

			<SimpleGrid minChildWidth="260px" spacing="16px" marginTop={4}>
				<Card
					size="sm"
					bg={"#111111"}
					padding={2}
					borderRadius={8}
					className="project-card"
				>
					<CardBody
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<h2 className="text-white mb-2">Medium</h2>
						<Link
							to={"https://medium.com/@godswilludoh"}
							className="flex items-center justify-center bg-white p-2 rounded-full text-light-grey-accent text-sm mb-2"
						>
							<FaMedium color={"#747474"} size={18} />
						</Link>
					</CardBody>
				</Card>

				<Card
					size="sm"
					bg={"#111111"}
					padding={2}
					borderRadius={8}
					className="project-card"
				>
					<CardBody
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<h2 className="text-white mb-2">Hashnode</h2>
						<Link
							to={"https://hashnode.com/@godswilludoh"}
							className="flex items-center justify-center bg-white p-2 rounded-full text-light-grey-accent text-sm mb-2"
						>
							<FaHashnode color={"#747474"} size={18} />
						</Link>
					</CardBody>
				</Card>

				<Card
					size="sm"
					bg={"#111111"}
					padding={2}
					borderRadius={8}
					className="project-card"
				>
					<CardBody
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<h2 className="text-white mb-2">Substack</h2>
						<Link
							to={"https://substack.com/@godswilludoh"}
							className="flex items-center justify-center bg-white p-2 rounded-full text-light-grey-accent text-sm mb-2"
						>
							<BsSubstack color={"#747474"} size={18} />
						</Link>
					</CardBody>
				</Card>
			</SimpleGrid>
		</div>
	);
};

export default Articles;
