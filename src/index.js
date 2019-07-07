import { hot } from 'react-hot-loader/root'
import { say } from './say'
import React from 'react'
import { render } from 'react-dom'

say('hello whirled')

const App = hot(() => <main>Hello from React</main>)

render(<App />, document.getElementById('root'))
