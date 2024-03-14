import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  IconButton,
  Text
} from '@chakra-ui/react'

import {
  IconEdit,
  IconGridDots,
  IconPlayerPlay,
  IconTrash
} from '@tabler/icons-react'

export const ChronoCard = () => {
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
          >
            Titulo del cronometro largo muy largo
          </Heading>
          <Text fontSize={'sm'}>
            Descripción del cronometro
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
        >
          00:00:00
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
          >
            <IconPlayerPlay
              color='white'
            />
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
