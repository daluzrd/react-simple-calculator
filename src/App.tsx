import { styled } from '@stitches/react'
import { useState } from 'react'
import CalculatorBody from './components/CalculatorBody'
import CalculatorDisplay from './components/CalculatorDisplay'

const Calculator = styled('div', {
	display: 'flex',
	height: '100vh',
	flexDirection: 'column',

	justifyContent: 'center',
	alignItems: 'center',
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
			<CalculatorDisplay displayValue={displayValue}></CalculatorDisplay>
			<CalculatorBody
				addValueToEnd={addValueToEnd}
				doOperations={doOperations}
				resetDisplayValue={resetDisplayValue}
			></CalculatorBody>
		</Calculator>
	)
}

export default App
