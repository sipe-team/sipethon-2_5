import styled from '@emotion/styled'

import { HistoryDetailItem } from '@/components'

export interface HistoryDetail {
  id: number
  date: string
  score: number
  planTime: number
  realTime: number
}

interface Props {
  historyDetailList: HistoryDetail[]
}

const HistoryDetailList = ({ historyDetailList }: Props) => {
  return (
    <Container>
      {historyDetailList.map((HistoryDetail) => (
        <HistoryDetailItem
          key={HistoryDetail.id}
          historyDetailItem={HistoryDetail}
          onClick={() => {
            console.log('click')
          }}
        />
      ))}
    </Container>
  )
}

export default HistoryDetailList

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const AddHistoryButton = styled.button``
