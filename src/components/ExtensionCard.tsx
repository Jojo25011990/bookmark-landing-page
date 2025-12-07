import Button from "./Button";
import Image from "./Image";
import Message from "./Message";
import Title from "./Title";

type ExtensionCardProps = {
	imageBrowserSrc?: string;
	imageBrowserAlt?: string;
	headingText?: string;
	paragraphText?: string;
	className?: string;
};

const ExtensionCard = ({
	imageBrowserSrc,
	imageBrowserAlt,
	headingText,
	paragraphText,
	className = "",
}: ExtensionCardProps) => {
	return (
		<div
			className={`relative w-full max-w-[280px] min-h-[371px] flex flex-col items-center self-baseline rounded-[15px] bg-white shadow-[0px_10px_20px_-5px_rgba(73,93,207,0.2)] px-[26px] pb-[26px] pt-[42px] ${className}`}
		>
			<Image
				isNeedTagImg={true}
				srcImg={imageBrowserSrc}
				altImg={imageBrowserAlt}
				className="mb-8"
			/>

			<Title isCard={true} text={headingText} />

			<Message text={paragraphText} className="mb-[60px]" />

			<Image
				isNeedTagImg={false}
				srcImg={"./images/bg-dots.svg"}
				altImg={"Background dots, SVG ICON"}
				className="bg-dots"
			/>

			<Button
				type="button"
				text={"Add & Install Extension"}
				variant="secondary"
				style={{ width: "100%" }}
			/>
		</div>
	);
};

export default ExtensionCard;
