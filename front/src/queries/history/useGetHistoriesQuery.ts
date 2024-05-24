import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { getHistories } from '../api'

export const useGetHistoriesQuery = (): UseQueryResult<History[]> =>
  useQuery({
    queryKey: ['histories'],
    queryFn: getHistories,
  })
