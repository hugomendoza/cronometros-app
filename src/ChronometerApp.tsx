import { Container, Divider, SimpleGrid } from '@chakra-ui/react'
import useChronometerStore from './store/store'
import { Aside, ChronoCard, Header } from './components'
import { Chronometer } from './types'

const ChronometerApp = () => {
  const { chronometers, openDrawer } = useChronometerStore(state => state)

  return (
    <>
      <Header />
      <Divider
        marginBottom={6}
      />
      <Aside
        isOpen={openDrawer}
        size="md"
      />
      <Container
        maxW="1280px"
      >
        <SimpleGrid gap={6} columns={[1, 2, 3, 4]}>
          {
            chronometers?.map(({ ...chrono }:Chronometer) => (
              <ChronoCard
                key={chrono.id}
                {...chrono}
              />
            ))
          }
        </SimpleGrid>

      </Container>
    </>
  )
}

export default ChronometerApp
