'use client'
import { useTimer } from '@/hooks'

const TimerPage = () => {
  const { remainingTime, status, start, stop, reset, finish } = useTimer(3) // 60초 목표 시간

  return (
    <div>
      <h1>Timer</h1>
      <p>Remaining Time: {remainingTime} seconds</p>
      <p>Status: {status}</p>
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
    </div>
  )
}

export default TimerPage
