type MessageProps = {
	text?: string;
	className?: string;
	id?: string;
};

const Message = ({ text, className = "", id }: MessageProps) => {
	return (
		<p id={id} className={`message ${className}`}>
			{text}
		</p>
	);
};

export default Message;
