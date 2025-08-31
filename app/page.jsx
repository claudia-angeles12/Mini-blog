import Link from 'next/link'
import { getArticles } from '@/utils/storage'
import ArticleCard from '@/components/ArticleCard'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const articles = getArticles().slice(0, 3) // Mostrar solo los 3 más recientes

  return (
    <div className="container">
      <div className={styles.hero}>
        <h1>Bienvenido al Mini Blog</h1>
        <p>Un proyecto de demostración para mi portafolio</p>
      </div>

      <section className={styles.latestArticles}>
        <h2>Artículos Recientes</h2>
        {articles.length === 0 ? (
          <div className={styles.empty}>
            <p>No hay artículos aún.</p>
          </div>
        ) : (
          <>
            <div className={styles.articlesGrid}>
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            <div className={styles.seeAll}>
              <Link href="/articulos" className="btn btn-primary">Ver todos los artículos</Link>
            </div>
          </>
        )}
      </section>
    </div>
  )
}