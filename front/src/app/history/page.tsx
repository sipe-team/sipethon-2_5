'use client'

import styled from '@emotion/styled'
import { useEffect } from 'react'

import { HistoryList } from '@/components'
import { useGetHistoriesQuery } from '@/queries/history'
import { useHeaderStore } from '@/store'

const HistoryPage = () => {
  const { setTitle } = useHeaderStore()

  useEffect(() => {
    setTitle('루틴 기록')
  }, [])

  const historyListDummy = [
    {
      id: 1,
      name: 'Routine1',
      description: 'Description1',
    },
    {
      id: 2,
      name: 'Routine2',
      description: 'Description2',
    },
    {
      id: 3,
      name: 'Routine3',
      description: 'Description3',
    },
  ]

  const { data: histories } = useGetHistoriesQuery()

  if (histories === undefined) return <div>Loading...</div>

  return (
    <Container>
      <HistoryList historyList={histories} />
    </Container>
  )
}

export default HistoryPage

const Container = styled.div`
  padding-top: 20px;
`
