import profile from '../../content/profile.content'
import SectionTitle from '../ui/SectionTitle'

export default function Contact() {
	const links = profile.links || {}

	return (
		<section id='contact'>
			<SectionTitle title='Contact' subtitle='Best ways to reach me.' />

			<div className='contact-links'>
				<a href={links.linkedin} target='_blank' rel='noreferrer'>
					LinkedIn
				</a>
				<a href={links.github} target='_blank' rel='noreferrer'>
					GitHub
				</a>
				<a href={links.email}>Email</a>
			</div>
		</section>
	)
}
