import { Container, Divider, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import useChronometerStore from './store/store'
import { Aside, ChronoCard, Header } from './components'

const ChronometerApp = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const { chronometers } = useChronometerStore(state => state)

  return (
    <>
      <Header
        onOpen={onOpen}
      />
      <Divider
        marginBottom={6}
      />
      <Aside
        isOpen={isOpen}
        onClose={onClose}
        size="md"
      />
      <Container
        maxW="1280px"
      >
        <SimpleGrid gap={6} columns={[1, 2, 3, 4]}>
          {chronometers.map((chronometer, index) =>
            <ChronoCard key={index} />
          )}
        </SimpleGrid>

      </Container>
    </>
  )
}

export default ChronometerApp
