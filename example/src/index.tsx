
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import DateComp from 'datepicker'
import { RegisterComponent } from '@vs-form/tailwind'
RegisterComponent('date', DateComp)


ReactDOM.render(<App />, document.getElementById('root'))
