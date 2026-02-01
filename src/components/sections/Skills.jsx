import { skillGroups } from '../../content/skills'
import SectionTitle from '../ui/SectionTitle'

export default function Skills() {
	return (
		<section className='section skills' aria-labelledby='skills-heading'>
			<SectionTitle
				id='skills'
				title='Skills'
				subtitle='Core areas and technologies.'
			/>
			<div className='skills-grid'>
				{skillGroups.map(group => (
					<div key={group.title} className='skill-group'>
						<h3>{group.title}</h3>
						<ul>
							{group.items.map(item => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}
