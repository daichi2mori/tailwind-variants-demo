import { withTV } from "tailwind-variants/transformer";
import { Config } from "tailwindcss/types/config";

/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;

export default withTV(config);
