import useChronometerStore from '@/store/store'

import { FormValues } from '@/types'

export const useCreateChrono = () => {
  const {
    createCronometer,
    openDrawer,
    setOpenDrawer,
    editChronometer,
    editChrono,
    activeChrono
  } = useChronometerStore(state => state)

  const onSubmit = (values:FormValues) => {
    createCronometer({
      ...values,
      id: crypto.randomUUID()
    })
    setOpenDrawer(false)
  }

  return {
    editChronometer,
    activeChrono,
    openDrawer,
    setOpenDrawer,
    editChrono,
    onSubmit
  }
}
