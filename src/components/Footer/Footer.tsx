import { getTranslations } from "next-intl/server";
import { ProgressBarLink } from "../ProgressBar";

export async function Footer() {
	const t = await getTranslations("footer");

	return (
		<footer className='mt-16 border-t border-neutral-200 dark:border-neutral-800'>
			<div className='mx-auto flex max-w-6xl flex-col items-center justify-between px-4 py-6 text-sm text-neutral-600 sm:flex-row dark:text-neutral-400'>
				<p>
					&copy; {new Date().getFullYear()} usepost. {t("rights")}
				</p>

				<div className='mt-2 space-x-4 sm:mt-0'>
					<a
						href='https://github.com/maatheusgouveia/usepost'
						target='_blank'
						rel='noopener noreferrer'
						className='transition hover:text-blue-600'
					>
						GitHub
					</a>

					<ProgressBarLink
						href='/about'
						className='transition hover:text-blue-600'
					>
						{t("about")}
					</ProgressBarLink>
				</div>
			</div>
		</footer>
	);
}
