import { notFound } from "next/navigation";

import { Post } from "@/@types/post";
import { User } from "@/@types/user";
import { Comment } from "@/@types/comment";
import { ProgressBarLink } from "@/components/ProgressBar";

export default async function PostPage({
	params,
}: {
	params: Promise<{ postId: string }>;
}) {
	const { postId } = await params;

	const postRes = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);
	if (!postRes.ok) return notFound();
	const post: Post = await postRes.json();

	const [userRes, commentsRes] = await Promise.all([
		fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`),
		fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`),
	]);

	const user: User = await userRes.json();
	const comments: Comment[] = await commentsRes.json();

	return (
		<main className="max-w-3xl mx-auto px-4 py-10">
			<article>
				<h1 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
					{post.title}
				</h1>

				<p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
					Escrito por{" "}
					<ProgressBarLink
						href={`/users/${user.id}`}
						className="font-medium text-blue-600 hover:underline dark:text-blue-400"
					>
						{user.name}
					</ProgressBarLink>{" "}
					({user.email})
				</p>

				<div className="text-neutral-900 dark:text-neutral-200 leading-relaxed space-y-4 mb-10 whitespace-pre-line">
					{post.body}
				</div>
			</article>

			<section>
				<h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
					Comentários
				</h2>

				<ul className="space-y-4">
					{comments.map((comment) => (
						<li
							key={comment.id}
							className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4"
						>
							<p className="text-sm text-neutral-700 dark:text-neutral-400">
								<strong>{comment.name}</strong> ({comment.email}
								)
							</p>
							<p className="mt-2 text-neutral-900 dark:text-neutral-200">
								{comment.body}
							</p>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
