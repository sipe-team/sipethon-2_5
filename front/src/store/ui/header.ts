import { create } from 'zustand'

interface State {
  title: string
}

interface Action {
  setTitle: (title: string) => void
}

export const useHeaderStore = create<State & Action>((set) => ({
  title: '',
  setTitle: (title) => set({ title: title }),
}))
