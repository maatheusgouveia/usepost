import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getLocale, getMessages, getTimeZone } from "next-intl/server";

import { Providers } from "./providers";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
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
	const messages = (await getMessages()) as Record<string, string>;

	return (
		<html lang={locale} className='min-h-full'>
			<body className={`${inter.variable} min-h-full antialiased`}>
				<Providers
					locale={locale}
					messages={messages}
					timeZone={timeZone}
				>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
