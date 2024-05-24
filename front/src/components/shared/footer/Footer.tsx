import styled from '@emotion/styled'
import { usePathname, useRouter } from 'next/navigation'

import { Icon } from '@/components'

const Footer = () => {
  const router = useRouter()
  const pathName = usePathname()

  console.log('pathName', pathName)
  const isActivePath = (path: string) => path === pathName

  return (
    <Container>
      <Icon
        name="clock"
        size={24}
        color={isActivePath('/timer') ? 'neutral900' : 'neutral400'}
        onClick={() => router.push('/timer')}
      />
      <Icon
        name="home"
        size={24}
        color={isActivePath('/routine') ? 'neutral900' : 'neutral400'}
        onClick={() => router.push('/routine')}
      />
      <Icon
        name="chart"
        size={24}
        color={isActivePath('/history') ? 'neutral900' : 'neutral400'}
        onClick={() => router.push('/history')}
      />
      <Icon
        name="profile"
        size={24}
        color={isActivePath('/profile') ? 'neutral900' : 'neutral400'}
        onClick={() => router.push('/profile')}
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
