"use client";

import { PropsWithChildren } from "react";
import { ToastProvider } from "@heroui/toast";
import { HeroUIProvider } from "@heroui/react";
import { NextIntlClientProvider } from "next-intl";

import { ProgressBar } from "@/components/ProgressBar";

interface ProvidersProps extends PropsWithChildren {
	locale: string;
	timeZone: string;
	messages: { [key: string]: string };
}

export function Providers({
	children,
	locale,
	timeZone,
	messages,
}: ProvidersProps) {
	return (
		<HeroUIProvider disableRipple>
			<NextIntlClientProvider
				locale={locale}
				messages={messages}
				timeZone={timeZone}
			>
				<ProgressBar className="fixed top-0 h-1 rounded-r bg-primary">
					<ToastProvider
						toastProps={{ shouldShowTimeoutProgress: true }}
						placement="top-right"
						toastOffset={65}
					/>

					{children}
				</ProgressBar>
			</NextIntlClientProvider>
		</HeroUIProvider>
	);
}
