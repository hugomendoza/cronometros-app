import { Container, Divider } from '@chakra-ui/react'
import { Header } from './components'

const ChronometerApp = () => {
  return (
    <>
      <Container
        maxW="1280px"
      >
        <Header />
        <Divider
          marginBottom={6}
        />
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

      </Container>
    </>
  )
}

export default ChronometerApp
