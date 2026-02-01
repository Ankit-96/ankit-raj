export default function SectionTitle({ id, title, subtitle }) {
	return (
		<div className='section-title'>
			{id && <span id={id} className='section-anchor' aria-hidden />}
			<h2>{title}</h2>
			{subtitle && <p className='section-subtitle'>{subtitle}</p>}
		</div>
	)
}
