import { getTranslations } from "next-intl/server";

import { api } from "@/services/api";
import { Post } from "@/@types/post";
import { User } from "@/@types/user";
import { PostCard } from "@/components/PostCard";

export default async function UserPage({
	params,
}: {
	params: Promise<{ userId: string }>;
}) {
	const { userId } = await params;
	const t = await getTranslations("user");

	const user = await api<User>(`/users/${userId}`);

	const posts = await api<Array<Post>>(`/posts?userId=${userId}`);

	return (
		<main className='mx-auto max-w-4xl px-4 py-10'>
			<header className='mb-10'>
				<h1 className='text-3xl font-bold text-neutral-900 dark:text-neutral-100'>
					{user.name}
				</h1>
				<p className='text-sm text-neutral-600 dark:text-neutral-400'>
					{t("username")}: <strong>{user.username}</strong> |{" "}
					{t("email")}:{" "}
					<a
						href={`mailto:${user.email}`}
						className='text-blue-600 hover:underline dark:text-blue-400'
					>
						{user.email}
					</a>
				</p>
				<p className='text-sm text-neutral-600 dark:text-neutral-400'>
					{t("phone")}: {user.phone} | {t("website")}:{" "}
					<a
						href={`https://${user.website}`}
						target='_blank'
						className='text-blue-600 hover:underline dark:text-blue-400'
						rel='noreferrer'
					>
						{user.website}
					</a>
				</p>
			</header>

			<section>
				<h2 className='mb-6 text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
					{t("postsBy", { name: user.name })}
				</h2>

				<div className='grid gap-6 sm:grid-cols-2'>
					{posts.map(post => (
						<PostCard
							key={post.id}
							id={post.id}
							title={post.title}
							body={post.body}
							author={{ id: user.id, name: user.name }}
							imageUrl={`https://picsum.photos/id/${post.id % 100}/600/400.jpg`}
						/>
					))}
				</div>
			</section>
		</main>
	);
}
