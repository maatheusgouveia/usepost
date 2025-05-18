import { getTranslations } from "next-intl/server";

import { api } from "@/services/api";
import { Post } from "@/@types/post";
import { User } from "@/@types/user";
import { Comment } from "@/@types/comment";
import { ProgressBarLink } from "@/components/ProgressBar";
import { calculateReadTime } from "@/utils/calculateReadTime";

export default async function PostPage({
	params,
}: {
	params: Promise<{ postId: string }>;
}) {
	const { postId } = await params;
	const t = await getTranslations("post");

	const post = await api<Post>(`/posts/${postId}`);

	const [user, comments] = await Promise.all([
		api<User>(`/users/${post.userId}`),
		api<Array<Comment>>(`/posts/${post.id}/comments`),
	]);

	const readTime = calculateReadTime(post.body);

	return (
		<main className='mx-auto max-w-6xl px-4 py-10'>
			<article>
				<h1 className='mb-2 text-3xl font-bold text-neutral-900 dark:text-neutral-100'>
					{post.title}
				</h1>

				<p className='mb-6 text-sm text-neutral-600 dark:text-neutral-400'>
					{t("writtenBy")}{" "}
					<ProgressBarLink
						href={`/users/${user.id}`}
						className='font-medium text-blue-600 hover:underline dark:text-blue-400'
					>
						{user.name}
					</ProgressBarLink>{" "}
					({user.email}) •{" "}
					<span className='whitespace-nowrap'>
						{t("readTime", { minutes: readTime })}
					</span>
				</p>

				<div className='mb-10 space-y-4 leading-relaxed whitespace-pre-line text-neutral-900 dark:text-neutral-200'>
					{post.body}
				</div>
			</article>

			<section>
				<h2 className='mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
					{t("commentsTitle")}
				</h2>

				<ul className='space-y-4'>
					{comments.map(comment => (
						<li
							key={comment.id}
							className='rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900'
						>
							<p className='text-sm text-neutral-700 dark:text-neutral-400'>
								<strong>{comment.name}</strong> ({comment.email}
								)
							</p>
							<p className='mt-2 text-neutral-900 dark:text-neutral-200'>
								{comment.body}
							</p>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
