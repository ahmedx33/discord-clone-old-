import Link from "next/link";

export default function Nav() {
	return (
		<nav className="flex items-center text-white">
			<ul className="flex gap-4 items-center">
				<li>
					<Link href="/download">Download</Link>
				</li>
				<li>
					<Link href="/nitro">Nitro</Link>
				</li>
				<li>
					<Link href="/discover">Discover</Link>
				</li>
				<li>
					<Link href="/support">Safety</Link>
				</li>
				<li>
					<Link href="/support">support</Link>
				</li>
				<li>
					<Link href="/blog">blog</Link>
				</li>
				<li>
					<Link href="/careers">careers</Link>
				</li>
			</ul>
		</nav>
	);
}
