import './styles.css'

export type ButtonProps = {
  label?: string
  isLarge?: boolean
  onClick?: () => void
}

const Button = ({ label, onClick, isLarge }: ButtonProps) => {
  return (
    <button
      className={`${isLarge ? 'button button-large' : 'button'}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
