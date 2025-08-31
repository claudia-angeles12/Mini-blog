'use client'

import { useAuth } from '@/utils/auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="container">
        <div className="card">
          <p>Cargando...</p>
        </div>
      </div>
    )
  }

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