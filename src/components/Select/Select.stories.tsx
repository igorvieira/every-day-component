import {  ComponentMeta, ComponentStory } from '@storybook/react'

import Select from '.'

export default {
  title: 'Components/Select',
  args: {
    options: [
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' },
    ],
  },
  component: Select
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (args) => <Select {...args} />