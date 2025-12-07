import Logo from "./Logo";
import Button from "./Button";
import Image from "./Image";
import Link from "./Link";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

type MobileNavigationProps = {
	isActive: boolean;
	handleChangeButton: () => void;
};

const MobileNavigation = ({
	isActive,
	handleChangeButton,
}: MobileNavigationProps) => {
	return (
		<section
			className={`w-full h-screen text-white bg-secondaryBlue fixed top-0 left-0 z-40 p-8 pt-[70px] mobile-navigation ${
				isActive ? "translate-x-0" : "translate-x-full"
			}  transition-transform`}
		>
			<div className="w-full flex justify-between">
				<Logo />

				{/* Mobile Navigation Button - Close Icon */}
				<Button
					onClick={handleChangeButton}
					variant="mobileNavButton"
					text={
						<Image
							isNeedTagImg={true}
							srcImg={"./images/icon-close.svg"}
						/>
					}
					className="block sm:hidden cursor-pointer"
				/>
				{/* End of Mobile Navigation Button - Close Icon */}
			</div>

			<nav className="w-full flex flex-col gap-36 justify-center items-center mt-28">
				<ul className="w-full flex flex-col items-center text-center uppercase text-xs text-white">
					<Link text={"features"} isMobileNavigation={true} />
					<Link text={"pricing"} isMobileNavigation={true} />
					<Link text={"contact"} isMobileNavigation={true} />
					<Link
						isNeedButton={true}
						isMobileNavigation={true}
						isHeaderNavigation={false}
					/>
				</ul>

				<ul className="w-full max-w-[88px] flex justify-between gap-5 text-xl footer-social-media">
					<Link text={<FaFacebookSquare />} className="text-3xl" />
					<Link text={<FaTwitter />} className="text-3xl" />
				</ul>
			</nav>
		</section>
	);
};

export default MobileNavigation;
