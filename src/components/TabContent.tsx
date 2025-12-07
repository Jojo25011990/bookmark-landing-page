import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "./Image";
import Message from "./Message";
import Title from "./Title";
import Button from "./Button";
import tabContentData from "../tabContentData";

type TabContentProps = { activeTab: number };

const TabContent = ({ activeTab }: TabContentProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const activeTabContent = tabContentData.find(
		(oneTabContentData) => oneTabContentData.id === activeTab
	);

	useEffect(() => {
		if (!containerRef.current) return;

		gsap.set(containerRef.current, { opacity: 0, y: 100 });

		gsap.to(containerRef.current, {
			opacity: 1,
			y: 0,
			duration: 2,
			ease: "power4.out",
		});
	}, [activeTab]);

	if (!activeTabContent) return null;

	return (
		<div
			ref={containerRef}
			key={activeTabContent.id}
			className="relative z-20 w-full max-w-[1106px] flex justify-between items-center gap-12  tab-content"
		>
			<Image
				srcImg={activeTabContent.image}
				isNeedTagImg={true}
				altImg="Blue Background"
			/>
			<Image
				srcImg={"./images/bg-blue-left.svg"}
				altImg="Blue Background"
				isNeedTagImg={true}
				className="w-full  absolute -bottom-20 -left-42  -z-10 tab-section-img-blue"
			/>
			<div className="w-full max-w-[445px] h-[239px]">
				<Title
					text={activeTabContent.title}
					className="text-[34px] font-medium leading-14 tracking-tight mb-4"
				/>
				<Message
					text={activeTabContent.message}
					className="opacity-50 leading-7 mb-8"
				/>
				<Button text={"More Info"} variant="secondary" />
			</div>
		</div>
	);
};

export default TabContent;
