'use client'

import { Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { BottomSheet, Footer, Header, Popup } from '@/components'
import { useDarkModeStore, useHeaderStore } from '@/store'
import { global, theme } from '@/styles'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()

  const { setTitle } = useHeaderStore()
  const pathName = usePathname()

  useEffect(() => {
    setTitle('')
  }, [setTitle, pathName])

  const { isDarkMode } = useDarkModeStore()

  return (
    <html lang="ko">
      <head>
        <base href="/" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme(isDarkMode ? 'dark' : 'light')}>
            <Container id="app">
              <Global styles={global} />
              <Header />

              {children}

              {/* <ReactQueryDevtools initialIsOpen={false} /> */}

              <Footer />
            </Container>

            <Popup />
            <BottomSheet />
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default RootLayout

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 20px 76px;
  background: ${({ theme }) => theme.color.neutral0};
`
