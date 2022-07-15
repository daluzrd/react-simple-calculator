import { styled } from '@stitches/react'
import { useState } from 'react'
import styles from './App.module.scss'

const Calculator = styled('div', {
	display: 'flex',
	height: '100vh',
	flexDirection: 'column',

	justifyContent: 'center',
	alignItems: 'center',
})

const CalculatorDisplay = styled('div', {
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

const CalculatorBody = styled('div', {
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

function App() {
	const [displayValue, setDisplayValue] = useState<string>('0')

	const resetDisplayValue = () => {
		setDisplayValue('0')
	}

	const addValueToEnd = (value: string) => {
		if (displayValue === '0') updateDisplayValue(value)
		else setDisplayValue(displayValue + value)
	}

	const updateDisplayValue = (value: string) => {
		setDisplayValue(value)
	}

	const doOperations = () => {
		setDisplayValue(eval(displayValue))
	}

	return (
		<Calculator>
			<CalculatorDisplay>
				<span>{displayValue}</span>
			</CalculatorDisplay>
			<CalculatorBody>
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
			</CalculatorBody>
		</Calculator>
	)
}

export default App
