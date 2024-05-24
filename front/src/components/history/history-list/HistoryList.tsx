'use client'

import styled from '@emotion/styled'

import { HistoryItem } from '@/components'
import { HistorySet } from '@/queries/history/type'
import { useRouter } from 'next/navigation'

// export interface History {
//   id: number
//   name: string
//   description: string
// }

interface Props {
  historyList: HistorySet[]
}

const HistoryList = ({ historyList }: Props) => {
  const router = useRouter()
  return (
    <Container>
      {historyList.map((history) => (
        <HistoryItem
          key={history.id}
          historyItem={history}
          onClick={() => {
            router.push(`/history/${history.id}`)
          }}
        />
      ))}
    </Container>
  )
}

export default HistoryList

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const AddHistoryButton = styled.button``
