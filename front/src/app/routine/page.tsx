'use client'

import styled from '@emotion/styled'

import { RoutineList, Text } from '@/components'
import { useGetRoutinesQuery } from '@/queries'

const RoutinePage = () => {
  const { data } = useGetRoutinesQuery()

  const username = '석진'

  if (data === undefined) return <div>Loading...</div>

  return (
    <Container>
      <HeaderSection>
        <Text name="headline">{`안녕하세요, ${username}님`}</Text>

        <Text name="body2">원하는 루틴을 선택하고 실제로 걸리는 시간을 측정해 보세요.</Text>
      </HeaderSection>
      <RoutineList routineList={data} />
    </Container>
  )
}

export default RoutinePage

const Container = styled.div``

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 24px;
`
