import React from "react";

export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="p-5 fixed inset-0 flex gap-5">
			<div className="w-10/12 h-[420px] bg-foreground/10"></div>

			{children}
		</div>
	);
}
