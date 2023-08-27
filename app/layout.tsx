// import Navbar from '@/components/Navpanel'
import './globals.css'
import type { Metadata } from 'next'
import Logo from '@/components/Logo'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Navbar from '@/components/Navbar'

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Ivan Danyliuk | Portfolio',
  description: 'My name is Ivan Danyliuk. I am a creative frontend developer based in Ukraine.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <header className='py-7'>
          <Logo />
          <Navbar />
        </header> */}
        <header>
          <Navbar />
        </header>
        
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
