'use client'

import Link from 'next/link'
import { useAuth } from '@/utils/auth'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>Mini Blog</Link>
          <ul className={styles.navLinks}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/articulos">Artículos</Link></li>
            <li><Link href="/acerca-de">Acerca de</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
            {user ? (
              <>
                <li><Link href="/admin">Dashboard</Link></li>
                <li><button onClick={logout} className={styles.logoutBtn}>Cerrar sesión</button></li>
              </>
            ) : (
              <li><Link href="/login">Login</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}