import { profile } from '../../content/profile'
import Button from '../ui/Button'
import Link from '../ui/Link'

export default function Hero() {
	return (
		<section className='hero'>
			<h1>{profile.name}</h1>
			<p className='hero-headline'>{profile.headline}</p>
			<p className='hero-tagline'>{profile.tagline}</p>
			<div className='hero-actions'>
				<Button href='#contact'>Get in touch</Button>
				{profile.links.map(link => (
					<Link key={link.label} href={link.href} external={link.external}>
						{link.label}
					</Link>
				))}
			</div>
		</section>
	)
}
