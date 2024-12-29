import { Dongle, Dosis, Finlandica, Inter } from "next/font/google";
import { cn } from "../utils";

export const brand = Finlandica({
	adjustFontFallback: true,
	display: "swap",
	fallback: ["sans-serif"],
	preload: true,
	style: ["normal", "italic"],
	subsets: ["latin"],
	variable: "--font-brand",
	weight: ["400", "500", "600", "700"],
});

export const root = Inter({
	adjustFontFallback: true,
	display: "swap",
	fallback: ["sans-serif"],
	preload: true,
	style: ["normal", "italic"],
	subsets: ["latin"],
	variable: "--font-text",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const primary = Dosis({
	adjustFontFallback: true,
	display: "swap",
	fallback: ["sans-serif"],
	preload: true,
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-primary",
	weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const secondary = Dongle({
	adjustFontFallback: true,
	display: "swap",
	fallback: ["sans-serif"],
	preload: true,
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-secondary",
	weight: ["300", "400", "700"],
});

const font_classes = cn(
	root.className,
	root.variable,
	brand.variable,
	primary.variable,
	secondary.variable
);

export default font_classes;
