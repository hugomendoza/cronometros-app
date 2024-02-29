import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme.ts'

import ChonometerApp from './ChronometerApp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ChonometerApp />
    </ChakraProvider>
  </React.StrictMode>
)
