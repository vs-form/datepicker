import React from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import de from 'date-fns/locale/de'
import fr from 'date-fns/locale/fr'
import it from 'date-fns/locale/it'

import { ElementProps, IDefaultStyles, IDataComponent } from '@vs-form/tailwind'

registerLocale('de', de)
registerLocale('fr', fr)
registerLocale('it', it)

export interface IDateComponentProps extends IDataComponent {
  type: 'date'
  label?: string
  locale?: string
  dateFormat?: string
  placeholder?: string
}

export const DateComp = (props: ElementProps) => {
  const { data, themeColor, addProps, validateOnBlur } = props
  const comp = (props.comp as unknown) as IDateComponentProps
  comp.dataType = 'date'
  const locale = comp.locale || 'en'
  const dateFormat = comp.dateFormat || 'MM/dd/yyyy'

  const style: IDefaultStyles = {
    main: {
      classes: {
        margin: 'mx-2',
        padding: 'px-3 py-2',
        display: 'flex',
        position: 'relative',
        boxShadow: 'shadow',
        borderWidth: 'border',
        borderRadius: 'rounded',
        lineHeight: 'leading-tight',
        focus: {
          boxShadow: 'focus:shadow-outline',
          outline: 'focus:outline-none',
        },
      },
      class: themeColor().focusWiBorderColor,
    },
    styleInput: {
      classes: {
        width: 'w-full',
        textColor: 'text-gray-700',
        borderWidth: 'border-0',
        appearance: 'appearance-none',
        padding: 'py-1 px-4 pr-8',
        focus: {
          outline: 'focus:outline-none',
          borderWidth: 'focus:border-0',
          appearance: 'focus:appearance-none',
          boxShadow: 'focus:shadow-none',
          ringWidth: 'focus:ring-0',
        },
      },
    },
  }

  const [startDate, setStartDate] = React.useState(data.value())

  const handleChange = (value: Date) => {
    setStartDate(value)
    data.updateValue(value)
    validateOnBlur()
  }

  const m = props.mergeStyles(style)

  return (
    <div {...m.main}>
      <DatePicker
        {...m.styleInput}
        locale={locale}
        dateFormat={dateFormat}
        placeholderText={comp.placeholder}
        selected={startDate}
        onChange={(date: Date) => handleChange(date)}
        onBlur={validateOnBlur}
        {...addProps()}
      />
    </div>
  )
}
