import { useEffect, useRef, useState } from 'react'

import TimerPloc from '@/hooks/timer/timer.ploc'

const useTimer = (goalTime: number) => {
  const [remainingTime, setRemainingTime] = useState<number>(goalTime)
  const [status, setStatus] = useState<'pending' | 'running' | 'finished'>('pending')
  const timerPlocRef = useRef<TimerPloc | null>(null)

  useEffect(() => {
    if (!timerPlocRef.current) {
      timerPlocRef.current = new TimerPloc(goalTime)
    }

    const update = () => {
      setRemainingTime(timerPlocRef.current!.remainingTime)
      setStatus(timerPlocRef.current!.kind)
    }

    timerPlocRef.current.subscribe(update)
    return () => {
      timerPlocRef.current?.unsubscribe(update)
    }
  }, [goalTime])

  const start = () => timerPlocRef.current?.start()
  const stop = () => timerPlocRef.current?.stop()
  const finish = () => timerPlocRef.current?.finish()
  const reset = () => timerPlocRef.current?.reset()

  return { remainingTime, status, start, stop, finish, reset }
}

export default useTimer
