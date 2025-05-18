import { getTranslations } from "next-intl/server";

import { Post } from "@/@types/post";
import { api } from "@/services/api";
import { ProgressBarLink } from "@/components/ProgressBar";

export default async function Home() {
	const posts = await api<Post[]>("/posts", { method: "GET" });

	const t = await getTranslations("home");

	return (
		<main className="max-w-6xl mx-auto px-4 py-10">
			<h1 className="text-4xl font-bold mb-8 text-center">
				{t("title")}
			</h1>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{posts.map((post) => (
					<ProgressBarLink
						key={post.id}
						href={`/posts/${post.id}`}
						className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-800 p-6 transition hover:scale-[1.02] hover:shadow-lg"
					>
						<h2 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-100">
							{post.title}
						</h2>
						<p className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
							{post.body}
						</p>
					</ProgressBarLink>
				))}
			</div>
		</main>
	);
}
