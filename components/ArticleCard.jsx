import Link from 'next/link'
import styles from '@/styles/ArticleCard.module.css'

export default function ArticleCard({ article }) {
  return (
    <div className={styles.card}>
      <h3>{article.title}</h3>
      <p className={styles.excerpt}>
        {article.content.substring(0, 100)}...
      </p>
      <Link href={`/articulos/${article.id}`} className="btn btn-primary">
        Leer más
      </Link>
    </div>
  )
}