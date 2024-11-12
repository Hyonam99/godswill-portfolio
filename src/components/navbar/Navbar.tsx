import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	DrawerHeader,
} from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";
import { useRef } from "react";

const Navbar = () => {

	 const { isOpen, onOpen, onClose } = useDisclosure();
		const btnRef = useRef<any>();
	return (
		<nav className="bg-stone-accent/30 py-2">
			<div className="flex items-center justify-between max-w-[90dvw] m-auto">
				<Logo />
				<section className="hidden md:flex items-center justify-between gap-5">
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

				<button ref={btnRef} onClick={onOpen} className="block md:hidden">
					<IoIosMenu size={24} />
				</button>

				<Drawer
					isOpen={isOpen}
					placement="right"
					onClose={onClose}
					finalFocusRef={btnRef}
					closeOnEsc
				>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton sx={{color: "black"}}/>
						<DrawerHeader></DrawerHeader>

						<DrawerBody>
							<section className="flex flex-col items-start gap-5" onClick={onClose}>
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
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</div>
		</nav>
	);
};

export default Navbar;
