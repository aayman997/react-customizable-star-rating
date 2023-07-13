import React from "react";

type AsideProps = {
	children?: React.ReactNode
	className?: string
}
export const Aside = ({children, className}: AsideProps) => {
	return <aside className={className}>{children}</aside>;
};
