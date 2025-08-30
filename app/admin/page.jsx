'use client'

import { useAuth } from '@/utils/auth'
import { getArticles, deleteArticle } from '@/utils/storage'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ProtectedRoute from '@/components/ProtectedRoute'
import styles from '@/styles/Admin.module.css'

function AdminDashboard() {
  const { user } = useAuth()
  const articles = getArticles()
  const router = useRouter()

  const handleDelete = (id) => {
    if (confirm('¿Estás seguro de que quieres eliminar este artículo?')) {
      deleteArticle(id)
      router.refresh()
    }
  }

  if (!user) return null

  return (
    <div className="container">
      <div className={styles.header}>
        <h1>Panel de Administración</h1>
        <Link href="/admin/nuevo" className="btn btn-primary">Crear nuevo artículo</Link>
      </div>

      {articles.length === 0 ? (
        <div className="card">
          <p>No hay artículos aún.</p>
        </div>
      ) : (
        <div className={styles.articlesList}>
          {articles.map(article => (
            <div key={article.id} className={styles.articleItem}>
              <div className={styles.articleInfo}>
                <h3>{article.title}</h3>
                <p>Creado: {new Date(article.createdAt).toLocaleDateString()}</p>
              </div>
              <div className={styles.articleActions}>
                <Link href={`/articulos/${article.id}`} className="btn btn-secondary">Ver</Link>
                <Link href={`/admin/editar/${article.id}`} className="btn btn-primary">Editar</Link>
                <button 
                  onClick={() => handleDelete(article.id)} 
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Admin() {
  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  )
}