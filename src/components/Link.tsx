import Button from "./Button";

type LinkProps = {
	text?: React.ReactNode;
	className?: string;
	isNeedButton?: boolean;
	isMobileNavigation?: boolean;
	isHeaderNavigation?: boolean;
};

const Link = ({
	text,
	className = "",
	isNeedButton = false,
	isMobileNavigation = false,
	isHeaderNavigation = true,
}: LinkProps) => {
	return isNeedButton ? (
		<li className={`${isMobileNavigation ? "w-full" : ""}`}>
			<Button
				text={"login"}
				variant={`${isHeaderNavigation ? "primary" : "quaternary"}`}
				className=""
			/>
		</li>
	) : (
		<li
			className={`${
				isMobileNavigation ? "w-full border-t-2 py-6" : ""
			} ${className}`}
		>
			<a
				href="#"
				className={`hover:text-primaryRed transition-[color] duration-300  ${
					isMobileNavigation ? "leading-4 text-xl tracking-wide" : ""
				}`}
			>
				{text}
			</a>
		</li>
	);
};

export default Link;
