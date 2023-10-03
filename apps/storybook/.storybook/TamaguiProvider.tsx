import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import { Provider } from 'app/provider2'
import React from 'react'

export function TamaguiProvider({ children }: { children: React.ReactNode }) {
  return (
      <Provider disableRootThemeClass>
        {children}
      </Provider>
  )
}