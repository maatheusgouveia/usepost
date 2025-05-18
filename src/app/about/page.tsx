import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
	const t = await getTranslations("about");

	return (
		<main className='mx-auto max-w-6xl px-4 py-10 text-neutral-800 dark:text-neutral-200'>
			<div className='mb-8 flex flex-col items-center gap-6 sm:flex-row'>
				<div className='relative h-32 w-32 overflow-hidden rounded-full border border-neutral-200 shadow-md dark:border-neutral-700'>
					<Image
						src='/images/profile.jpeg'
						alt='Foto de perfil'
						fill
						className='object-cover'
						sizes='(max-width: 640px) 128px, 128px'
						priority
					/>
				</div>

				<h1 className='text-center text-4xl font-bold text-neutral-900 sm:text-left dark:text-white'>
					{t("title")}
				</h1>
			</div>

			<div className='space-y-6 text-lg leading-relaxed'>
				<p>{t("paragraph1")}</p>
				<p>{t("paragraph2")}</p>
				<p>{t("paragraph3")}</p>
				<p>{t("paragraph4")}</p>
			</div>
		</main>
	);
}
