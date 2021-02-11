# @vs-form/datepicker
Datepicker Input Component for @vs-form/tailwind

## Install

```bash
npm install --save @vs-form/tailwind
npm install --save @vs-form/datepicker
npm install --save react-datepicker
npm install --save date-fns
npm install --save-dev @types/react-datepicker
```

## Usage

#### **`index.tsx`**
```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import DateComp from '@vs-form/datepicker'
import { RegisterComponent } from '@vs-form/tailwind'
RegisterComponent('date', DateComp)

ReactDOM.render(<App />, document.getElementById('root'))
```

#### **`App.tsx`**
```tsx
import React from 'react'
import './tailwind.out.css'
import { VsForm, ISchema } from '@vs-form/tailwind'

// define the schema
const schema: ISchema = {
  type: 'card',
  label: 'Example',
  children: [
    {
      type: 'field',
      label: 'Choose Date',
      inputComponent: {
        //@ts-ignore
        type: 'date',
        default() {
          return new Date()
        },
        field: 'date1'
      }
    },
  ]
}

const values = {
  name: 'Bill'
}

const App = () => {
  return <VsForm schema={schema} values={values} />
}

export default App
```


## License

MIT © [vs-form](https://github.com/vs-form)
