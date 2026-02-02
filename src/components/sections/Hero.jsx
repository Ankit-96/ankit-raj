import profile from '../../content/profile.content'
import Button from '../ui/Button'
import Link from '../ui/Link'

export default function Hero() {
	return (
		<section className='hero'>
			<h1>{profile.name}</h1>
			<p className='hero-headline'>{profile.title}</p>
			<p className='hero-tagline'>{profile.subtitle}</p>

			<div className='hero-actions'>
				<Button href='#contact'>Get in touch</Button>

				{Object.entries(profile.links).map(([key, href]) => (
					<Link key={key} href={href} external={href?.startsWith('http')}>
						{key.charAt(0).toUpperCase() + key.slice(1)}
					</Link>
				))}
			</div>
		</section>
	)
}
