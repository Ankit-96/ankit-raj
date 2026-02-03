const nav = [
	{ label: 'About', href: '#about' },
	{ label: 'Work', href: '#work' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Contact', href: '#contact' },
]

export default function Header() {
	return (
		<header className='site-header'>
			<nav className='site-nav'>
				<div className='site-brand'>AR</div>

				<div className='site-links'>
					{nav.map(item => (
						<a key={item.href} href={item.href} className='site-link'>
							{item.label}
						</a>
					))}
				</div>
			</nav>
		</header>
	)
}
