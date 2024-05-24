import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { getRoutines } from '@/queries/api'
import { Routine } from '@/queries/routine/type'

export const useGetRoutinesQuery = (): UseQueryResult<Routine[]> =>
  useQuery({
    queryKey: ['routines'],
    queryFn: getRoutines,
  })
