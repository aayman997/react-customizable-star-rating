import React from "react";

type MainProps = {
	children?: React.ReactNode
	className?: string
}
export const Main = ({children, className}: MainProps) => {
	return <main className={className}>{children}</main>;
};
