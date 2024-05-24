import styled from '@emotion/styled'

import { Button, RoutineItem, Text } from '@/components'

export interface Routine {
  id: number
  name: string
  description: string
}

interface Props {
  routineList: Routine[]
}

const RoutineList = ({ routineList }: Props) => {
  return (
    <Container>
      {routineList.map((routine) => (
        <RoutineItem
          key={routine.id}
          routineItem={routine}
          onClick={() => {
            console.log('click')
          }}
        />
      ))}

      <Button
        icon="plus"
        onClick={() => {
          console.log('click')
        }}
      >
        더미 텍스트
      </Button>
    </Container>
  )
}

export default RoutineList

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const AddRoutineButton = styled.button``
