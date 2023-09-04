'use client'

import { redirect } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'

const Index = () => {
  const { isLoaded, userId, getToken } = useAuth();

  if ((!isLoaded || !userId) && (userId !== process.env.CLERK_USER_ID)) {
    redirect('/sign-in');
  }
  
  return (
    <div>
      <div>Summary</div>
      <div>Number of views</div>
      <div>CV downloads count</div>
      <div>Other additional information...</div>
    </div>
  )
}

export default Index