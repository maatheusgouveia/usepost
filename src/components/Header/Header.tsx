import { ProgressBarLink } from "../ProgressBar";

export function Header() {
	return (
		<header className="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
			<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
				<ProgressBarLink
					href="/"
					className="text-xl font-bold text-neutral-900 dark:text-white"
				>
					use<span className="text-blue-600">post</span>
				</ProgressBarLink>

				<nav className="space-x-4 hidden sm:flex">
					<ProgressBarLink
						href="/"
						className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 transition"
					>
						Início
					</ProgressBarLink>
					<ProgressBarLink
						href="/sobre"
						className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 transition"
					>
						Sobre
					</ProgressBarLink>
				</nav>
			</div>
		</header>
	);
}
