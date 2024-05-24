import { create } from 'zustand'

export interface BottomSheetProps {
  title: string
  children: React.ReactNode
}

interface State {
  bottomSheet: BottomSheetProps | null
}

interface Action {
  showBottomSheet: (bottomSheet: BottomSheetProps) => void
  closeBottomSheet: () => void
}

export const useBottomSheetStore = create<State & Action>((set) => ({
  bottomSheet: null,
  showBottomSheet: (bottomSheet) => set({ bottomSheet: bottomSheet }),
  closeBottomSheet: () => set({ bottomSheet: null }),
}))
