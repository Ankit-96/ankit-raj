export default function Container({ children }) {
	return (
		<div
			style={{
				maxWidth: '960px',
				margin: '0 auto',
				padding: '0 20px',
			}}
		>
			{children}
		</div>
	)
}
