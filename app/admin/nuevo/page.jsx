'use client'

import { useRouter } from 'next/navigation'
import { saveArticle } from '@/utils/storage'
import ProtectedRoute from '@/components/ProtectedRoute'
import ArticleForm from '@/components/ArticleForm'

function NewArticle() {
  const router = useRouter()

  const handleSave = (article) => {
    saveArticle(article)
    router.push('/admin')
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Crear nuevo artículo</h1>
        <ArticleForm onSave={handleSave} />
      </div>
    </div>
  )
}

export default function NewArticlePage() {
  return (
    <ProtectedRoute>
      <NewArticle />
    </ProtectedRoute>
  )
}