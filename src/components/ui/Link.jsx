export default function Link({ href, children, external, ...props }) {
	const isExternal = external ?? href?.startsWith('http')
	const attrs = isExternal
		? { target: '_blank', rel: 'noopener noreferrer' }
		: {}

	return (
		<a href={href} {...attrs} {...props}>
			{children}
		</a>
	)
}
