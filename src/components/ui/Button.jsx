export default function Button({
	children,
	href,
	variant = 'primary',
	...props
}) {
	const className = `btn btn--${variant}`

	if (href) {
		return (
			<a href={href} className={className} {...props}>
				{children}
			</a>
		)
	}

	return (
		<button type='button' className={className} {...props}>
			{children}
		</button>
	)
}
