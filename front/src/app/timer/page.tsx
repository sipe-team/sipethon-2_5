'use client'

import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

import { Button, Icon, Text } from '@/components'
import ProgressCircle from '@/components/progress-circle/ProgressCircle'
import { useTimer } from '@/hooks'

const TimerPage = () => {
  const routine = '출근 준비 시간 줄이기'

  const GOALTIME = 60 * 20 // 20분
  const { remainingTime, time, status, start, stop, reset, finish } = useTimer(GOALTIME) // 목표 시간 GOALTIME초
  const [result, setResult] = useState<'success' | 'fail' | 'pending'>('pending')

  const calculateScore = ({ remainingTime, goalTime }: { remainingTime: number; goalTime: number }): number => {
    const absoluteDifference = Math.abs(remainingTime)
    const percentageDifference = (absoluteDifference / goalTime) * 100

    if (percentageDifference === 0) {
      return 100
    } else if (percentageDifference <= 10) {
      return 100 - percentageDifference * 5 // 100에서 50까지 선형적으로 감소
    } else {
      return -((percentageDifference - 20) * 5) // 0에서 음수로 감소
    }
  }

  const timeToMinutes = (time: number): string => {
    return Math.ceil(time / 60)
      .toFixed(0)
      .padStart(2, '0')
  }

  const timeToMinSec = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const seconds = (time % 60).toFixed(0).padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  useEffect(() => {
    if (status === 'pending') {
      start()
    }
  }, [])

  useEffect(() => {
    if (status === 'finished') {
      // 알고리즘에 따라 성공/실패 여부 판단
      setResult(calculateScore({ remainingTime, goalTime: GOALTIME }) > 0 ? 'success' : 'fail')
    }
  }, [remainingTime, status])

  return (
    <Container>
      <HeaderSection>
        <Text color="primary500">루틴 진행중...</Text>
      </HeaderSection>
      <SubHeaderSection>
        <Text name="h5" color="neutral900">
          {routine}
        </Text>
      </SubHeaderSection>
      <VectorSection>
        <ProgressCircle value={GOALTIME - remainingTime} goal={GOALTIME} />
        <TimeSection>
          <Icon name="home" size={20} />
          <Text name="body2" color="neutral700">
            {timeToMinutes(GOALTIME)}분
          </Text>
          <Text name="h1" color="neutral1000">
            {timeToMinSec(time)}
          </Text>
        </TimeSection>
      </VectorSection>
      <BottomSection>
        <Button type="neutral" icon="pause" onClick={stop} disabled={status !== 'running'}>
          일시정지
        </Button>
        <Button type="primary" onClick={finish} disabled={status !== 'running'}>
          완료
        </Button>
      </BottomSection>
    </Container>
  )
}

export default TimerPage

const Container = styled.div``

const HeaderSection = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding-bottom: 6px;
`

const VectorSection = styled.div`
  padding-top: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SubHeaderSection = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`

const TimeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`
const BottomSection = styled.div`
  position: fixed;
  display: flex;
  gap: 8px;
  bottom: 80px;
  width: calc(100% - 40px);

  button p {
    color: white;
  }
`
