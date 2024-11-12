import { Link } from "react-router-dom";
import HeaderCard from "./cards/HeaderCard";
import { BiWorld } from "react-icons/bi";
import { BiLogoPlayStore } from "react-icons/bi";
import { GrAppleAppStore } from "react-icons/gr";

interface ConatinerProps {
	reverse: boolean;
	title: string;
	heading: string;
	description: string;
	imageUrl: string;
	webLink: string;
	appleStoreLink: string;
	playStoreLink: string;
}

const FeaturedProject = () => {
	return (
		<div className="py-12 flex flex-col gap-12">
			<ProjectContainer
				title="Featured Project"
				heading="Troo"
				imageUrl="/static-images/troo.png"
				description={`Troo is a comprehensive Restaurant Management Software tailored to elevate the operations of hospitality businesses. With a suite of integrated tools, Troo helps businesses enhance efficiency, improve customer experience, and ultimately boost profitability. Designed with ease of use in mind, the software is built to seamlessly manage front-of-house and kitchen operations while simplifying payment processing and customer interactions.`}
				reverse={false}
				appleStoreLink=""
				playStoreLink=""
				webLink="https://www.troohq.com/"
			/>
			<ProjectContainer
				title="Featured Project"
				heading="Kurenode"
				imageUrl="/static-images/kurenode.png"
				description={`Kurenode is a health insurance software application aimed at enhancing healthcare delivery for patients and operational efficiency for healthcare providers. Kurenode focuses on integrating patient records, automating administrative tasks, and optimizing revenue management. The application seeks to improve patient care, streamline healthcare processes, ensure compliance with regulations, and reduce costs. It is designed for use by health insurance beneficiaries, healthcare providers, and health insurance agents, offering a seamless, user-friendly experience across these roles​.`}
				reverse
				appleStoreLink=""
				playStoreLink=""
				webLink="https://kurenode.com/"
			/>
		</div>
	);
};

export default FeaturedProject;

const ProjectContainer = (props: ConatinerProps) => {
	const {
		reverse,
		title,
		heading,
		description,
		imageUrl = "/static-images/mockup-image.jpg",
		appleStoreLink,
		playStoreLink,
		webLink
	} = props;

	return (
		<div
			className={`flex flex-col md:flex-row gap-16 ${
				reverse ? "flex-col md:flex-row-reverse" : ""
			} items-start md:items-center`}
		>
			<div className="w-full md:w-8/12">
				<HeaderCard
					title={title}
					titleBg="bg-black"
					titleColor="text-light-navy-accent"
					heading={heading}
					description={description}
				/>

				<div className="flex items-center gap-2 py-2">
					{webLink !== "" && (
						<Link to={webLink} target="_blank" className="flex items-center gap-1">
							<BiWorld size={16} /> visit
						</Link>
					)}
					{playStoreLink !== "" && (
						<Link to={playStoreLink} target="_blank">
							<BiLogoPlayStore size={16} />
						</Link>
					)}
					{appleStoreLink !== "" && (
						<Link to={appleStoreLink} target="_blank">
							<GrAppleAppStore size={16} />
						</Link>
					)}
				</div>
			</div>

			<div className="w-full md:w-4/12">
				<img src={imageUrl} alt="featured-project" className="w-full h-auto" />
			</div>
		</div>
	);
};
