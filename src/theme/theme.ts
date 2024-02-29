import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import '@fontsource/inter'

const config:ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true
}

const theme = extendTheme({
  ...config,
  fonts: { heading: 'Inter', body: 'Inter' }
})

export default theme
