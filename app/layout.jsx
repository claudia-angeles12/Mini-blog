import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Mini Blog',
  description: 'Un mini blog para mi portafolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}