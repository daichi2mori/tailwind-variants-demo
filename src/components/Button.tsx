import { VariantProps, tv } from "tailwind-variants";

const button = tv({
	base: "font-medium bg-blue-500 text-white rounded-full hover:opacity-80",
	variants: {
		color: {
			primary: "bg-blue-500 text-white",
			secondary: "bg-purple-500 text-white",
		},
		size: {
			sm: "text-sm",
			md: "text-base",
			lg: "px-4 py-3 text-lg",
		},
	},
	compoundVariants: [
		{
			size: ["sm", "md"],
			class: "px-3 py-1",
		},
	],
	defaultVariants: {
		size: "md",
		color: "primary",
	},
});

type ButtonProps = VariantProps<typeof button>;

export const Button: React.FC<ButtonProps> = () => {
	return (
		<button
			type="button"
			className={button({ size: "sm", color: "secondary" })}
		>
			Click me
		</button>
	);
};
