import profile from '../../content/profile.content'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className='site-footer'>
			<div className='site-footer-inner'>
				<p className='footer-text'>
					© {year} {profile.name}
				</p>

				<div className='footer-links'>
					<a href={profile.links.linkedin} target='_blank' rel='noreferrer'>
						LinkedIn
					</a>
					<a href={profile.links.github} target='_blank' rel='noreferrer'>
						GitHub
					</a>
					<a href={profile.links.email}>Email</a>
				</div>
			</div>
		</footer>
	)
}
