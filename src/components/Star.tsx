import React, {MouseEventHandler} from "react";

type StarProps = {
	index: number
	onRate?: React.Dispatch<React.SetStateAction<number>>
	full: boolean
	half: boolean
	onHoverIn?: React.Dispatch<React.SetStateAction<number>>
	onHoverOut?: MouseEventHandler<HTMLSpanElement>
	size: number
	color: string
	borderColor: string
	viewOnly?: boolean
	onSetRating?: React.Dispatch<React.SetStateAction<number>>
}
export const Star = ({index, onRate, full, half, onHoverIn, onHoverOut, size, color, borderColor, onSetRating, viewOnly}: StarProps) => {
	const starStyle: React.CSSProperties = {
		width  : `${size}px`,
		height : `${size}px`,
		display: "block",
		cursor : "pointer"
	};

	const handleRating = (e: React.MouseEvent<HTMLElement>, temp = false) => {
		const rect = (e.target as HTMLElement).getBoundingClientRect();
		const pixelsFromLeft = e.clientX - rect.left;
		const pixelsFromRight = rect.right - e.clientX;
		const halfStar = pixelsFromRight > pixelsFromLeft;
		if (temp && onHoverIn) {
			return onHoverIn(halfStar ? index + 0.5 : index + 1);
		}
		if (onRate) {
			onRate(halfStar ? index + 0.5 : index + 1);
		}
		if (onSetRating) {
			onSetRating(halfStar ? index + 0.5 : index + 1);
		}
	};


	const renderSuitableStar = () => {
		if (full) {
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
					<g transform="translate(-1021.982 -806.071)">
						<path
							d="M-1962.1,17.233l-3.976-2.888a1,1,0,0,0-1.176,0l-3.975,2.888a1,1,0,0,1-1.538-1.118l1.518-4.674a1,1,0,0,0-.364-1.118l-3.976-2.888a1,1,0,0,1,.589-1.81h4.914a1,1,0,0,0,.95-.69l1.519-4.674a1,1,0,0,1,1.9,0l1.518,4.674a1,1,0,0,0,.95.69h4.915a1,1,0,0,1,.588,1.81l-3.975,2.888a1,1,0,0,0-.364,1.118l1.518,4.674a1,1,0,0,1-.953,1.314A.984.984,0,0,1-1962.1,17.233Z"
							transform="translate(2998 807)"
						/>
						<path
							d="M11.049,2.927a1,1,0,0,1,1.9,0L14.47,7.6a1,1,0,0,0,.95.69h4.915a1,1,0,0,1,.588,1.81l-3.976,2.888a1,1,0,0,0-.363,1.118L18.1,18.781A1,1,0,0,1,16.564,19.9l-3.976-2.888a1,1,0,0,0-1.176,0L7.436,19.9A1,1,0,0,1,5.9,18.781l1.518-4.674a1,1,0,0,0-.363-1.118L3.077,10.1a1,1,0,0,1,.588-1.81H8.579A1,1,0,0,0,9.53,7.6l1.519-4.674Z"
							transform="translate(1019.837 804.334)" fill={color} stroke={borderColor} strokeWidth="1"
						/>
					</g>
				</svg>
			);
		}

		if (half) {
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<g transform="translate(-1021.982 -806.071)">
						<path
							d="M-1972.765,16.115l1.518-4.674a1,1,0,0,0-.364-1.118l-3.976-2.888a1,1,0,0,1,.589-1.81h4.914a1,1,0,0,0,.95-.69l1.519-4.674a.986.986,0,0,1,1.014-.689V14.156a1,1,0,0,0-.652.189l-3.975,2.888a.984.984,0,0,1-.584.2A1,1,0,0,1-1972.765,16.115Z"
							transform="translate(2998 807)" fill={color}
						/>
						<path
							d="M11.049,2.927a1,1,0,0,1,1.9,0L14.47,7.6a1,1,0,0,0,.95.69h4.915a1,1,0,0,1,.588,1.81l-3.976,2.888a1,1,0,0,0-.363,1.118L18.1,18.781A1,1,0,0,1,16.564,19.9l-3.976-2.888a1,1,0,0,0-1.176,0L7.436,19.9A1,1,0,0,1,5.9,18.781l1.518-4.674a1,1,0,0,0-.363-1.118L3.077,10.1a1,1,0,0,1,.588-1.81H8.579A1,1,0,0,0,9.53,7.6l1.519-4.674Z"
							transform="translate(1019.837 804.334)" fill="none" stroke={borderColor} strokeWidth="1"
						/>
					</g>
				</svg>
			);
		}

		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
				<g transform="translate(-1021.982 -806.071)">
					<path
						d="M11.049,2.927a1,1,0,0,1,1.9,0L14.47,7.6a1,1,0,0,0,.95.69h4.915a1,1,0,0,1,.588,1.81l-3.976,2.888a1,1,0,0,0-.363,1.118L18.1,18.781A1,1,0,0,1,16.564,19.9l-3.976-2.888a1,1,0,0,0-1.176,0L7.436,19.9A1,1,0,0,1,5.9,18.781l1.518-4.674a1,1,0,0,0-.363-1.118L3.077,10.1a1,1,0,0,1,.588-1.81H8.579A1,1,0,0,0,9.53,7.6l1.519-4.674Z"
						transform="translate(1019.837 804.334)" fill="none" stroke={borderColor} strokeWidth="1"
					/>
				</g>
			</svg>
		);
	};
	if (viewOnly) {
		return (
			<span style={{...starStyle, cursor: "auto"}}>
				{renderSuitableStar()}
			</span>
		);
	}
	return (
		<span
			role="button"
			style={starStyle}
			onClick={(e) => handleRating(e)}
			onMouseMove={(e) => handleRating(e, true)}
			onMouseLeave={onHoverOut}
		>
            {renderSuitableStar()}
        </span>
	);
};
