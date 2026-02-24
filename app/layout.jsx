import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'COR Pathways — Construction Safety Management',
  description:
    'COR Pathways helps construction companies achieve COR certification and manage health & safety programs across Canada.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ paddingTop: 'var(--nav-height)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
