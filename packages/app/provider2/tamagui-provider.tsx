/* eslint-disable turbo/no-undeclared-env-vars */
import { TamaguiProvider, TamaguiProviderProps } from '@my/ui/src'
import { useColorScheme } from 'react-native'
import config from '../tamagui.config'

// without <NavigationProvider>
// this exported Provider is useful for tests

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme()
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS={!process.env.STORYBOOK}
      defaultTheme={'light'}
      {...rest}
    >
      {children}
    </TamaguiProvider>
  )
}
