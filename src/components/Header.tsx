import { useState, useEffect } from "react";
import Link from "./Link";
import Logo from "./Logo";
import Title from "./Title";
import Message from "./Message";
import Button from "./Button";
import Image from "./Image";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(() => {
		const mobileResize = () => {
			if (window.innerWidth > 650 && isActive) setIsActive(false);
		};

		window.addEventListener("resize", mobileResize);

		return () => window.removeEventListener("resize", mobileResize);
	}, [isActive]);

	const handleChangeButton = () =>
		setIsActive((ChangeButton) => !ChangeButton);

	return (
		<header className="relative z-50 w-full flex flex-col justify-center items-center mt-12 mb-28 px-5">
			<nav className="w-full max-w-[1110px] flex justify-between items-center gap-10">
				<Logo isHeader={true} />

				<ul className="hidden sm:flex gap-11 items-center text-secondaryBlue uppercase text-xs">
					<Link text={"features"} />
					<Link text={"pricing"} />
					<Link text={"contact"} />
					<Link isNeedButton={true} />
				</ul>

				{/* Mobile Navigation Button - Hambuger Icon */}
				<Button
					onClick={handleChangeButton}
					variant="mobileNavButton"
					text={
						<Image
							isNeedTagImg={true}
							srcImg={"./images/icon-hamburger.svg"}
							altImg="Icon hamburger menu svg"
						/>
					}
					className="block sm:hidden cursor-pointer"
				/>
				{/* End of Mobile Navigation Button - Hambuger Icon */}
			</nav>

			{/* Hero Section */}
			<section className="w-full relative flex justify-center px-5 mt-[108px]">
				<div className="w-[1110px] flex items-center hero-section">
					<div className="w-full max-w-[463px] hero-section-content">
						<Title isHeader={true} />
						<Message
							text={
								"A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
							}
							className="opacity-50 leading-7 mb-8 text-shadow-[0px_4px_4px_rgba(0,0,0,.25)]"
						/>

						<div className="flex gap-4 hero-buttons">
							<Button
								text={"Get it on Chrome"}
								variant="secondary"
							/>
							<Button
								text={"Get it on Firefox"}
								variant="tertiary"
							/>
						</div>
					</div>

					<div className="">
						<Image
							isNeedTagImg={true}
							srcImg={"./images/illustration-hero.svg"}
							altImg={"Illustration Hero Image"}
							className="w-full relative left-16 hero-section-img"
						/>

						<Image
							srcImg={"./images/bg-blue-right.svg"}
							altImg="Blue background image"
							isNeedTagImg={true}
							className="w-full max-w-[500px] absolute bottom-0 -right-9 -z-10 hero-section-img-blue"
						/>
					</div>
				</div>
			</section>
			{/* End of Hero Section */}

			{/* Mobile Navigation */}
			<MobileNavigation
				isActive={isActive}
				handleChangeButton={handleChangeButton}
			/>
			{/* End of Mobile Navigation */}
		</header>
	);
};

export default Header;
