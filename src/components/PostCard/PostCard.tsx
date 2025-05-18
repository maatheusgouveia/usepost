"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { ProgressBarLink } from "../ProgressBar";

interface PostCardProps {
	id: number;
	title: string;
	body: string;
	author: {
		id: number;
		name: string;
	};
	imageUrl: string;
}

export function PostCard({ id, title, body, author, imageUrl }: PostCardProps) {
	const t = useTranslations("post");

	const wordCount = body.trim().split(/\s+/).length;
	const readTime = Math.max(1, Math.ceil(wordCount / 200));

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay: id * 0.03 }}
		>
			<ProgressBarLink
				href={`/posts/${id}`}
				className='block h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:scale-[1.02] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-neutral-800 dark:bg-neutral-900'
			>
				<Image
					src={imageUrl}
					alt={`Imagem de ${title}`}
					width={600}
					height={300}
					className='h-48 w-full object-cover'
					loading='lazy'
					placeholder='empty'
				/>

				<div className='flex h-full flex-col justify-between p-6'>
					<div>
						<h2 className='mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-100'>
							{title}
						</h2>

						<p className='mb-4 line-clamp-3 text-neutral-600 dark:text-neutral-400'>
							{body}
						</p>
					</div>

					<div className='mt-auto flex items-center justify-between pt-2 text-sm text-neutral-500 dark:text-neutral-400'>
						<span>{t("byAuthor", { name: author.name })}</span>
						<span>{t("readTime", { minutes: readTime })}</span>
					</div>
				</div>
			</ProgressBarLink>
		</motion.div>
	);
}
