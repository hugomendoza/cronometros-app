import useChronometerStore from '@/store/store'

import { FormValues } from '@/types'

export const useCreateChrono = () => {
  const { createCronometer } = useChronometerStore(state => state)

  const onSubmit = (values:FormValues) => {
    createCronometer({
      ...values,
      seconds: 0,
      miliseconds: 0,
      running: false,
      id: crypto.randomUUID(),
      editChronometer: false,
      minutes: 0,
      hours: 0
    })
  }

  return {
    onSubmit
  }
}
