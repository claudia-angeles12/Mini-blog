'use client'

import { useParams } from 'next/navigation'
import { getArticleById } from '@/utils/storage'
import { useAuth } from '@/utils/auth'
import Link from 'next/link'
import styles from '@/styles/ArticleDetail.module.css'

export default function ArticleDetail() {
  const params = useParams()
  const { id } = params
  const article = getArticleById(id)
  const { user } = useAuth()

  if (!article) {
    return (
      <div className="container">
        <div className={styles.notFound}>
          <h1>Artículo no encontrado</h1>
          <Link href="/articulos" className="btn btn-primary">Volver a artículos</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <article className={styles.article}>
        <h1>{article.title}</h1>
        <p className={styles.meta}>Publicado el {new Date(article.createdAt).toLocaleDateString()}</p>
        <div className={styles.content}>
          {article.content.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {user && (
          <div className={styles.adminActions}>
            <Link href={`/admin/editar/${article.id}`} className="btn btn-primary">Editar</Link>
          </div>
        )}
      </article>
    </div>
  )
}