import { Container, Divider, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { Header, Aside, ChronoCard } from './components'

const ChronometerApp = () => {
  const { isOpen, onClose } = useDisclosure()
  return (
    <>
      <Aside
        isOpen={isOpen}
        onClose={onClose}
        size="md"
      />
      <Container
        maxW="1280px"
      >
        <Header />
        <Divider
          marginBottom={6}
        />
        <SimpleGrid gap={6} minChildWidth={'250px'}>
          <ChronoCard />
          <div>
            <div>
              <h1>Titulo del cronometro</h1>
            </div>
            <div>
              <p>Descripción del cronometro</p>
            </div>
            <div>
              <h1>00:00:00</h1>
              <button>
                Borrar
              </button>
              <button>
                Editar
              </button>
              <div>
                <button>
                  Start
                </button>
                <button>
                  Stop
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1>Titulo del cronometro</h1>
            </div>
            <div>
              <p>Descripción del cronometro</p>
            </div>
            <div>
              <h1>00:00:00</h1>
              <button>
                Borrar
              </button>
              <button>
                Editar
              </button>
              <div>
                <button>
                  Start
                </button>
                <button>
                  Stop
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1>Titulo del cronometro</h1>
            </div>
            <div>
              <p>Descripción del cronometro</p>
            </div>
            <div>
              <h1>00:00:00</h1>
              <button>
                Borrar
              </button>
              <button>
                Editar
              </button>
              <div>
                <button>
                  Start
                </button>
                <button>
                  Stop
                </button>
              </div>
            </div>
          </div>
        </SimpleGrid>

      </Container>
    </>
  )
}

export default ChronometerApp
