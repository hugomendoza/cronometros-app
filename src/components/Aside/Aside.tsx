import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea
} from '@chakra-ui/react'

interface AsideProps {
  isOpen: boolean
  onClose: () => void
  size?: string
}

export const Aside = (props:AsideProps) => {
  const { isOpen, onClose, size } = props

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      size={size}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Agrega un nuevo cronometro</DrawerHeader>
        <DrawerBody>
          <form id="form">
            <FormControl id='name'>
              <FormLabel>Description</FormLabel>
              <Input autoFocus />
            </FormControl>
            <FormControl id='description'>
              <FormLabel>Description</FormLabel>
              <Textarea />
            </FormControl>
            <RadioGroup
              mt={4}
            >
              <Stack
                spacing={2}
                direction='row'
              >
                <Radio value='1' />
                <Radio value='2' />
                <Radio value='3' />
                <Radio value='4' />
              </Stack>
            </RadioGroup>
          </form>
        </DrawerBody>
        <DrawerFooter>
          <ButtonGroup>
            <Button
              type='submit'
              form='form'
              colorScheme='blue'
            >
              Crear
            </Button>
            <Button>
              Cancelar
            </Button>
          </ButtonGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
