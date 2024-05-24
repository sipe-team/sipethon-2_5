import { useHeaderStore } from '@/store'

const useHeader = () => {
  const { title } = useHeaderStore()

  return { title }
}

export default useHeader
