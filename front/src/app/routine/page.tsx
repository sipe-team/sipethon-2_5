'use client'

import styled from '@emotion/styled'

import { RoutineList, Text } from '@/components'

const RoutinePage = () => {
  const routineListDummy = [
    {
      id: 1,
      name: 'Routine1',
      description: 'Description1',
    },
    {
      id: 2,
      name: 'Routine2',
      description: 'Description2',
    },
    {
      id: 3,
      name: 'Routine3',
      description: 'Description3',
    },
  ]
  const username = '석진'

  return (
    <Container>
      <HeaderSection>
        <Text name="headline">{`안녕하세요, ${username}님`}</Text>

        <Text name="body2">원하는 루틴을 선택하고 실제로 걸리는 시간을 측정해 보세요.</Text>
      </HeaderSection>

      <RoutineList routineList={routineListDummy} />
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
