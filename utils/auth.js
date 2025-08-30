'use client'

import { useState, useEffect } from 'react'

export const useAuth = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Verificar si hay un usuario en localStorage al cargar
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (email, password) => {
    // Login fake - solo un usuario válido
    if (email === 'editor@test.com' && password === '123456') {
      const user = { email, role: 'editor' }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return { user, login, logout }
}
