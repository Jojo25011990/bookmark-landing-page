type buttonType = "button" | "submit" | "reset";

type buttonVariantType =
	| "primary"
	| "secondary"
	| "tertiary"
	| "quaternary"
	| "mobileNavButton"
	| "accordionButton"
	| "tabContentButton";

type ButtonProps = {
	text?: React.ReactNode;
	type?: buttonType;
	variant?: buttonVariantType;
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
};

const Button = ({
	text,
	type = "button",
	variant = "primary",
	className = "",
	style,
	onClick,
}: ButtonProps) => {
	const basicClasses =
		"font-medium rounded outline-2 transition-colors duration-300  btn-box-shadow cursor-pointer";

	const variants = {
		primary:
			"text-white px-7 py-2.5 bg-primaryRed hover:text-primaryRed hover:bg-white  outline-primaryRed uppercase",
		secondary:
			"text-white text-sm leading-12 w-40 h-12 text-center outline-primaryBlue bg-primaryBlue hover:text-primaryBlue hover:bg-white",
		tertiary:
			"text-secondaryBlue bg-primaryLight text-sm leading-12 w-40 h-12 text-center   outline-primaryLight hover:outline-secondaryBlue hover:bg-white opacity-75 ",
		quaternary:
			"w-full text-xl tracking-wide px-7 py-4 uppercase hover:bg-primaryRed hover:outline-primaryRed",
		mobileNavButton: "cursor-pointer transition-opacity duration-300",
		accordionButton:
			"absolute w-full cursor-pointer transition-opacity duration-300",
		tabContentButton:
			"w-[243px] px-[40.5px] pb-[31px] cursor-pointer text-base font-normal leading-[17px] tracking-[0.53px] tab-btn",
	};

	const variantBtnClass = variants[variant] || "";

	const specialVariants = [
		variants.mobileNavButton,
		variants.accordionButton,
		variants.tabContentButton,
	];

	return (
		<button
			type={type}
			className={`${
				specialVariants.includes(variantBtnClass) ? "" : basicClasses
			} ${variantBtnClass} ${className}`}
			style={style}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
