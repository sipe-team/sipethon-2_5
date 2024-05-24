'use client'
import { useEffect, useState } from 'react'

import ProgressCircle from '@/components/progress-circle/ProgressCircle'
import { useTimer } from '@/hooks'

const TimerPage = () => {
  const GOALTIME = 10 // 4분
  const { remainingTime, time, status, start, stop, reset, finish } = useTimer(GOALTIME) // 목표 시간 GOALTIME초
  const [result, setResult] = useState<'success' | 'fail' | 'pending'>('pending')

  const calculateScore = ({ remainingTime, goalTime }: { remainingTime: number; goalTime: number }): number => {
    const absoluteDifference = Math.abs(remainingTime)
    const percentageDifference = (absoluteDifference / goalTime) * 100

    if (percentageDifference === 0) {
      return 100
    } else if (percentageDifference <= 10) {
      return 100 - percentageDifference * 5 // 100에서 50까지 선형적으로 감소
    } else {
      return -((percentageDifference - 20) * 5) // 0에서 음수로 감소
    }
  }

  const timeToMinutes = (time: number): string => {
    return Math.ceil(time / 60)
      .toFixed(0)
      .padStart(2, '0')
  }

  const timeToMinSec = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const seconds = (time % 60).toFixed(0).padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  useEffect(() => {
    if (status === 'finished') {
      // 알고리즘에 따라 성공/실패 여부 판단
      setResult(calculateScore({ remainingTime, goalTime: GOALTIME }) > 0 ? 'success' : 'fail')
    }
  }, [remainingTime, status])

  return (
    <div>
      <h1>Timer</h1>
      <p>GoalTime Time: {timeToMinutes(GOALTIME)} min</p>
      <p>RemainingTime Time: {timeToMinSec(remainingTime)} seconds</p>
      <p>Time: {timeToMinSec(time)} seconds</p>
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
