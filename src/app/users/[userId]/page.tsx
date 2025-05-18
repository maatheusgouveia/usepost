import { notFound } from "next/navigation";

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
}

interface Post {
	id: number;
	userId: number;
	title: string;
	body: string;
}

interface UserPageProps {
	params: Promise<{
		userId: string;
	}>;
}

export default async function UserPage({ params }: UserPageProps) {
	const { userId } = await params;

	const userRes = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	);
	if (!userRes.ok) return notFound();
	const user: User = await userRes.json();

	const postsRes = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
	);
	const posts: Post[] = await postsRes.json();

	return (
		<main className="max-w-4xl mx-auto px-4 py-10">
			<header className="mb-10">
				<h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
					{user.name}
				</h1>
				<p className="text-sm text-neutral-600 dark:text-neutral-400">
					Usuário: <strong>{user.username}</strong> | Email:{" "}
					<a
						href={`mailto:${user.email}`}
						className="text-blue-600 dark:text-blue-400 hover:underline"
					>
						{user.email}
					</a>
				</p>
				<p className="text-sm text-neutral-600 dark:text-neutral-400">
					Telefone: {user.phone} | Website:{" "}
					<a
						href={`https://${user.website}`}
						target="_blank"
						className="text-blue-600 dark:text-blue-400 hover:underline"
						rel="noreferrer"
					>
						{user.website}
					</a>
				</p>
			</header>

			<section>
				<h2 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">
					Posts de {user.name}
				</h2>

				<div className="grid gap-6 sm:grid-cols-2">
					{posts.map((post) => (
						<a
							key={post.id}
							href={`/posts/${post.id}`}
							className="block bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 hover:shadow transition"
						>
							<h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
								{post.title}
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
								{post.body}
							</p>
						</a>
					))}
				</div>
			</section>
		</main>
	);
}
