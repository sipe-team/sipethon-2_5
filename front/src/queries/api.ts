import { _fetch } from '@/queries/fetch'

export const fetchTodos = async () => {
  return await _fetch('/todo')
}

// Routine API
export const getRoutines = async () => {
  return await _fetch('/routine')
}

export const getRoutine = async (id: number) => {
  return await _fetch(`/routine/${id}`)
}

// History API
export const getHistories = async () => {
  return await _fetch('/history')
}

export const getHistory = async (id: number) => {
  return await _fetch(`/history/${id}`)
}
