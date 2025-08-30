import { getArticles } from '@/utils/storage'
import ArticleCard from '@/components/ArticleCard'
import styles from '@/styles/Articles.module.css'

export default function Articles() {
  const articles = getArticles()

  return (
    <div className="container">
      <div className={styles.header}>
        <h1>Artículos</h1>
        <p>Explora todos nuestros artículos</p>
      </div>

      {articles.length === 0 ? (
        <div className={styles.empty}>
          <p>No hay artículos aún.</p>
        </div>
      ) : (
        <div className={styles.articlesGrid}>
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}