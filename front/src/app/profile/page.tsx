'use client'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect } from 'react'

import { Button, Icon, Text } from '@/components'
import { useDarkModeStore, useHeaderStore } from '@/store'

const ProfilePage = () => {
  const { setTitle } = useHeaderStore()
  const { isDarkMode, toggleDarkMode } = useDarkModeStore()

  useEffect(() => {
    setTitle('마이페이지')
  }, [])

  return (
    <Container>
      <ProfileSection>
        <Icon name="sample_profile" />
      </ProfileSection>

      <InfoSection>
        <Text name="headline">김갓생</Text>
        <Text>kimgod@email.com</Text>
      </InfoSection>

      <Button
        onClick={() => {
          console.log('asdf')
        }}
      >
        로그아웃
      </Button>

      <DarkButtonSection>
        <Text name="subhead">다크 모드</Text>

        <Toggle isDarkMode={isDarkMode} onClick={toggleDarkMode} />
      </DarkButtonSection>
    </Container>
  )
}

export default ProfilePage

const Container = styled.div``

const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 84px 0 24px;
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  padding-bottom: 24px;
`

const DarkButtonSection = styled.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  display: flex;
  gap: 12px;
  align-items: center;
  transform: translateX(-50%);
`

const Toggle = styled.div<{
  isDarkMode: boolean
}>`
  position: relative;
  width: 40px;
  height: 24px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.neutral400};
  border-radius: 12px;

  &::before {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 16px;
    height: 16px;
    content: '';
    background-color: ${({ theme }) => theme.color.neutral0};
    border-radius: 8px;
    transition: transform 0.2s;

    ${({ isDarkMode }) =>
      isDarkMode &&
      css`
        left: 20px;
      `}
  }
`
