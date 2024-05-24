import styled from '@emotion/styled'

import { Text } from '@/components'

import type { History } from '../history-list/HistoryList'

interface Props {
  historyItem: History
  onClick: () => void
}

const HistoryItem = ({ historyItem, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <InfoSection>
        <Text name="h5">🦷</Text>

        <Text name="subhead" color="neutral900">
          {historyItem.name}
        </Text>
      </InfoSection>

      <Text name="body2" color="neutral700">
        2회 완료
      </Text>
    </Container>
  )
}

export default HistoryItem

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
  padding: 0 32px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.neutral0};
  border: 1px solid ${({ theme }) => theme.color.neutral300};
  border-radius: 8px;
`

const InfoSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`
