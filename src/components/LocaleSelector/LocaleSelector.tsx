"use client";

import { useTransition, useState } from "react";
import { useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { Locale } from "@/i18n/config";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const locales = [
	{ code: "pt-BR", label: "Português", flag: "🇧🇷" },
	{ code: "en", label: "English", flag: "🇺🇸" },
] as const;

export function LocaleSelector() {
	const [, startTransition] = useTransition();
	const [open, setOpen] = useState(false);

	const locale = useLocale();
	const router = useRouter();

	const selected = locales.find(l => l.code === locale) ?? locales[0];

	const handleSelect = (newLocale: Locale) => {
		if (newLocale === locale) return;

		startTransition(() => {
			setUserLocale(newLocale).then(() => {
				router.refresh();
			});
		});
		setOpen(false);
	};

	return (
		<div className='relative min-w-[56px] text-sm sm:min-w-[120px]'>
			<button
				onClick={() => setOpen(prev => !prev)}
				className='flex w-full cursor-pointer items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-800 shadow-sm transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800'
			>
				<span>{selected.flag}</span>
				<span className='hidden truncate sm:inline'>
					{selected.label}
				</span>
				<ChevronDownIcon
					className={`h-4 w-4 transition-transform ${
						open ? "rotate-180" : "rotate-0"
					}`}
				/>
			</button>

			{open && (
				<ul className='absolute z-50 mt-2 w-full rounded-md border border-neutral-300 bg-white py-1 shadow-lg dark:border-neutral-700 dark:bg-neutral-900'>
					{locales.map(l => (
						<li key={l.code}>
							<button
								onClick={() => handleSelect(l.code)}
								className={`flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left transition hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
									l.code === locale
										? "font-semibold text-blue-600 dark:text-blue-400"
										: "text-neutral-800 dark:text-neutral-100"
								}`}
							>
								<span>{l.flag}</span>
								<span className='invisible sm:visible'>
									{l.label}
								</span>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
