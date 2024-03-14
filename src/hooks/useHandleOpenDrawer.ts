import useChronometerStore from '@/store/store'

export const useHandleOpenDrawer = () => {
  const { setOpenDrawer } = useChronometerStore()

  const handleOpenDrawer = (value:boolean) => {
    setOpenDrawer(value)
  }

  return {
    handleOpenDrawer
  }
}
