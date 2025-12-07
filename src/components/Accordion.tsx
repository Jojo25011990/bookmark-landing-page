import { useState } from "react";
import Image from "./Image";
import Title from "./Title";
import Message from "./Message";
import Button from "./Button";

type AccordionProps = {
	accordionQuestion: string;
	accordionAnswer: string;
	className?: string;
	isSecondQuestion?: boolean;
};

const Accordion = ({
	accordionQuestion,
	accordionAnswer,
	isSecondQuestion = false,
	className = "",
}: AccordionProps) => {
	const [activeQuestion, setActiveQuestion] = useState<boolean | null>(null);

	const handleChangeButton = () =>
		setActiveQuestion((changeButton) => !changeButton);

	return (
		<div
			className={`w-full relative flex flex-col items-start border-tertiaryBlue pb-7 pt-[19px] transition-all duration-300 overflow-hidden ${className} ${
				activeQuestion
					? isSecondQuestion
						? "h-[220px] accordion-height"
						: "h-[190px] accordion-height"
					: "h-[66px]"
			}`}
		>
			<Title
				isAccordion={true}
				text={accordionQuestion}
				className={`${
					activeQuestion
						? "transition-colors duration-300 text-primaryRed"
						: ""
				}`}
			/>

			<Message
				text={accordionAnswer}
				className={
					"opacity-50 leading-9 text-base font-normal text-left mt-8"
				}
			/>

			<div className="absolute right-5 w-5 h-5 flex items-center justify-center">
				<Button
					onClick={handleChangeButton}
					variant="accordionButton"
					text={
						<Image
							isNeedTagImg={true}
							srcImg={"./images/icon-arrow.svg"}
							altImg="Icon arrow-up svg"
						/>
					}
					className={`${
						activeQuestion ? "opacity-0" : "opacity-100"
					}`}
				/>

				<Button
					onClick={handleChangeButton}
					variant="accordionButton"
					text={
						<Image
							isNeedTagImg={true}
							srcImg={"./images/icon-arrow-down.svg"}
							altImg="Icon arrow-down svg"
						/>
					}
					className={`${
						activeQuestion ? "opacity-100" : "opacity-0"
					}`}
				/>
			</div>
		</div>
	);
};

export default Accordion;
