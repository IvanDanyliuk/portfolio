import './globals.scss'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Logo from '@/components/Logo'

import Navbar from '@/components/Navbar'

config.autoAddCss = false;

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Ivan Danyliuk | Portfolio',
  description: 'My name is Ivan Danyliuk. I am a creative frontend developer based in Ukraine.',
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className='flex justify-between'>
            <Logo />
            <Navbar />
          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout