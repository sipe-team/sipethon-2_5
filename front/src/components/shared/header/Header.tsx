import styled from '@emotion/styled'
import { useRouter } from 'next/navigation'

import { Icon, Text } from '@/components'

import useHeader from './Header.hook'

const Header = () => {
  const { title } = useHeader()
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <Container id="header">
      <BackButtonSection onClick={goBack}>
        <Icon name="arrow_left" size={24} />
      </BackButtonSection>
      <Text name="subhead">{title}</Text>
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
  justify-content: center;
  height: 60px;
  background-color: ${({ theme }) => theme.color.neutral0};
`

const BackButtonSection = styled.div`
  position: absolute;
  left: 0;
  height: 24px;
`
