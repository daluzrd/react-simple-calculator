import { styled } from '@stitches/react'

const Display = styled('div', {
	display: 'flex',
	justifyContent: 'end',
	alignItems: 'end',
	overflow: 'hidden',

	width: 'calc(30% - 0.5rem)',
	height: '5rem',
	margin: '0.25rem',

	fontSize: '1.5rem',
	background: '#202124',

	'> span': {
		color: '#fff',
		fontSize: '2rem',
		margin: '1rem',
	},
})

interface CalculatorDisplayProps {
	displayValue: string
}

export default function CalculatorDisplay({ displayValue }: CalculatorDisplayProps) {
	return (
		<Display>
			<span>{displayValue}</span>
		</Display>
	)
}
