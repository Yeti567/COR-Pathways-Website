import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'COR Pathways: COR Certification & Health and Safety Management',
  description: 'COR Pathways helps Canadian construction companies get COR certified, manage contractor compliance, and run their safety programs with purpose-built software.',
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
