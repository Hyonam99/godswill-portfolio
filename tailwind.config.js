/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/pages/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"stone-accent": "#111111", //primary color - black
				"grey-accent": "#222222", // secondary color
				"navy-accent": "#0d4170", // tertiary color
				"light-navy-accent": "#75b6e8", // tertiary color
				"light-grey-accent": "#747474", //for the text color
			},
			fontFamily: {
				arima: ['"Arima Madurai"', "cursive"], // Use this in your classes
				sans: ['"Arima Madurai"', "cursive"],
			},
		},
	},
	plugins: [],
};
