import useChronometerStore from '@/store/store'
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

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { setOpenDrawer } = useChronometerStore(state => state)

  const onOpenDrawer = () => {
    setOpenDrawer(true)
  }

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
            onClick={onOpenDrawer}
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
