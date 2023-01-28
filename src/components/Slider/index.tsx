import { useState } from 'react'
import './styles.css'


const Slider = () => {

  const [value, setValue] = useState(0)

  const getBackgroundSliderRunnable = () => {
    return { backgroundSize: `${value}%` }
  }

  return (
    <div className='content-slider'>
      <input
        type="range"
        min="0"
        onChange={(e) => setValue(parseInt(e.target.value))}
        value={value}
        style={getBackgroundSliderRunnable()}
      />
      <div>
      🔊 {value}
      </div>
    </div>
  )
}

export default Slider