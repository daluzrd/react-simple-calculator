import { useState } from 'react'

import { styled } from '@stitches/react'

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
	const [operationsSaved, setOperationsSaved] = useState('')

	const resetOperationsSaved = () => {
		setOperationsSaved('')
	}

	const resetDisplayValue = () => {
		setDisplayValue('0')
		resetOperationsSaved()
	}

	const addValueToEnd = (value: string) => {
		if (displayValue === '0') updateDisplayValue(value)
		else setDisplayValue(displayValue + value)
	}

	const saveOperations = (operator: string) => {
		if (operator !== '=') {
			setOperationsSaved(operationsSaved + displayValue + operator)
			setDisplayValue('0')
		} else {
			setDisplayValue(eval(`${operationsSaved}${displayValue}`))
			resetOperationsSaved()
		}
	}

	const updateDisplayValue = (value: string) => {
		setDisplayValue(value)
	}

	return (
		<Calculator>
			<CalculatorDisplay displayValue={displayValue}></CalculatorDisplay>
			<CalculatorBody
				addValueToEnd={addValueToEnd}
				saveOperations={saveOperations}
				resetDisplayValue={resetDisplayValue}
			></CalculatorBody>
		</Calculator>
	)
}

export default App
