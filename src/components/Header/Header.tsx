"use client";

import { useTranslations } from "next-intl";
import { ProgressBarLink } from "../ProgressBar";
import { LocaleSelector } from "../LocaleSelector";

export function Header() {
	const t = useTranslations("header");

	return (
		<header className="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
			<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
				<ProgressBarLink
					href="/"
					className="text-xl font-bold text-neutral-900 dark:text-white"
				>
					use<span className="text-blue-600">post</span>
				</ProgressBarLink>

				<div className="flex items-center gap-4">
					<nav className="space-x-4 hidden sm:flex">
						<ProgressBarLink
							href="/"
							className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 transition"
						>
							{t("home")}
						</ProgressBarLink>
						<ProgressBarLink
							href="/about"
							className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 transition"
						>
							{t("about")}
						</ProgressBarLink>
					</nav>

					<LocaleSelector />
				</div>
			</div>
		</header>
	);
}
