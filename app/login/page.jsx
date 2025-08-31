'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/utils/auth'
import styles from '@/styles/Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    // Pequeña demora para simular proceso de login
    await new Promise(resolve => setTimeout(resolve, 500))
    
    if (login(email, password)) {
      router.push('/admin')
    } else {
      setError('Credenciales incorrectas. Use: editor@test.com / 123456')
    }
    setIsLoading(false)
  }

  return (
    <div className="container">
      <div className={styles.loginContainer}>
        <div className="card">
          <h1>Iniciar sesión</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Iniciando sesión...' : 'Entrar'}
            </button>
          </form>
          <div className={styles.demo}>
            <p>Demo: editor@test.com / 123456</p>
          </div>
        </div>
      </div>
    </div>
  )
}