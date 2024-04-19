import './globals.scss';
import type { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { NextAuthProvider } from '@/components/ContextProvider';
import Header from '@/components/ui/common/Header';

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
          <Header />
          <main>
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;