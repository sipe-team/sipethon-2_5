'use client'

import { useCallback, useState } from 'react'

import { useBottomSheetStore } from '@/store'

const useBottomSheet = () => {
  const { bottomSheet, closeBottomSheet } = useBottomSheetStore()

  const [isAnimating, setIsAnimating] = useState(false)

  const aniCloseBottomSheet = useCallback(() => {
    setIsAnimating(true)

    setTimeout(() => {
      closeBottomSheet()
      setIsAnimating(false)
    }, 300)
  }, [setIsAnimating, closeBottomSheet])

  return {
    bottomSheet,
    aniCloseBottomSheet,
    isAnimating,
  }
}

export default useBottomSheet
