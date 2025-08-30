'use client'

import { useAuth } from '@/utils/auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return (
      <div className="container">
        <div className="card">
          <p>Redirigiendo al login...</p>
        </div>
      </div>
    )
  }

  return children
}