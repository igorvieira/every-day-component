import './styles.css'

export type Option = {
  label: string
  value: string
}

export type SelectProps = {
  options: Option[]
}

const Select = ({options}: SelectProps) => (
  <div className="select-content">
    <select className='select'>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
)

export default Select