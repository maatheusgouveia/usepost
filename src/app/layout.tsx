import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getLocale, getMessages, getTimeZone } from "next-intl/server";

import { Providers } from "./providers";

import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "use post",
	description: "A blog about technology, design, and life.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const timeZone = await getTimeZone();
	const messages = (await getMessages()) as { [key: string]: string };

	return (
		<html lang={locale} className="min-h-full">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full`}
			>
				<Providers
					locale={locale}
					messages={messages}
					timeZone={timeZone}
				>
					{children}
				</Providers>
			</body>
		</html>
	);
}
