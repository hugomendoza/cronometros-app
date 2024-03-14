import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import ChonometerApp from './ChronometerApp.tsx'
import theme from './theme/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ChonometerApp />
    </ChakraProvider>
  </React.StrictMode>
)
