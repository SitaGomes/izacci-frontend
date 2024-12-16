import type { Metadata } from 'next';
import { Crimson_Text, Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const getCrimsonText = Crimson_Text({
  variable: '--font-crimson-text',
  subsets: ['latin'],
  weight: '600',
});

const getInter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Izacci - O aplicativo completo para sua empresa',
  description: 'Otimize suas finanças e clientes com facilidade e eficiência.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body
        className={`${getCrimsonText.variable} ${getInter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
