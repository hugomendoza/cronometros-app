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
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormValues, formSchema } from '@/types'
import { colorSchemes } from '@/helpers'
import { useCreateChrono } from '@/hooks'

interface AsideProps {
  isOpen: boolean
  size?: string
}

export const Aside = (props:AsideProps) => {
  const { size, isOpen } = props
  const { onSubmit, setOpenDrawer } = useCreateChrono()

  const defaultValues:FormValues = {
    title: '',
    description: '',
    colorSchema: ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  })

  return (
    <Drawer
      isOpen={isOpen}
      size={size}
      onClose={() => {}}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Agrega un nuevo cronometro</DrawerHeader>
        <DrawerBody>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id='form-chrono'
          >
            <FormControl
              marginBottom={4}
              isInvalid={!!errors.title}
            >
              <FormLabel>Título</FormLabel>
              <Input
                id='title'
                {...register('title')}
              />
              <FormErrorMessage>
                {errors?.title?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              marginBottom={4}
              isInvalid={!!errors.description}
            >
              <FormLabel>Descripción</FormLabel>
              <Textarea
                id='description'
                {...register('description')}
              />
              <FormErrorMessage>
                {errors?.description?.message}
              </FormErrorMessage>
            </FormControl>
            <RadioGroup
              mt={4}
            >
              <FormLabel>Selecciona un color</FormLabel>
              <Stack
                spacing={2}
                direction='row'
              >
                {colorSchemes.map((color) => (
                  <Radio
                    key={color}
                    value={color}
                    colorScheme={color}
                    border={`2px solid ${color}`}
                    size={'lg'}
                    {...register('colorSchema')}
                  />
                ))}
              </Stack>
            </RadioGroup>
          </form>
        </DrawerBody>
        <DrawerFooter
          justifyContent={'flex-start'}
        >
          <ButtonGroup>
            <Button
              type='submit'
              form='form-chrono'
              colorScheme='blue'
            >
              Crear
            </Button>
            <Button
              colorScheme='red'
              onClick={() => setOpenDrawer(false)}
            >
              Cancelar
            </Button>
          </ButtonGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
