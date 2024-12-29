import "./globals.css";
import { cn } from "@/lib/utils";
import font_classes from "@/lib/fonts";
import { root_metadata } from "@/constants/metadata";
import { cookies } from "next/headers";
import getColors from "@/lib/colors";

export const metadata = root_metadata;

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookie = await cookies();

	const themeColors = getColors(cookie.get("theme-color")?.value);

	return (
		<html lang="en">
			<body
				className={cn(font_classes, "antialiased")}
				style={themeColors.variables}
			>
				{children}
			</body>
		</html>
	);
}
