import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  useColorMode
} from '@chakra-ui/react'
import { IconMoon, IconSun } from '@tabler/icons-react'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      as='header'
      align='center'
      padding={6}
      maxW={'1280px'}
      margin='0 auto'
    >
      <Box>
        <Heading
          as='h1'
        >
          Cronometros app
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button
          onClick={toggleColorMode}
          colorScheme='gray'
          variant='outline'
          width={10}
          padding={0}
          borderRadius={100}
        >
          { colorMode === 'light' ? <IconSun size={24} /> : <IconMoon size={24} /> }
        </Button>
      </Box>
    </Flex>
  )
}
