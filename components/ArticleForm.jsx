'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/ArticleForm.module.css'

export default function ArticleForm({ article, onSave }) {
  const [title, setTitle] = useState(article ? article.title : '')
  const [content, setContent] = useState(article ? article.content : '')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({
      id: article ? article.id : null,
      title,
      content
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className="form-group">
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Contenido:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className={styles.buttons}>
        <button type="submit" className="btn btn-primary">Guardar</button>
        <button 
          type="button" 
          className="btn btn-secondary" 
          onClick={() => router.push('/admin')}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}