import type { ComponentStory } from '@storybook/react'
import { Panel } from './Panel'
import { H2, Paragraph, XStack, Image, YStack } from 'tamagui'

export default {
  title: 'UI/Components/Panel',
  component: Panel,
  argTypes: {}
}

const Template: ComponentStory<typeof Panel> = (args) => {
  return <Panel>123</Panel>
}

export const Primary = Template.bind({})
Primary.args = {}
