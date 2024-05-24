import styled from '@emotion/styled'

import { Icon, Text } from '@/components'

import { HistoryDetail } from '../history-detail-list/HistoryDetailList'

interface Props {
  historyDetailItem: HistoryDetail
  onClick: () => void
}

const HistoryDetailItem = ({ historyDetailItem, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <LeftSection>
        <InfoSection>
          <Text name="subhead" color="neutral900">
            {historyDetailItem.date}
          </Text>

          <Text name="caption" color="neutral500">
            {historyDetailItem.score}점
          </Text>
        </InfoSection>

        <TimeSection>
          <TimeItem>
            <Text name="body2" color="neutral900">
              목표
            </Text>

            <Text name="body2" color="primary500">
              {historyDetailItem.planTime}분
            </Text>
          </TimeItem>

          <TimeItem>
            <Text name="body2" color="neutral900">
              나의 소요 시간
            </Text>

            <Text name="body2" color="primary500">
              {historyDetailItem.realTime}분
            </Text>
          </TimeItem>
        </TimeSection>
      </LeftSection>

      <Icon name="gold" />
    </Container>
  )
}

export default HistoryDetailItem

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 78px;
  padding: 0 26px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.neutral0};
  border: 1px solid ${({ theme }) => theme.color.neutral300};
  border-radius: 8px;
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const InfoSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const TimeSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const TimeItem = styled.div`
  display: flex;
  gap: 4px;
`
