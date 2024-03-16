import { useEffect } from 'react'
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
import { useCreateChrono } from '@/hooks'
import { colorSchemes } from '@/helpers'

import { FormValues, formSchema } from '@/types'

interface AsideProps {
  isOpen: boolean
  size?: string
}

export const Aside = (props:AsideProps) => {
  const { size, isOpen } = props
  const {
    onSubmit,
    editChrono,
    activeChrono,
    setOpenDrawer,
    editChronometer
  } = useCreateChrono()

  const { title, description, colorSchema } = activeChrono

  const defaultValues:FormValues = {
    title: '',
    description: '',
    colorSchema: ''
  }

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: {
      errors,
      isSubmitSuccessful
    }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful, reset])

  useEffect(() => {
    if (editChrono) {
      setValue('title', title)
      setValue('description', description)
      setValue('colorSchema', colorSchema)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editChrono, activeChrono])

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
              defaultValue={colorSchema}
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
              {`${editChrono ? 'Guardar' : 'Crear'}`}
            </Button>
            <Button
              colorScheme='red'
              onClick={() => {
                setOpenDrawer(false)
                editChronometer(false)
                reset(defaultValues)
              }}
            >
              Cancelar
            </Button>
          </ButtonGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
