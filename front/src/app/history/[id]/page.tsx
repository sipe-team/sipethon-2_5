'use client'

import styled from '@emotion/styled'
import { useEffect } from 'react'

import { HistoryDetailList, Text } from '@/components'
import { useHeaderStore } from '@/store'

const HistoryDetailPage = () => {
  const { setTitle } = useHeaderStore()

  useEffect(() => {
    setTitle('루틴 기록')
  }, [])

  const historyDetailListDummy = [
    {
      id: 1,
      date: '2021-09-01',
      score: 100,
      planTime: 60,
      realTime: 50,
    },
    {
      id: 2,
      date: '2021-09-02',
      score: 90,
      planTime: 60,
      realTime: 70,
    },
    {
      id: 3,
      date: '2021-09-03',
      score: 80,
      planTime: 60,
      realTime: 80,
    },
  ]

  return (
    <Container>
      <TitleSection>
        <Text name="headline">🛁 출근 준비 시간 줄이기</Text>
      </TitleSection>

      <HistoryDetailList historyDetailList={historyDetailListDummy} />
    </Container>
  )
}

export default HistoryDetailPage

const Container = styled.div`
  padding-top: 20px;
`

const TitleSection = styled.div`
  padding-bottom: 16px;
`
