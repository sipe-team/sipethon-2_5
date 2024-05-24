import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { getRoutine } from '@/queries/api'
import { Routine } from '@/queries/routine/type'

export const useGetRoutineQuery = (id: number): UseQueryResult<Routine> =>
  useQuery({
    queryKey: ['routine', id],
    queryFn: () => getRoutine(id),
  })
