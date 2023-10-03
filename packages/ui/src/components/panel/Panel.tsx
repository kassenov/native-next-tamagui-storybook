import { Card, H2, Paragraph, Text, styled, Button as TamaguiButton, ButtonProps as TamaguiButtonProps, XStack, YStack } from 'tamagui'

export interface ButtonProps {
  children: string,
}

const StyledButton = styled(TamaguiButton, {
  name: 'Primary_Button',
  borderRadius: 20,
  variants: {
    disabled: {
      true: {
        color: '$colorDisabled',
        backgroundColor: '$backgroundDisabled',

        hoverStyle: {
          backgroundColor: '$backgroundDisabled',
        },

        pressStyle: {
          backgroundColor: '$backgroundDisabled',
        },

        focusStyle: {
          backgroundColor: '$backgroundDisabled',
        },
      },
      false: {},
    },
  }
})

export function Panel({ children, ...props }: ButtonProps & TamaguiButtonProps) {
  return <Card elevate size="$4" bordered>
    <Text>555</Text>
  <Card.Header padded>
    <H2>Test</H2>
    <Paragraph theme="alt2">Primary Button</Paragraph>
    <Text>222</Text>
  </Card.Header>
  <Text>444</Text>
  <Card.Footer padded>
    <XStack flex={1} />
  </Card.Footer>
  <Text>111</Text>
  <Card.Background backgroundColor="white"/>
  <Text>333</Text>
</Card>
}
