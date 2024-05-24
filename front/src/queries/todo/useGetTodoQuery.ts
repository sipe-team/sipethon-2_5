import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { fetchTodos } from '@/queries/api'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export const useGetTodoQuery = (): UseQueryResult<Todo[]> =>
  useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })
