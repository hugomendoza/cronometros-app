import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'

interface AsideProps {
  isOpen: boolean,
  onClose: () => void
}

export const Aside = (props: AsideProps) => {
  return (
    <Drawer
      size={'sm'}
      {...props}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Agrega un nuevo cronometro</DrawerHeader>
        <DrawerBody>
          <form>
            <Box>
              <FormLabel htmlFor='name'>Description</FormLabel>
              <Input id='name' />
            </Box>
            <Box>
              <FormLabel htmlFor='description'>Description</FormLabel>
              <Textarea id='description' />
            </Box>
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
