import { styled } from '@stitches/react'
import styles from './CalculatorBody.module.scss'

const Body = styled('div', {
	width: '30%',

	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr 1fr',
	gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
})

const Button = styled('button', {
	color: '#fff',
	background: '#202124',

	border: 'none',
	padding: '1rem',
	fontSize: '1.5rem',
	margin: '0.25rem 0.25rem',
	cursor: 'pointer',

	'&:hover': {
		transform: 'scale(1.1)',
		transition: '0.2s',
	},
})

interface CalculatorBodyProps {
	addValueToEnd: (value: string) => void
	resetDisplayValue: () => void
	doOperations: () => void
}

export default function CalculatorBody({ addValueToEnd, resetDisplayValue, doOperations }: CalculatorBodyProps) {
	return (
		<Body>
			<Button
				onClick={() => {
					resetDisplayValue()
				}}
			>
				C
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('/')
				}}
			>
				/
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('*')
				}}
			>
				*
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('-')
				}}
			>
				-
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('7')
				}}
			>
				7
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('8')
				}}
			>
				8
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('9')
				}}
			>
				9
			</Button>
			<Button
				className={styles.plusButton}
				onClick={() => {
					addValueToEnd('+')
				}}
			>
				+
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('4')
				}}
			>
				4
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('5')
				}}
			>
				5
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('6')
				}}
			>
				6
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('1')
				}}
			>
				1
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('2')
				}}
			>
				2
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('3')
				}}
			>
				3
			</Button>
			<Button
				className={styles.equalButton}
				onClick={() => {
					doOperations()
				}}
			>
				=
			</Button>
			<Button
				className={styles.zeroButton}
				onClick={() => {
					addValueToEnd('0')
				}}
			>
				0
			</Button>
			<Button
				onClick={() => {
					addValueToEnd('.')
				}}
			>
				.
			</Button>
		</Body>
	)
}
