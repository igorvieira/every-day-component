import { useState } from 'react'
import './styles.css'

export type Chip = {
  label: string
  value: string
}

export type ChipGroupProps = {
  group: Chip[]
}

const ChipGroup = ({ group }: ChipGroupProps) => {
  const [chips, setChips] = useState<Chip[]>(group)

  const handleRemoveChip = (chip: Chip) => {
    const newChipList = chips.filter((item) => item.value !== chip.value)
    setChips(newChipList)
  }

  return (
    <div className='chip-content'>
      {
        chips?.map((chip) => (
          <div key={chip.value} className='chip'>
            {chip.label}

            <button className='close-button' onClick={() => handleRemoveChip(chip)}>x</button>
          </div>
        ))
      }
    </div>
  )
}

export default ChipGroup