type TitleProps = {
	isHeader?: boolean;
	isCard?: boolean;
	isAccordion?: boolean;
	className?: string;
	text?: string;
};

const Title = ({
	isHeader,
	isCard,
	isAccordion,
	className = "",
	text = "A Simple Bookmark Manager",
}: TitleProps) => {
	if (isHeader) {
		// *** Header ***
		return (
			<h1 className="text-5xl font-medium leading-14 tracking-tight mb-6 text-shadow-[0px_4px_4px_rgba(0,0,0,.25)] heading-primary">
				{text}
			</h1>
		);
	} else if (isCard) {
		// *** Card ***
		return (
			<h3 className="font-medium text-xl tracking-[0.25px]">{text}</h3>
		);
	} else if (isAccordion) {
		// *** Accordion ***
		return <h4 className={className}>{text}</h4>;
	} else {
		// *** Main/Footer - Sections ***
		return <h2 className={`heading-secondary ${className}`}>{text}</h2>;
	}
};

export default Title;
