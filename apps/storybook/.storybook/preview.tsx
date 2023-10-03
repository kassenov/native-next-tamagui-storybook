import '@tamagui/core/reset.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import 'raf/polyfill'
import { TamaguiProvider } from './TamaguiProvider'

import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [],
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [
  (Story: any, args: any) => {
    return (
      <>
      <TamaguiProvider>
        <Story />
      </TamaguiProvider>
      </>
    )
  },
]
