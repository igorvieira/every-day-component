import {  ComponentMeta, ComponentStory } from '@storybook/react'

import Slider from '.'

export default {
  title: 'Components/Slider',
  component: Slider
} as ComponentMeta<typeof Slider>;

export const Default: ComponentStory<typeof Slider> = (args) => <Slider />