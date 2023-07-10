import React, {useState} from "react";
import {Star} from "./Star";

const containerStyle = {
	display   : "flex",
	alignItems: "center",
	gap       : "16px"
};
const startContainerStyle = {
	display: "flex",
	gap    : "4px"
};

type Props = {
	maxRating: number
	color: string
	size: number
	borderColor: string
	className: string
	messages: []
	defaultRating: number
	onSetRating: Function
}

export const StarRating = ({
	                           maxRating = 5,
	                           color = "#FCC419",
	                           size = 48,
	                           borderColor = color,
	                           className = "",
	                           messages = [],
	                           defaultRating = 0,
	                           onSetRating
                           }: Props) => {
	const [rating, setRating] = useState<number>(defaultRating);
	const [tempRating, setTempRating] = useState<number>(0);

	const textStyle = {
		lineHeight: "1",
		margin    : "0",
		color,
		fontSize  : `${size / 1.5}px`
	};

	return (
		<div style={containerStyle} className={className}>
			<div style={startContainerStyle}>
				{Array.from({length: maxRating}, (_, i) => (
					<Star
						key={i} index={i}
						full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
						half={tempRating
						      ? ((tempRating === 0.5 && i === 0) ? true : (i !== 0 && tempRating !== 0.5) ? tempRating % i === 0.5 : false)
						      : ((rating === 0.5 && i === 0) ? true : (i !== 0 && rating !== 0.5) ? rating % i === 0.5 : false)}
						onRate={setRating}
						onHoverIn={setTempRating}
						onHoverOut={() => setTempRating(0)}
						color={color}
						size={size}
						borderColor={borderColor}
						onSetRating={onSetRating}
					/>
				))}
			</div>
			<div style={textStyle}>{
				messages.length === maxRating
				? messages[tempRating ? Math.round(tempRating - 1) : rating - 1]
				: tempRating || rating || ""}</div>
		</div>
	);
};

export default StarRating;


