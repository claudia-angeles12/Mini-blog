// Esta función es requerida para la exportación estática
export async function generateStaticParams() {
  // Como localStorage no está disponible en build, usamos artículos de ejemplo
  const articles = [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
  return articles.map(article => ({ id: article.id }));
}
