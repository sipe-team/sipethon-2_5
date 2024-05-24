import LocalStorage from '@/utils/localStorage'

class Timer {
  private _interval: NodeJS.Timeout | null = null
  private _time: number
  private _goalTime: number
  private _kind: 'pending' | 'running' | 'finished' = 'pending'

  constructor(goalTime: number) {
    this._time = 0
    this._goalTime = goalTime
  }

  get time() {
    return this._time
  }

  get remainingTime() {
    return this._goalTime - this._time
  }

  get kind() {
    return this._kind
  }

  start() {
    const now = new Date().getTime()
    LocalStorage.setItem('startTime', now.toString())

    this._interval = setInterval(() => {
      this._time++
    }, 1000)

    this._kind = 'running'
  }

  stop() {
    if (this._interval !== null) {
      clearInterval(this._interval)
      this._interval = null
      this._kind = 'pending'
    }
  }

  finish() {
    if (this._interval !== null) {
      clearInterval(this._interval)
      this._interval = null
    }
    LocalStorage.removeItem('startTime')
    this._kind = 'finished'
  }

  reset() {
    this._time = 0
    this._kind = 'pending'
  }
}

class TimerPloc {
  private timer: Timer
  private listeners: Array<() => void> = []

  constructor(goalTime: number) {
    this.timer = new Timer(goalTime)
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener)
  }

  unsubscribe(listener: () => void) {
    this.listeners = this.listeners.filter((l) => l !== listener)
  }

  private notify() {
    this.listeners.forEach((listener) => listener())
  }

  start() {
    this.timer.start()
    this.notify()
    this.intervalTick()
  }

  stop() {
    this.timer.stop()
    this.notify()
  }

  finish() {
    this.timer.finish()
    this.notify()
  }

  reset() {
    this.timer.reset()
    this.notify()
  }

  get time() {
    return this.timer.time
  }

  get remainingTime() {
    return this.timer.remainingTime
  }

  get kind() {
    return this.timer.kind
  }

  private intervalTick() {
    const interval = setInterval(() => {
      if (this.timer.kind !== 'running') {
        clearInterval(interval)
      } else {
        this.notify()
      }
    }, 1000)
  }
}

export default TimerPloc
