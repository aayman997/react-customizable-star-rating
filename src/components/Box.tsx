import React from "react";

type BoxProps = {
	children?: React.ReactNode
	className?: string
}
export const Box = ({children, className}: BoxProps) => {
	return <div className={className}>{children}</div>;
};
