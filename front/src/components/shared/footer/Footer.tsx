import styled from '@emotion/styled'

import { Icon } from '@/components'

const Footer = () => {
  return (
    <Container>
      <Icon
        name="clock"
        size={24}
        onClick={() => {
          console.log('click')
        }}
      />
      <Icon
        name="home"
        size={24}
        onClick={() => {
          console.log('click')
        }}
      />
      <Icon
        name="chart"
        size={24}
        onClick={() => {
          console.log('click')
        }}
      />
      <Icon
        name="profile"
        size={24}
        onClick={() => {
          console.log('click')
        }}
      />
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  width: calc(100% - 40px);
  padding: 16px 8px;
  background-color: ${({ theme }) => theme.color.neutral0};
  border-top: 1px solid ${({ theme }) => theme.color.neutral200};
`
