import { useState } from "react";
import Accordion from "./Accordion";
import Button from "./Button";
import ExtensionCard from "./ExtensionCard";
import Message from "./Message";
import TabContent from "./TabContent";
import Title from "./Title";

const Main = () => {
	const [activeTab, setActiveTab] = useState<number>(1);

	return (
		<main className="w-full">
			{/* Features Section - Tab Section  */}
			<section className="w-full relative flex flex-col items-center justify-center px-5 mb-50">
				<div className="w-full max-w-[540px] text-center mb-20">
					<Title
						text="Features"
						className={
							"text-[34px] font-medium leading-14 tracking-tight mb-4"
						}
					/>

					<Message
						text={
							"Our aim is to make it quick and easy for you to access your favourite websites. Your bookmark sync between your devices so you can access them on the go."
						}
						className={"opacity-50 leading-7 mb-8"}
					/>
				</div>

				<div className="w-full max-w-[730px] flex border-b border-b-tertiaryBlue mb-[72px] tab-content-btns">
					<Button
						type="button"
						text={"Simple Bookmarking"}
						variant="tabContentButton"
						className={`tab-content-btn tab-content-btn-01 ${
							activeTab === 1
								? "active-tab before:scale-100"
								: "active-tab before:scale-0"
						}`}
						onClick={() => setActiveTab(1)}
					/>
					<Button
						type="button"
						text={"Speedy Searching"}
						variant="tabContentButton"
						className={`tab-content-btn tab-content-btn-02 ${
							activeTab === 2
								? "active-tab before:scale-100"
								: "active-tab before:scale-0"
						}`}
						onClick={() => setActiveTab(2)}
					/>
					<Button
						type="button"
						text={"Easy Sharing"}
						variant="tabContentButton"
						className={`tab-content-btn tab-content-btn-03 ${
							activeTab === 3
								? "active-tab before:scale-100"
								: "active-tab before:scale-0"
						}`}
						onClick={() => setActiveTab(3)}
					/>
				</div>

				<TabContent activeTab={activeTab} />
			</section>
			{/* End of Features Section - Tab Section  */}

			{/* Extension Section */}
			<section className="w-full relative flex flex-col items-center justify-center px-5 mb-50">
				<div className="w-full max-w-[540px] text-center mb-12">
					<Title
						text="Download the extension"
						className={
							"text-[34px] font-medium leading-14 tracking-tight mb-4"
						}
					/>

					<Message
						text={
							"We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize."
						}
						className={"opacity-50 leading-7 mb-8"}
					/>
				</div>

				<div className="w-full max-w-[911px] min-h-[451px] flex justify-center gap-10 extension-cards">
					<ExtensionCard
						imageBrowserSrc={"./images/logo-chrome.svg"}
						imageBrowserAlt={"Google Chrome Logo"}
						headingText={"Add To Chrome"}
						paragraphText={"Minimum version 62"}
						className="self-start"
					/>
					<ExtensionCard
						imageBrowserSrc={"./images/logo-firefox.svg"}
						imageBrowserAlt={"Mozilla Firefox Logo"}
						headingText={"Add To Firefox"}
						paragraphText={"Minimum version 55"}
						className="self-center"
					/>
					<ExtensionCard
						imageBrowserSrc={"./images/logo-opera.svg"}
						imageBrowserAlt={"Opera Browser Logo"}
						headingText={"Add To Opera"}
						paragraphText={"Minimum version 46"}
						className="self-end"
					/>
				</div>
			</section>
			{/* End of Extension Section */}

			{/* Accordion Section */}
			<section className="w-full relative flex flex-col items-center justify-center px-5 mb-50">
				<div className="w-full max-w-[540px] text-center mb-12">
					<Title
						text="Frequently Asked Questions"
						className={
							"text-[34px] font-medium leading-14 tracking-tight mb-4"
						}
					/>

					<Message
						text={
							"Here are some of our FAQs. If you have any other questins you'd like answered please feel to email us."
						}
						className={"opacity-50 leading-7 mb-8"}
					/>
				</div>

				<div className="w-full max-w-[540px] text-center mb-12">
					<Accordion
						accordionQuestion={"What is Bookmark"}
						accordionAnswer={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem labore quaerat quasi cum quidem. Id saepe asperiores ad magnam eveniet!"
						}
						className="border-b border-t"
					/>
					<Accordion
						isSecondQuestion={true}
						accordionQuestion={"How can I request a new browser"}
						accordionAnswer={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem labore quaerat quasi cum quidem. Id saepe asperiores ad magnam eveniet! amet consectetur adipisicing elit."
						}
					/>
					<Accordion
						accordionQuestion={"Is there a mobile app?"}
						accordionAnswer={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem labore quaerat quasi cum quidem. Id saepe."
						}
						className="border-b border-t"
					/>
					<Accordion
						accordionQuestion={"What about other Chromium browsers"}
						accordionAnswer={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem labore quaerat quasi cum quidem..."
						}
						className="border-b"
					/>
				</div>
				<Button text={"More Info"} variant="secondary" />
			</section>
			{/* End of Accordion Section */}
		</main>
	);
};

export default Main;
