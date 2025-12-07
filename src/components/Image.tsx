type ImageProps = {
	srcImg?: string;
	altImg?: string;
	className?: string;
	isNeedTagImg?: boolean;
};

const Image = ({
	srcImg,
	altImg,
	className = "",
	isNeedTagImg,
}: ImageProps) => {
	return (
		<div className={className}>
			{isNeedTagImg && <img src={srcImg} alt={altImg} />}
		</div>
	);
};

export default Image;
