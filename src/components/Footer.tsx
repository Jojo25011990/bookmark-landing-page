import type { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import Button from "./Button";
import Link from "./Link";
import Logo from "./Logo";
import Message from "./Message";
import Title from "./Title";
import Image from "./Image";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
	const [email, setEmail] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<boolean>(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const trimedEmailValue = email.trim().toLowerCase();
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		const isValidEmail = emailRegex.test(trimedEmailValue);

		if (!isValidEmail) setErrorMessage(true);
		else setErrorMessage(false);
	};

	return (
		<footer className="w-full flex flex-col justify-center items-center text-white mt-12 z-50">
			<section className="w-full min-h-[360px] bg-primaryBlue flex flex-col justify-center items-center  gap-9 px-5">
				<div className="w-full max-w-[423px] text-center">
					<Message
						text={"35.000+ already joined"}
						className="font-medium uppercase  leading-10 text-[13px] tracking-[5px] mb-6 footer-message"
					/>
					<Title
						text={"Stay up-to-date with what we're doing"}
						className="font-medium text-[32px] leading-10 tracking-[-0.1px] footer-heading"
					/>
				</div>

				<form
					className="w-full max-w-[485px] flex gap-4"
					noValidate
					autoComplete="off"
					onSubmit={handleSubmit}
				>
					<div
						className={`relative w-full max-w-[300px]  bg-white rounded-[5px] outline-2 ${
							errorMessage ? "outline-primaryRed" : ""
						}`}
					>
						<label htmlFor="email" className="sr-only">
							Email Address
						</label>
						<input
							type="email"
							id="email"
							placeholder="Enter your email address"
							className="w-full h-full text-secondaryBlue text-sm  leading-7 tracking-[0.25px] rounded-[5px] outline-none border-none px-2.5"
							value={email}
							onChange={handleChange}
						/>
						{errorMessage && (
							<Image
								isNeedTagImg={true}
								srcImg={"./images/icon-error.svg"}
								className="absolute top-[50%] translate-y-[-50%] right-2.5"
							/>
						)}

						{errorMessage && (
							<Message
								text={"Check your email please."}
								className="absolute left-2.5 -bottom-5 text-xs font-bold text-primaryRed uppercase footer-message"
							/>
						)}
					</div>

					<Button type={"submit"} text={"Contact Us"} />
				</form>
			</section>

			<nav className="w-full min-h-[88px] bg-secondaryBlue flex justify-center items-center px-20">
				<div className="w-full max-w-[1110px] flex justify-between gap-10">
					<div className="w-full max-w-[507px] flex justify-between items-center gap-5">
						<Logo />

						<ul className="flex gap-11 items-center  uppercase text-xs">
							<Link text={"features"} />
							<Link text={"pricing"} />
							<Link text={"contact"} />
						</ul>
					</div>

					<ul className="w-full max-w-[88px] flex justify-between gap-5 text-xl footer-social-media">
						<Link text={<FaFacebookSquare />} />
						<Link text={<FaTwitter />} />
					</ul>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
