import skillGroups from '../../content/skills.content'
import SectionTitle from '../ui/SectionTitle'

export default function Skills() {
	return (
		<section id='skills'>
			<SectionTitle title='Skills' subtitle='Core areas of strength.' />

			<div className='skills-grid'>
				{skillGroups.map(group => (
					<div key={group.group} className='skill-group'>
						<h4>{group.group}</h4>
						<ul>
							{group.skills.map(s => (
								<li key={s}>{s}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}
