import {  ComponentMeta, ComponentStory } from '@storybook/react'

import RadioGroup from '.'

export default {
  title: 'Components/RadioGroup',
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ]
  },
  component: RadioGroup
} as ComponentMeta<typeof RadioGroup>;

export const Default: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />