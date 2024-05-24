import { BottomSheetProps, useBottomSheetStore } from '@/store'

const onBottomSheet = (bottomSheet: BottomSheetProps) => {
  useBottomSheetStore.getState().showBottomSheet(bottomSheet)
}

export default onBottomSheet
