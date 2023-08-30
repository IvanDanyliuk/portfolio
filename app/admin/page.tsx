'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Index = () => {
  const router = useRouter();

  const isLogged = true;

  useEffect(() => {
    if(!isLogged) {
      router.push('/auth');
    } 
  }, []);
  
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