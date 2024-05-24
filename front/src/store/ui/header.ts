import { create } from 'zustand'

interface State {
  title: string
  setTitle: (title: string) => void
}

export const useHeaderStore = create<State>((set) => ({
  title: '',
  setTitle: (title) => set({ title: title }),
}))
