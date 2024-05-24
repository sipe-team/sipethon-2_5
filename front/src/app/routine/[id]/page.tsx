'use client'

import styled from '@emotion/styled'

import { Button, Text } from '@/components'

const RoutineDetailPage = () => {
  return (
    <Container>
      <InfoSection>
        <Text name="h1">🛁</Text>

        <Text name="headline">출근 준비 시간 줄이기</Text>

        <Text name="subhead">
          트위터의 창업자 잭 도시는 매일 5시에 일어나 명상, 운동, 그리고 커피를 마시며 하루를 시작하기 전 정신적 준비를
          마친다고 해요.
        </Text>
      </InfoSection>

      <br />

      <Button size="L">목표 시간 20분</Button>

      <ButtonSection>
        <Button>시간 수정하기</Button>
        <Button type="primary">시작하기</Button>
      </ButtonSection>
    </Container>
  )
}

export default RoutineDetailPage

const Container = styled.div``

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 24px;
`

const ButtonSection = styled.div`
  position: fixed;
  bottom: 80px;
  display: flex;
  gap: 12px;
  width: calc(100% - 40px);
  margin-top: 24px;
`
