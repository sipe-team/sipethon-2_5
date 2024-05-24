'use client'
import { useEffect, useState } from 'react'

import ProgressCircle from '@/components/progress-circle/ProgressCircle'
import { useTimer } from '@/hooks'

const TimerPage = () => {
  const GOALTIME = 3
  const { remainingTime, status, start, stop, reset, finish } = useTimer(GOALTIME) // 목표 시간 GOALTIME초
  const [result, setResult] = useState<'success' | 'fail' | 'pending'>('pending')

  useEffect(() => {
    if (status === 'finished') {
      // 알고리즘에 따라 성공/실패 여부 판단
      setResult(remainingTime < 0 ? 'fail' : 'success')
    }
  }, [remainingTime, status])

  return (
    <div>
      <h1>Timer</h1>
      <p>RemainingTime Time: {remainingTime} seconds</p>
      <p>Status: {status}</p>
      <p>Result: {result}</p>
      <button onClick={start} disabled={status === 'running'}>
        Start
      </button>
      <button onClick={stop} disabled={status !== 'running'}>
        Stop
      </button>
      <button onClick={finish} disabled={status !== 'running'}>
        Finish
      </button>
      <button onClick={reset} disabled={status === 'running'}>
        Reset
      </button>
      <ProgressCircle value={GOALTIME - remainingTime} goal={GOALTIME} />
    </div>
  )
}

export default TimerPage
