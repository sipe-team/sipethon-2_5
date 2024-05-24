import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { getHistory } from '../api'
import { HistoryDetail } from './type'

export const useGetHistoryQuery = (id: number): UseQueryResult<HistoryDetail> =>
  useQuery({
    queryKey: ['history'],
    queryFn: () => getHistory(id),
  })
