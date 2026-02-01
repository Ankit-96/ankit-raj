import Link from '../ui/Link'

export default function Header() {
	return (
		<header>
			<nav>
				<Link href='#about'>About</Link>
				<Link href='#work'>Work</Link>
				<Link href='#skills'>Skills</Link>
				<Link href='#contact'>Contact</Link>
			</nav>
		</header>
	)
}
