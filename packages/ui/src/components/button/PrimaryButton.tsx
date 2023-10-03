import { Spinner, styled, Button as TamaguiButton, ButtonProps as TamaguiButtonProps } from 'tamagui'

export interface ButtonProps {
  children: string,
  disabled: boolean,
  loading: boolean,
  onPress: () => void,
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

export function PrimaryButton({ children, loading, disabled, onPress, ...props }: ButtonProps & TamaguiButtonProps) {
  return <StyledButton width="100%" disabled={disabled} onPress={onPress} {...props}>
    {loading ? <Spinner size="small" color="$color" />: null}
    {children}
  </StyledButton>
}
