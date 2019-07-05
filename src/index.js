import { say } from './say'
import React from 'react'
import { render } from 'react-dom'

say('hello whirled')

const App = () => <main>Hello from React</main>

render(<App />, document.getElementById('root'))
