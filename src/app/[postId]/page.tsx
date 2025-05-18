interface PostPageProps {
	params: Promise<{
		postId: string;
	}>;
}

export default async function PostPage({ params }: PostPageProps) {
	const { postId } = await params;

	const post = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);

	console.log("post", await post.json());

	return (
		<div>
			<h1>Post ID: {postId}</h1>
			<p>This is the post content.</p>
		</div>
	);
}
