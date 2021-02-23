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
      label: 'Name',
      inputComponent: {
        type: 'input',
        placeholder: 'Name..',
        field: 'name',
      }
    },
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
    {
      type: 'label',
      label: 'German Date-Format'
    },
    {
      type: 'divider'
    },
    {
      type: 'field',
      label: 'Datum auswählen',
      inputComponent: {
        //@ts-ignore
        type: 'date',
        required: true,
        dateFormat: 'dd.MM.yyyy',
        locale: 'de',
        field: 'date2'
      }
    },

    {
      type: 'button',
      label: 'Save',
      onClick({ sm }) {
        // alert the values (sm is the instance of the SchemaManager)
        sm.validateAll(true)
        alert(JSON.stringify(sm.Values, null, 2))
      }
    }
  ]
}

const values = {
  name: 'Bill'
}

const App = () => {
  return <VsForm schema={schema} values={values} />
}

export default App
