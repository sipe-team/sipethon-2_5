import { _fetch } from '@/queries/fetch'

export const fetchTodos = async () => {
  return await _fetch('todo')
}

// Routine API
export const getRoutines = async () => {
  return await _fetch('routine')
}

export const getRoutine = async (id: number) => {
  return await _fetch(`routine/${id}`)
}

export const postTimerResult = async (data: { routineId: number; seconds: number; score: number }) => {
  return await _fetch('routine/history', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

// History API
export const getHistories = async () => {
  return await _fetch('history/routine')
}

export const getHistory = async (id: number) => {
  return await _fetch(`history/routine/${id}`)
}
