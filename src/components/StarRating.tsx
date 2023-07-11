import React, {useState} from "react";
import {Star} from "./Star";

export const containerStyle: React.CSSProperties = {
	display   : "flex",
	alignItems: "center",
	gap       : "16px"
};
const startContainerStyle = {
	display: "flex",
	gap    : "4px"
};

type Props = {
	maxRating?: number
	color?: string
	size?: number
	borderColor?: string
	className?: string
	messages?: []
	defaultRating?: number
	onSetRating: React.Dispatch<React.SetStateAction<number>>
}

export const StarRating = (
	{
		maxRating = 5,
		color = "#FCC419",
		size = 48,
		borderColor = color,
		className = "",
		messages = [],
		defaultRating = 0,
		onSetRating
	}: Props
) => {
	const [rating, setRating] = useState<number>(defaultRating);
	const [tempRating, setTempRating] = useState<number>(0);

	const textStyle = {
		lineHeight: "1",
		margin    : "0",
		color,
		fontSize  : `${size / 1.5}px`
	};

	const properMessage = (): number => {
		if (messages.length === maxRating) {
			return messages[tempRating ? Math.round(tempRating - 1) : rating - 1];
		} else {
			return tempRating || rating;
		}
	};

	const isHalf = (i: number): boolean => {
		if (tempRating) {
			if (tempRating === 0.5 && i === 0) {
				return true;
			}
			if (i !== 0 && tempRating !== 0.5) {
				return tempRating % i === 0.5;
			}
			return false;
		} else {
			if (rating === 0.5 && i === 0) {
				return true;
			}
			if (i !== 0 && rating !== 0.5) {
				return rating % i === 0.5;
			}
			return false;
		}
	};

	return (
		<div style={containerStyle} className={className}>
			<div style={startContainerStyle}>
				{Array.from({length: maxRating}, (_, i) => (
					<Star
						key={i}
						index={i}
						full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
						half={isHalf(i)}
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
			<div style={textStyle}>{properMessage()}</div>
		</div>
	);
};
