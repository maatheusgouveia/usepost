import { getTranslations } from "next-intl/server";

import { Post } from "@/@types/post";
import { User } from "@/@types/user";
import { api } from "@/services/api";
import { PostCard } from "@/components/PostCard";

export default async function Home() {
	const posts = await api<Post[]>("/posts", { method: "GET" });
	const users = await api<User[]>("/users", { method: "GET" });

	const t = await getTranslations("home");

	return (
		<main className='mx-auto max-w-6xl px-4 py-10'>
			<h1 className='mb-8 text-center text-4xl font-bold'>
				{t("title")}
			</h1>

			<div className='grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{posts.map(post => {
					const author = users.find(u => u.id === post.userId);
					if (!author) return null;

					return (
						<PostCard
							key={post.id}
							id={post.id}
							title={post.title}
							body={post.body}
							author={{ id: author.id, name: author.name }}
							imageUrl={`https://picsum.photos/id/${post.id % 100}/600/400.jpg`}
						/>
					);
				})}
			</div>
		</main>
	);
}
