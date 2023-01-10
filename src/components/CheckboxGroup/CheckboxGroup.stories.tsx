import {  ComponentMeta, ComponentStory } from '@storybook/react'

import CheckboxGroup from '.'

export default {
  title: 'Components/CheckboxGroup',
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ]
  },
  component: CheckboxGroup
} as ComponentMeta<typeof CheckboxGroup>;

export const Default: ComponentStory<typeof CheckboxGroup> = (args) => <CheckboxGroup {...args} />