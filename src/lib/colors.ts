import Color from "color";
import React from "react";

export type ThemeColor = `#${string}`;

export default function getColors(theme?: string | null) {
	if (!theme || !validateColor(theme)) {
		theme = "#000000";
	}

	const color = Color(theme);

	const background = hslConverter(color);
	const foreground = hslConverter(color.isDark() ? "#ffffff" : "#000000");

	const variables = {
		"--background": background,
		"--foreground": foreground,
		"--card": background,
		"--card-foreground": foreground,
		"--popover": background,
		"--popover-foreground": foreground,
		"--primary": background,
		"--primary-foreground": foreground,
		"--secondary": background,
		"--secondary-foreground": foreground,
		"--muted": background,
		"--muted-foreground": foreground,
		"--accent": background,
		"--accent-foreground": foreground,
		"--destructive": background,
		"--destructive-foreground": foreground,
		"--border": background,
		"--input": background,
		"--ring": background,
		"--chart-1": background,
		"--chart-2": background,
		"--chart-3": background,
		"--chart-4": background,
		"--chart-5": background,
	} as React.CSSProperties;

	return {
		theme: theme,
		variables: variables,
	} as const;
}

function validateColor(color: string): boolean {
	return /^#[0-9A-F]{6}$/i.test(color);
}

function hslConverter(clr: Color | string): string {
	if (typeof clr === "string") {
		clr = Color(clr);
	}

	const hsl = clr.hsl().string();

	return hsl
		.replace(/hsl/i, "")
		.replace(/\(/g, "")
		.replace(/\)/g, "")
		.replace(/,/g, "");
}
