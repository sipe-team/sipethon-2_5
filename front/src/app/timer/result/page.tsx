'use client'

import styled from '@emotion/styled'
import { useEffect } from 'react'

import { Button, Icon, Text } from '@/components'

const TimerResultPage = () => {
  const routine = '출근 준비 시간 줄이기'

  useEffect(() => {
    document.getElementById('header').style.backgroundColor = 'transparent'
    document.getElementById('app').style.backgroundColor = '#1F6A83'
  }, [])

  return (
    <Container>
      <HeaderSection>
        <Text>루틴 완료!</Text>
        <Icon name="check" />
      </HeaderSection>

      <SubHeaderSection>
        <Text name="h5" color="primary200">
          {routine}
        </Text>

        <Text name="h5">성공!</Text>
      </SubHeaderSection>

      <VectorSection>
        <Icon name="score_board" size={350} />
      </VectorSection>

      <ScoreSection>
        <Icon name="triangle" />
        <Text name="subhead">20점</Text>
        <Text>올랐어요</Text>
      </ScoreSection>

      <BottomSection>
        <Button type="primary">기록 보러가기</Button>
      </BottomSection>
    </Container>
  )
}

export default TimerResultPage

const Container = styled.div``

const HeaderSection = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding-bottom: 6px;
`

const VectorSection = styled.div`
  padding-top: 80px;
`

const SubHeaderSection = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`

const ScoreSection = styled.div`
  position: fixed;
  bottom: 124px;
  left: 50%;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  transform: translateX(-50%);
`

const BottomSection = styled.div`
  position: fixed;
  bottom: 80px;
  width: calc(100% - 40px);

  button p {
    color: white;
  }
`
