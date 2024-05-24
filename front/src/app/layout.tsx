'use client'

import { Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Popup } from '@/components'
import { useDarkModeStore } from '@/store'
import { global, theme } from '@/styles'
import { useRef } from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useRef<QueryClient>()
  if (!queryClient.current) {
    queryClient.current = new QueryClient({
      defaultOptions: {
        queries: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          queryFn: async ({ queryKey }: { queryKey: any }) => {
            const [url] = queryKey
            const response = await fetch(url, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            })
            return response.json()
          },
          retry: 1,
        },
      },
    })
  }

  const { isDarkMode } = useDarkModeStore()

  return (
    <html lang="ko">
      <head>
        <base href="/" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
      </head>
      <body>
        <QueryClientProvider client={queryClient.current}>
          <ThemeProvider theme={theme(isDarkMode ? 'dark' : 'light')}>
            <Container>
              <Global styles={global} />
              <Popup />

              {children}

              <ReactQueryDevtools initialIsOpen={false} />
            </Container>
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
  padding: 0 20px;
  background: ${({ theme }) => theme.color.neutral0};
`
