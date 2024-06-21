import './globals.css';

import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { PrismicPreview } from '@prismicio/next';
import clsx from 'clsx';

import { repositoryName } from '@/prismicio';

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: '400',
});

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
// });

/**
 * @param {{ children: React.ReactNode }}
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('max-w-full', poppins.variable)}>
      <body className="overflow-x-hidden antialiased">
        {/* TODO: Remove the following element once you have read the documentation. */}

        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
