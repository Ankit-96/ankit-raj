import { profile } from '../../content/profile.content'
import SectionTitle from '../ui/SectionTitle'
import Link from '../ui/Link'

export default function Contact() {
	return (
		<section className='section contact' aria-labelledby='contact-heading'>
			<SectionTitle
				id='contact'
				title='Contact'
				subtitle='Reach out for collaboration or inquiries.'
			/>
			<div className='contact-links'>
				{profile.links.map(link => (
					<Link
						key={link.label}
						href={link.href}
						external={link.external}
						className='contact-link'
					>
						{link.label}
					</Link>
				))}
			</div>
		</section>
	)
}
