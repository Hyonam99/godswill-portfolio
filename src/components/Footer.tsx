import { GoHeartFill } from "react-icons/go";

const Footer = () => {
	return (
		<footer className="max-w-[90dvw] m-auto py-5 border-t border-solid border-light-grey-accent">
			<div className="flex justify-between items-center">
				<p className="text-sm text-gray-500">&copy; 2024 rights reserved</p>
				<p className="text-sm text-gray-500 flex items-center gap-2">
					<GoHeartFill size={16} /> from Godswill Udoh
				</p>
			</div>
		</footer>
	);
};

export default Footer;
