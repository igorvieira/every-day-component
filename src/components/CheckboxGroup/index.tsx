import { useState } from 'react'
import Button from '../Button'
import './styles.css'

export type Options = {
  label: string
  value: string
}

export type CheckboxProps = {
  title: string
  subtitle?: string
  options: Options[]
}

const Checkbox = ({ title, subtitle, options }: CheckboxProps) => {
  const [selected, setSelected] = useState<Options[]>([])

  const isCheked = (option: Options) => {
    return selected.some((item) => item.value === option.value)
  }

  const handleSelect = (option: Options) => {
    if (isCheked(option)) {
      setSelected(selected.filter((item) => item.value !== option.value))
    } else {
      setSelected([...selected, option])
    }
  }

  const handleSubmit = () => {
    console.log(selected)
  }

  return (
    <div className="container-checkbox">
      <div className="header">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>

      <ul className="list">
        {options.map((option) => (
          <li key={option.value}>
            <div className="checkbox">
              <input
                type="checkbox"
                checked={isCheked(option)}
                id={option.value}
                name={option.value}
                value={option.value}
                onChange={() => handleSelect(option)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          </li>
        ))}
      </ul>

      <div className="action">
        <Button label="Submit" onClick={handleSubmit} isLarge />
      </div>
    </div>
  )
}

export default Checkbox
