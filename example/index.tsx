import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Card } from '../src/atoms'

const App = () => {
	return (
		<div>
			<Card variant='top'></Card>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
