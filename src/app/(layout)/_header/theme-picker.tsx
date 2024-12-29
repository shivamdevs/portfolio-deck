"use client";

import getColors from "@/lib/colors";
import { getCookie, setCookie } from "cookies-next";
import React from "react";

export default function ThemePicker() {
	const [color, setColor] = React.useState(
		getColors(getCookie("theme-color")?.toString()).theme
	);

	React.useEffect(() => {
		const theme = getColors(color);
		for (const [key, value] of Object.entries(theme.variables)) {
			document.body.style.setProperty(key, value);
		}

		setCookie("theme-color", color, {
			maxAge: 60 * 60 * 24 * 365,
		});
	}, [color]);

	return (
		<div>
			<input
				type="color"
				value={color}
				onChange={(e) => setColor(getColors(e.target.value).theme)}
			/>
		</div>
	);
}
