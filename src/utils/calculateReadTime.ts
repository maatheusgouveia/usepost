export function calculateReadTime(text: string, wordsPerMinute = 200): number {
	const wordCount = text.trim().split(/\s+/).length;
	return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
