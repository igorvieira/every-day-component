import {  ComponentMeta, ComponentStory } from '@storybook/react'

import ChipGroup from '.'

export default {
  title: 'Components/ChipGroup',
  args: {
    group: [
      { label: 'Chip 1', value: 'chip-1' },
      { label: 'Chip 2', value: 'chip-2' },
      { label: 'Chip 3', value: 'chip-3' },
      { label: 'Chip 4', value: 'chip-4' },
      { label: 'Chip 5', value: 'chip-5' }
    ]
  },
  component: ChipGroup
} as ComponentMeta<typeof ChipGroup>;

export const Default: ComponentStory<typeof ChipGroup> = (args) => <ChipGroup {...args} />