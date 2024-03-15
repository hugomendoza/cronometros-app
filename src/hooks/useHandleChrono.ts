import { useState } from 'react'
import { PropsTimer } from '@/types'

export const useHandleChrono = () => {
  const [running, setRunning] = useState<boolean>(false)
  const [timer, setTimer] = useState<PropsTimer>({
    milisegundos: 0,
    segundos: 0,
    minutos: 0,
    horas: 0
  })

  const [intervalId, setIntervalId] = useState<number | null>(null)

  const tick = () => {
    setTimer(prev => {
      let { milisegundos, segundos, minutos, horas } = prev
      milisegundos = (milisegundos + 1) % 100
      if (milisegundos === 0) {
        segundos = (segundos + 1) % 60
        if (segundos === 0) {
          minutos = (minutos + 1) % 60
          if (minutos === 0) {
            horas = (horas + 1) % 24
          }
        }
      }
      return {
        milisegundos,
        segundos,
        minutos,
        horas
      }
    })
  }

  const onStart = () => {
    if (!running) {
      const id = setInterval(tick, 10)
      setIntervalId(id)
      setRunning(true)
    }
  }

  const onStop = () => {
    if (running && intervalId !== null) {
      clearInterval(intervalId)
      setIntervalId(null)
      setRunning(false)
    }
  }

  const startChrono = () => {
    if (running) {
      onStop()
    } else {
      onStart()
    }
  }

  return {
    running,
    timer,
    startChrono
  }
}
