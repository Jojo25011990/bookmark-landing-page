import Button from "./Button";

type NavigationLinksProps = { isNeedBtn?: boolean };

const NavigationLinks = ({ isNeedBtn = false }: NavigationLinksProps) => {
	return (
		<ul className="flex gap-11 items-center text-secondaryBlue uppercase text-xs">
			<li>
				<a
					href="#"
					className="hover:text-primaryRed transition-[color] duration-300 "
				>
					features
				</a>
			</li>
			<li>
				<a
					href="#"
					className="hover:text-primaryRed transition-[color] duration-300 "
				>
					pricing
				</a>
			</li>
			<li>
				<a
					href="#"
					className="hover:text-primaryRed transition-[color] duration-300 "
				>
					contact
				</a>
			</li>

			{isNeedBtn && (
				<li>
					<Button text={"login"} variant="primary" />
				</li>
			)}
		</ul>
	);
};

export default NavigationLinks;
