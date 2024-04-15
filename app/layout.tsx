import './globals.scss'
import type { Metadata } from 'next'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Logo from '@/components/ui/common/Logo'

import Navbar from '@/components/navigation/Navbar'
import { NextAuthProvider } from '@/components/ContextProvider'

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
    <html lang="en">
      <body>
        <NextAuthProvider>
          <header className='flex justify-between'>
            <Logo />
            <Navbar />
          </header>
          <main>
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;