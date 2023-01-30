import { ComponentMeta, ComponentStory } from '@storybook/react'

import Accordion from '.'
import { faqs } from './faqs'

export default {
  title: 'Components/Accordion',
  args: {
    faqs: faqs
  },
  component: Accordion
} as ComponentMeta<typeof Accordion>

export const Default: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
)
