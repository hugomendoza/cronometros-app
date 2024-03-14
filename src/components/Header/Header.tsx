import {
  Box,
  IconButton,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  ButtonGroup,
  Tooltip
} from '@chakra-ui/react'
import { IconMoon, IconPlus, IconSun } from '@tabler/icons-react'

interface Props {
  onOpen: () => void
}

export const Header = ({ onOpen }:Props) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      as='header'
      align='center'
      padding={6}
    >
      <Box>
        <Heading
          as='h1'
        >
          Cronometros app
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup>
        <Tooltip
          label='Añadir nuevo cronometro'
          hasArrow
        >
          <IconButton
            aria-label='toggle color mode'
            onClick={onOpen}
            colorScheme='cyan'
            variant='outline'
            isRound={true}
            icon={<IconPlus size={24} />}
          />
        </Tooltip>
        <IconButton
          aria-label='toggle color mode'
          onClick={toggleColorMode}
          colorScheme='gray'
          variant='outline'
          isRound={true}
          icon={colorMode === 'light' ? <IconSun size={24} /> : <IconMoon size={24} />}
        />
      </ButtonGroup>
    </Flex>
  )
}
