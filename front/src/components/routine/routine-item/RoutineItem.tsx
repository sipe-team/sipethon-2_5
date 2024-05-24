import styled from '@emotion/styled'

import { Text } from '@/components'
import { Routine } from '@/queries/routine/type'

interface Props {
  routineItem: Routine
  onClick: () => void
}

const RoutineItem = ({ routineItem, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Text name="h5">🦷</Text>

      <Text name="subhead" color="neutral900">
        {routineItem.name}
      </Text>
    </Container>
  )
}

export default RoutineItem

const Container = styled.button`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 62px;
  padding: 0 32px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.neutral0};
  border: 1px solid ${({ theme }) => theme.color.neutral300};
  border-radius: 8px;
`
