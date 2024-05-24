'use client'

import styled from '@emotion/styled'
import { useEffect } from 'react'
import Lottie from 'react-lottie'

import { Button, Icon, Text } from '@/components'
import animationData from '@/components/shared/icon/assets/Lottie.json'

const TimerResultPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const routine = '출근 준비 시간 줄이기'

  useEffect(() => {
    document.getElementById('header').style.backgroundColor = 'transparent'
    document.getElementById('app').style.backgroundColor = '#1F6A83'

    return () => {
      document.getElementById('header').style.backgroundColor = 'white'
      document.getElementById('app').style.backgroundColor = 'white'
    }
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

      <LottieSection>
        <Lottie options={defaultOptions} height={350} width={350} />
      </LottieSection>

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
  animation: float 0.8s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0);
    }
  }
`

const SubHeaderSection = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`

const LottieSection = styled.div`
  position: fixed;
  top: 0;
`

const ScoreSection = styled.div`
  position: fixed;
  bottom: 136px;
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
