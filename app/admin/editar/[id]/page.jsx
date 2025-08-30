'use client'

import { useParams, useRouter } from 'next/navigation'
import { getArticleById, saveArticle } from '@/utils/storage'
import ProtectedRoute from '@/components/ProtectedRoute'
import ArticleForm from '@/components/ArticleForm'

function EditArticle() {
  const params = useParams()
  const { id } = params
  const article = getArticleById(id)
  const router = useRouter()

  if (!article) {
    return (
      <div className="container">
        <div className="card">
          <h1>Artículo no encontrado</h1>
          <button onClick={() => router.push('/admin')} className="btn btn-primary">
            Volver al panel
          </button>
        </div>
      </div>
    )
  }

  const handleSave = (updatedArticle) => {
    saveArticle(updatedArticle)
    router.push('/admin')
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Editar artículo</h1>
        <ArticleForm article={article} onSave={handleSave} />
      </div>
    </div>
  )
}

export default function EditArticlePage() {
  return (
    <ProtectedRoute>
      <EditArticle />
    </ProtectedRoute>
  )
}