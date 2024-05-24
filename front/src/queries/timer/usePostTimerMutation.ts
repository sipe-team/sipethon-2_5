import { useMutation } from '@tanstack/react-query'
import { postTimerResult } from '../api'

export const usePostTimerMutation = (routineId: number, seconds: number, score: number) =>
  useMutation({
    mutationKey: ['timer', routineId],
    mutationFn: () =>
      postTimerResult({
        routineId,
        seconds,
        score,
      }),
  })
