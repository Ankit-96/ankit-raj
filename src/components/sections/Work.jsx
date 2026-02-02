import { work } from '../../content/work.content'
import SectionTitle from '../ui/SectionTitle'
import Link from '../ui/Link'

export default function Work() {
	return (
		<section className='section work' aria-labelledby='work-heading'>
			<SectionTitle
				id='work'
				title='Selected Work'
				subtitle='Highlights from recent projects.'
			/>
			<ul className='work-list'>
				{work.map(item => (
					<li key={item.id} className='work-item'>
						<Link href={item.href}>
							<strong>{item.title}</strong>
							<span className='work-year'>{item.year}</span>
						</Link>
						<p>{item.description}</p>
						<ul className='work-tags'>
							{item.tags.map(tag => (
								<li key={tag}>{tag}</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	)
}
