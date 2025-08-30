'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/utils/auth'
import styles from '@/styles/Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login(email, password)) {
      router.push('/admin')
    } else {
      setError('Credenciales incorrectas. Use editor@test.com / 123456')
    }
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
              />
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <button type="submit" className="btn btn-primary">Entrar</button>
          </form>
          <div className={styles.demo}>
            <p>Demo: editor@test.com / 123456</p>
          </div>
        </div>
      </div>
    </div>
  )
}