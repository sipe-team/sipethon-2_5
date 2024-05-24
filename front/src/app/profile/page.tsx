'use client'

import { useEffect } from 'react'

import { useHeaderStore } from '@/store'

const ProfilePage = () => {
  const { setTitle } = useHeaderStore()

  useEffect(() => {
    setTitle('마이페이지')
  }, [])

  return (
    <div>
      <h1>profile page</h1>
    </div>
  )
}

export default ProfilePage
