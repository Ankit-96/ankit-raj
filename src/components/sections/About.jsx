import profile from '../../content/profile.content'
import SectionTitle from '../ui/SectionTitle'

export default function About() {
	return (
		<section id='about'>
			<SectionTitle
				title='About'
				subtitle='Professional focus and background.'
			/>

			{profile.summary?.map((line, idx) => (
				<p key={idx}>{line}</p>
			))}
		</section>
	)
}
