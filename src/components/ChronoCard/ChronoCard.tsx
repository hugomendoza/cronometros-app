import { zeroPad } from '@/helpers'
import { useHandleChrono } from '@/hooks'
import { Chronometer } from '@/types'
import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  IconButton,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import {
  IconEdit,
  IconGridDots,
  IconPlayerPause,
  IconPlayerPlay,
  IconTrash
} from '@tabler/icons-react'

export const ChronoCard = (props:Chronometer) => {
  const {
    title,
    description,
    colorSchema
  } = props

  const { startChrono, timer, running } = useHandleChrono()

  const {
    horas,
    minutos,
    segundos
  } = timer

  const color = useColorModeValue(`${colorSchema}.400`, `${colorSchema}.200`)

  return (
    <Card>
      <CardHeader
        padding={4}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'self-start'}
        gap={5}
      >
        <Box>
          <Heading
            as={'h3'}
            noOfLines={1}
            size={'sm'}
            color={`${color === '' ? 'linkedin' : color}`}
          >
            {title}
          </Heading>
          <Text
            fontSize={'sm'}
            color={`${color === '' ? 'linkedin' : color}`}
          >
            {description}
          </Text>
        </Box>
        <Box
          as='button'
          aria-label='Drag and drop'
          padding={0}
          cursor={'grab'}
        >
          <IconGridDots color='gray' />
        </Box>
      </CardHeader>
      <CardBody
        textAlign={'center'}
        padding={4}
      >
        <Text
          fontSize={'4xl'}
          fontWeight={'bold'}
          lineHeight={1}
          color={color}
        >
          {zeroPad(horas)}:{zeroPad(minutos)}:{zeroPad(segundos)}
        </Text>
      </CardBody>
      <CardFooter
        padding={4}
      >
        <ButtonGroup
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
        >
          <IconButton
            aria-label='Start'
            isRound={true}
            colorScheme='teal'
            height={12}
            width={12}
          >
            <IconEdit color='white' />
          </IconButton>
          <IconButton
            aria-label='Start'
            isRound={true}
            colorScheme='cyan'
            height={12}
            width={12}
            onClick={startChrono}
          >
            {
              !running
                ? <IconPlayerPlay color='white' />
                : <IconPlayerPause color='white'/>
            }
          </IconButton>
          <IconButton
            aria-label='Start'
            isRound={true}
            colorScheme='red'
            height={12}
            width={12}
          >
            <IconTrash color='white' />
          </IconButton>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
