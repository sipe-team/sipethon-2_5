import styled from '@emotion/styled'

import { Icon, Text } from '@/components'

import useHeader from './Header.hook'

const Header = () => {
  const { title } = useHeader()

  return (
    <Container>
      <Icon name="arrow_left" size={24} />
      <Text name="h5">{title}</Text>
    </Container>
  )
}

export default Header

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: ${({ theme }) => theme.color.neutral0};
`
