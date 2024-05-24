import styled from '@emotion/styled'

import { Text, useBottomSheet } from '@/components'

const BottomSheet = () => {
  const { bottomSheet, aniCloseBottomSheet, isAnimating } = useBottomSheet()

  if (!bottomSheet) return null

  return (
    <>
      <BackDrop onClick={aniCloseBottomSheet} isAnimating={isAnimating} />

      <Container isAnimating={isAnimating}>
        <HeaderSection>
          <Text name="headline">{bottomSheet.title}</Text>
        </HeaderSection>
        <ChildrenSection>{bottomSheet.children}</ChildrenSection>
      </Container>
    </>
  )
}

export default BottomSheet

const BackDrop = styled.div<{ isAnimating: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: rgb(0 0 0 / 30%);
  animation: ${({ isAnimating }) => (isAnimating ? 'fade-out' : 'fade-in')} 0.3s ease-in-out;

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`

const Container = styled.div<{
  isAnimating: boolean
}>`
  position: fixed;
  bottom: 0;
  z-index: 3;
  width: 100%;
  background-color: ${({ theme }) => theme.color.neutral0};
  border-radius: 28px 28px 0 0;
  animation: ${({ isAnimating }) => (isAnimating ? 'slide-out' : 'slide-in')} 0.3s ease-in-out;

  @keyframes slide-in {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(100%);
    }
  }
`

const HeaderSection = styled.div``

const ChildrenSection = styled.div`
  max-height: calc(330px - 68px);
  overflow-y: scroll;

  @media (height <= 330px) {
    max-height: calc(100vh - 68px);
  }
`
