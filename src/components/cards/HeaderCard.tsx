interface HeaderCardProps {
	title: string;
	titleBg?:string
	titleColor?:string
    heading: string;
    description: string;
}

const HeaderCard = (props:  HeaderCardProps) => {
    const {
			title,
			heading,
			description,
			titleBg = "bg-grey-accent",
			titleColor = "text-white",
		} = props;

  return (
		<div className="">
			<span
				className={`${titleBg} py-1 px-2 rounded-md uppercase text-xs ${titleColor} font-semibold`}
			>
				{title}
			</span>
			<h2 className="font-bold text-4xl mb-5 mt-2">{heading}</h2>
			<p className="text-light-grey-accent">{description}</p>
		</div>
	);
}

export default HeaderCard
