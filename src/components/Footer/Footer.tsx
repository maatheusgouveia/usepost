import { ProgressBarLink } from "../ProgressBar";

export function Footer() {
	return (
		<footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
			<div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
				<p>
					&copy; {new Date().getFullYear()} usepost. Todos os direitos
					reservados.
				</p>

				<div className="mt-2 sm:mt-0 space-x-4">
					<a
						href="https://github.com/maatheusgouveia/usepost"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-blue-600 transition"
					>
						GitHub
					</a>
					<ProgressBarLink
						href="/about"
						className="hover:text-blue-600 transition"
					>
						Sobre
					</ProgressBarLink>
					<ProgressBarLink
						href="/contact"
						className="hover:text-blue-600 transition"
					>
						Contato
					</ProgressBarLink>
				</div>
			</div>
		</footer>
	);
}
