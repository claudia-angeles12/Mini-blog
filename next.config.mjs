// next.config.mjs

/**
 * @type {import('next').NextConfig}
 */

// Define el nombre de tu repositorio de GitHub aquí
const repo = 'Mini-blog'; // <--- CAMBIA ESTO

const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  // Configura la salida a 'export' para generar un sitio estático
  output: 'export',

  // Configuración para el despliegue en GitHub Pages
  // Si estás usando un dominio personalizado, puedes omitir assetPrefix y basePath
  assetPrefix: process.env.NODE_ENV === 'production' ? assetPrefix : undefined,
  basePath: process.env.NODE_ENV === 'production' ? basePath : undefined,

  // Deshabilita la optimización de imágenes de Next.js, ya que no funciona en un entorno estático.
  // Puedes usar un loader de terceros o simplemente usar etiquetas <img> estándar.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;