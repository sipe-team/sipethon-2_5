import styled from '@emotion/styled'

import { HistoryItem } from '@/components'

export interface History {
  id: number
  name: string
  description: string
}

interface Props {
  historyList: History[]
}

const HistoryList = ({ historyList }: Props) => {
  return (
    <Container>
      {historyList.map((history) => (
        <HistoryItem
          key={history.id}
          historyItem={history}
          onClick={() => {
            console.log('click')
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
