export const getArticles = () => {
  if (typeof window !== 'undefined') {
    const articles = localStorage.getItem('articles')
    return articles ? JSON.parse(articles) : []
  }
  return []
}

export const saveArticle = (article) => {
  const articles = getArticles()
  if (article.id) {
    // Editar artículo existente
    const index = articles.findIndex(a => a.id === article.id)
    if (index !== -1) {
      articles[index] = article
    }
  } else {
    // Nuevo artículo
    article.id = Date.now().toString()
    article.createdAt = new Date().toISOString()
    articles.push(article)
  }
  localStorage.setItem('articles', JSON.stringify(articles))
  return article
}

export const deleteArticle = (id) => {
  const articles = getArticles().filter(article => article.id !== id)
  localStorage.setItem('articles', JSON.stringify(articles))
}

export const getArticleById = (id) => {
  return getArticles().find(article => article.id === id)
}
