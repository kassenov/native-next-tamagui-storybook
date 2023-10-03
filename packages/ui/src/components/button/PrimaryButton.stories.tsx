import type { ComponentStory } from '@storybook/react'
import { PrimaryButton } from './PrimaryButton'
import { Card, H2, Paragraph, XStack, Image, YStack } from 'tamagui'

export default {
  title: 'UI/Components/PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    onPress: { action: 'pressed' },
  }
}

const Template: ComponentStory<typeof PrimaryButton> = (args) => {
  return <YStack paddingHorizontal="$4" space>
      <Card elevate size="$4" bordered>
        <Card.Header padded>
          <H2>Card Header</H2>
          <Paragraph theme="alt2">Primary Button</Paragraph>
          <YStack space>
            <PrimaryButton {...args}>Active</PrimaryButton>
            <PrimaryButton {...args} disabled={true}>Disabled</PrimaryButton>
        </YStack>
        </Card.Header>
        <Card.Footer padded>
          <XStack flex={1} />
        </Card.Footer>
        <Card.Background backgroundColor="white"/>
      </Card>
    </YStack>
}

export const Primary = Template.bind({})
Primary.args = {
  disabled: false,
  loading: false,
}
