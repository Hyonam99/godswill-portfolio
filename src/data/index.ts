import { ContactData, ProjectData, SkillsData } from "../types";
import { TbListSearch } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { GrLinkedinOption } from "react-icons/gr";

const featuredProjects = [];

const projects: ProjectData[] = [
	{
		title: "Tribepay",
		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
		imageUrl: "/static-images/mockup-image.jpg",
		appLink: "",
		webLink: ""
	},
	{
		title: "Moniepoint",
		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
		imageUrl: "/static-images/mockup-image.jpg",
		appLink: "",
		webLink: ""
	},
	{
		title: "MedBot",
		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
		imageUrl: "/static-images/mockup-image.jpg",
		appLink: "",
		webLink: ""
	},
];

const skills: SkillsData[] = [
	{
		title: "Market Research",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
		icon: TbListSearch,
	},
	{
		title: "Market Research",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
		icon: TbListSearch,
	},
	{
		title: "User Research",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
		icon: TbListSearch,
	},
	{
		title: "User Research",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
		icon: TbListSearch,
	},
	{
		title: "User Research",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
		icon: TbListSearch,
	},
	{
		title: "Product Requirement Documentation",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
		icon: TbListSearch,
	},
];

const volunteering = []

const contacts: ContactData[] = [
	{
		title: "Email",
		description: "godswilludoh@gmail.com",
		icon: TfiEmail,
		linkUrl: "",
	},
	{
		title: "LinkedIn",
		description: "@godswilludoh",
		icon: GrLinkedinOption,
		linkUrl: "",
	},
	{
		title: "Twitter",
		description: "@thebeardedtechguy",
		icon: FaXTwitter,
		linkUrl: "",
	},
];

export { projects, skills, volunteering, featuredProjects, contacts };
