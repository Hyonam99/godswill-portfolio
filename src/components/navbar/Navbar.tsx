import { NavLink } from "react-router-dom";
import Logo from "../Logo";

const Navbar = () => {
	return (
		<nav className="bg-stone-accent/30 py-2">
			<div className="flex items-center justify-between max-w-[90dvw] m-auto">
				<Logo />
				<section className="flex items-center justify-between gap-5">
					<NavLink
						to={"/"}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Home
					</NavLink>
					<NavLink
						to={"about"}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						About Me
					</NavLink>
					<NavLink
						to={"projects"}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Projects
					</NavLink>
				</section>
			</div>
		</nav>
	);
};

export default Navbar;
