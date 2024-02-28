import { Button, useColorMode } from '@chakra-ui/react'

const ChronometerApp = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <h1>Map</h1>
      <Button
        onClick={toggleColorMode}
        colorScheme='teal'
      >
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </>
  )
}

export default ChronometerApp
