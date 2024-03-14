import { zeroPad } from '@/helpers'
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
import { useState } from 'react'

interface PropsTimer {
  miliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
}

export const ChronoCard = (props:Chronometer) => {
  const {
    title,
    description,
    colorSchema,
    miliseconds,
    minutes,
    hours,
    seconds
  } = props

  const color = useColorModeValue(`${colorSchema}.400`, `${colorSchema}.200`)
  const [running, setRunning] = useState<boolean>(false)
  const [timer, setTimer] = useState<PropsTimer>({
    miliseconds,
    seconds,
    minutes,
    hours
  })
  const [intervalId, setIntervalId] = useState<number | null>(null)

  const tick = () => {
    setTimer(prev => {
      let { miliseconds, seconds, minutes, hours } = prev
      miliseconds = (miliseconds + 1) % 100
      if (miliseconds === 0) {
        seconds = (seconds + 1) % 60
        if (seconds === 0) {
          minutes = (minutes + 1) % 60
          if (minutes === 0) {
            hours = (hours + 1) % 24
          }
        }
      }
      return {
        miliseconds,
        seconds,
        minutes,
        hours
      }
    })
  }

  const handleStart = () => {
    if (!running) {
      const id = setInterval(tick, 10)
      setIntervalId(id)
      setRunning(true)
    }
  }

  const handleStop = () => {
    if (running && intervalId !== null) {
      clearInterval(intervalId)
      setIntervalId(null)
      setRunning(false)
    }
  }

  const startChrono = () => {
    if (running) {
      handleStop()
    } else {
      handleStart()
    }
  }

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
            color={color}
          >
            {title}
          </Heading>
          <Text
            fontSize={'sm'}
            color={color}
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
          {zeroPad(timer.hours)}:{zeroPad(timer.minutes)}:{zeroPad(timer.seconds)}
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
