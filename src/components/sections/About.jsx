import SectionTitle from '../ui/SectionTitle'

export default function About() {
	return (
		<section className='section about' aria-labelledby='about-heading'>
			<SectionTitle
				id='about'
				title='About'
				subtitle='Professional focus and background.'
			/>
			<div className='about-content'>
				<p>
					Focus on enterprise-scale GenAI and full-stack platforms. Building
					solutions that scale and deliver measurable impact.
				</p>
			</div>
		</section>
	)
}
