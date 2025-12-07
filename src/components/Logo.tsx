type LogoProps = { isHeader?: boolean };

const Logo = ({ isHeader = false }: LogoProps) => {
	return isHeader ? (
		<div className="w-full max-w-[150px]">
			<img
				src="images/logo-bookmark.svg"
				alt="Logo Bookmark Landing Page"
			/>
		</div>
	) : (
		<div className="w-full max-w-[150px]">
			<img
				src="images/logo-bookmark-white.svg"
				alt="Logo Bookmark Landing Page"
			/>
		</div>
	);
};

export default Logo;
