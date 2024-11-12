import { ContactData, ProjectData, SkillsData } from "../types";
import { TbListSearch } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { GrLinkedinOption } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const featuredProjects = [];

const projects: ProjectData[] = [
	{
		title: "Troo",
		description: "Restaurant Management Software for Hospitality Businesses",
		imageUrl: "/static-images/troo.png",
		appleStoreLink: "",
		playStoreLink: "",
		webLink: "https://www.troohq.com/",
	},
	{
		title: "Kurenode",
		description:
			"Health insurance software application aimed at enhancing healthcare delivery for patients and operational efficiency for healthcare providers",
		imageUrl: "/static-images/kurenode.png",
		appleStoreLink: "",
		playStoreLink: "",
		webLink: "https://kurenode.com/",
	},
	{
		title: "Warehouzit",
		description:
			"Warehouzit is an online marketplace designed to streamline connections between warehouse owners and those seeking warehouse spaces. The platform addresses challenges in warehouse management by enhancing user experience, facilitating efficient transactions, and bridging the gap between warehouse supply and demand.",
		imageUrl: "/static-images/warehouzit.png",
		appleStoreLink: "",
		playStoreLink: "",
		webLink: "https://warehouzit.net/",
	},
	{
		title: "Justrite",
		description:
			"Justrite's mobile app brings the supermarket’s extensive catalog directly to users' devices, enhancing convenience with features like streamlined navigation, secure payment integration, and personalized shopping experiences. It allows customers to browse products, place orders, and access exclusive deals, aiming to replicate the comprehensive in-store experience. The app supports the brand's commitment to customer convenience and aims to boost engagement by offering a seamless digital shopping experience.",
		imageUrl: "/static-images/justrite.png",
		appleStoreLink: "",
		playStoreLink: "https://play.google.com/store/apps/details?id=com.justrite",
		webLink: "",
	},
	{
		title: "Payed",
		description:
			"The Payed mobile app and POS terminal, offer businesses a robust platform for handling payments seamlessly. The app allows users to manage transactions, track expenses, and access analytics, while the POS terminal facilitates secure, in-person payments. With these tools, Payed aims to simplify financial management for merchants by providing a versatile and user-friendly solution that supports both digital and physical sales.",
		imageUrl: "/static-images/payed.png",
		appleStoreLink: "",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=app.getpayed.co",
		webLink: "",
	},
];

const skills: SkillsData[] = [
	{
		title: "Project & Task Management",
		firstTag: "Tools",
		secondTag: "Skills",
		firstDesc: "Jira, Linear, Trello",
		secondDesc:
			"Organizing workflows, tracking progress, effective project execution",
		icon: TbListSearch,
	},
	{
		title: "Data & User Behavior Analysis",
		firstTag: "Tools",
		secondTag: "Skills",
		firstDesc: "PostHog, HotJar",
		secondDesc: "Analyzing user behavior, using data for product insights",
		icon: TbListSearch,
	},
	{
		title: "Collaboration & Communication",
		firstTag: "Tools",
		secondTag: "Skills",
		firstDesc: "Miro, Microsoft Suite, Google Suite",
		secondDesc:
			"Collaborative planning, seamless communication, remote team management",
		icon: TbListSearch,
	},
	{
		title: "Project Methodologies",
		firstTag: "Frameworks",
		secondTag: "Skills",
		firstDesc: "Agile, Waterfall, PMBOK",
		secondDesc: "Implementing adaptable project frameworks, managing teams",
		icon: TbListSearch,
	},
	{
		title: "Research & Testing",
		firstTag: "Skills",
		secondTag: "Approach",
		firstDesc:
			"Market research, A/B testing, UX research, competitive analysis",
		secondDesc:
			"User-centered design, focusing on data-backed product improvements",
		icon: TbListSearch,
	},
	{
		title: "Product & User Experience Design",
		firstTag: "Tools",
		secondTag: "Skills",
		firstDesc: "Figma, Adobe XD, Whimsical",
		secondDesc:
			"Prototyping, design thinking, creating user-friendly experiences",
		icon: TbListSearch,
	},
	{
		title: "Product Strategy & Development",
		firstTag: "Skills",
		secondTag: "Focus",
		firstDesc:
			"High-level product strategy, product analytics, business analysis",
		secondDesc: "Aligning products with market needs, continuous improvement",
		icon: TbListSearch,
	},
	{
		title: "Technical & Non-Technical Proficiencies",
		firstTag: "Skills",
		secondTag: "Mindset",
		firstDesc: "Project management, risk assessment, people management",
		secondDesc: "Continuous improvement, user-centered approach",
		icon: TbListSearch,
	},
	{
		title: "Communication & Documentation",
		firstTag: "Skills",
		secondTag: "Approach",
		firstDesc: "Stakeholder management, transparent communication",
		secondDesc: "Clear documentation, customer feedback integration",
		icon: TbListSearch,
	},
];

const volunteering = []

const contacts: ContactData[] = [
	{
		title: "Email",
		description: "godswilludoh@gmail.com",
		icon: TfiEmail,
		linkUrl: "mailto:godswilludoh@gmail.com",
	},
	{
		title: "LinkedIn",
		description: "godswill udoh",
		icon: GrLinkedinOption,
		linkUrl: "https://www.linkedin.com/in/godswillbudoh/",
	},
	{
		title: "Twitter",
		description: "@officialgodswil",
		icon: FaXTwitter,
		linkUrl: "https://x.com/officialgodswil",
	},
	{
		title: "Phone Number",
		description: "+2349034476292",
		icon: MdOutlineLocalPhone,
		linkUrl: "tel:+2349034476292",
	},
	{
		title: "GitHub",
		description: "godswilludoh",
		icon: BsGithub,
		linkUrl: "https://github.com/godswilludoh",
	},
];

export { projects, skills, volunteering, featuredProjects, contacts };
