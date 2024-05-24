import { _fetch } from '@/queries/fetch'

export const fetchTodos = async () => {
  return await _fetch('/todo')
}

export const getRoutines = async () => {
  return await _fetch('/routine')
}

export const getRoutine = async (id: number) => {
  return await _fetch(`/routine/${id}`)
}
