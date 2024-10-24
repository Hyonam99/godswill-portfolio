import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			"html, body": {
				backgroundColor: "black", // Set the background color to black
				color: "white", // Optional: Set text color to white for better contrast
			},
		},
	},
	fonts: {
		heading: '"Arima Madurai", cursive',
		body: '"Arima Madurai", cursive',
	},
});

const Applayout = () => {
	return (
		<ChakraProvider theme={theme} resetCSS={false}>
			<div>
				<Header />
				<Navbar />
				<main className="max-w-[90dvw] m-auto">
					<Outlet />
				</main>
				<Footer />
			</div>
		</ChakraProvider>
	);
};

export default Applayout;
