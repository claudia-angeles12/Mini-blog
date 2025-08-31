export const getArticles = () => {
  if (typeof window !== 'undefined') {
    const articles = localStorage.getItem('articles');
    
    // Si no hay artículos, creamos algunos de ejemplo
    if (!articles) {
      const sampleArticles = [
        {
          id: '1',
          title: 'Cómo cuidar a tu perro en verano',
          content: 'El verano puede ser una época difícil para nuestras mascotas. Es importante mantenerlos hidratados, evitar paseos en las horas más calurosas del día y nunca dejarlos en el coche. Recuerda que los perros no sudan como nosotros y pueden sufrir golpes de calor fácilmente.',
          createdAt: new Date('2024-05-15').toISOString()
        },
        {
          id: '2',
          title: 'Alimentación adecuada para gatos',
          content: 'Una buena alimentación es esencial para la salud de tu gato. Debes proporcionarle comida de alta calidad, específica para su edad y condición de salud. Los gatos son carnívoros estrictos, por lo que necesitan una dieta rica en proteínas animales. Siempre asegúrate de que tengan agua fresca disponible.',
          createdAt: new Date('2024-05-10').toISOString()
        },
        {
          id: '3',
          title: 'Beneficios de tener mascotas',
          content: 'Las mascotas no solo son compañeras, sino que también aportan numerosos beneficios para nuestra salud. Reducen el estrés, fomentan la actividad física, mejoran el estado de ánimo y pueden ayudar a socializar. Además, enseñan responsabilidad a los niños y proporcionan amor incondicional.',
          createdAt: new Date('2024-05-05').toISOString()
        }
      ];
      localStorage.setItem('articles', JSON.stringify(sampleArticles));
      return sampleArticles;
    }
    
    return JSON.parse(articles);
  }
  return [];
};

export const saveArticle = (article) => {
  const articles = getArticles();
  if (article.id) {
    // Editar artículo existente
    const index = articles.findIndex(a => a.id === article.id);
    if (index !== -1) {
      articles[index] = article;
    }
  } else {
    // Nuevo artículo
    article.id = Date.now().toString();
    article.createdAt = new Date().toISOString();
    articles.push(article);
  }
  localStorage.setItem('articles', JSON.stringify(articles));
  return article;
};

export const deleteArticle = (id) => {
  const articles = getArticles().filter(article => article.id !== id);
  localStorage.setItem('articles', JSON.stringify(articles));
};

export const getArticleById = (id) => {
  return getArticles().find(article => article.id === id);
};