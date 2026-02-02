import workItems from '../../content/work.content'
import SectionTitle from '../ui/SectionTitle'

export default function Work() {
	return (
		<section id='work'>
			<SectionTitle
				title='Selected Work'
				subtitle='Highlights from recent work.'
			/>

			<div className='work-list'>
				{workItems.map((item, idx) => (
					<article key={`${item.title}-${idx}`} className='work-card'>
						<div className='work-head'>
							<h4>{item.title}</h4>
							<span className='work-year'>{item.year}</span>
						</div>

						<p className='work-desc'>{item.description}</p>

						<div className='tag-row'>
							{item.tags?.map(t => (
								<span key={t} className='tag'>
									{t}
								</span>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
