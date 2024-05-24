import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { getHistories } from '../api'
import { HistorySet } from './type'

export const useGetHistoriesQuery = (): UseQueryResult<HistorySet[]> =>
  useQuery({
    queryKey: ['histories'],
    queryFn: getHistories,
  })
