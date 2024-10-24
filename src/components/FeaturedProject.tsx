import HeaderCard from "./cards/HeaderCard"

interface ConatinerProps {
	reverse: boolean
}

const FeaturedProject = () => {
  return (
		<div className="py-12 flex flex-col gap-12">
			<ProjectContainer reverse={false} />
			<ProjectContainer reverse />
		</div>
	);
}

export default FeaturedProject



const ProjectContainer = (props: ConatinerProps) => {
	const {reverse} = props

  return (
		<div
			className={`flex gap-16 ${
				reverse ? "flex-row-reverse" : ""
			} items-center`}
		>
			<div className="w-8/12">
				<HeaderCard
					title="Featured Project"
					titleBg="bg-black"
					titleColor="text-light-navy-accent"
					heading="Kurenode"
					description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque eaque, odio illo consectetur facilis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque eaque, odio illo consectetur facilis"
				/>
			</div>

			<div className="w-4/12">
				<img
					src="/static-images/mockup-image.jpg"
					alt="featured-project"
					className="w-full h-[400px] object-cover object-center"
				/>
			</div>
		</div>
	);
}