import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FormProvider } from '@/components/formContext'
import toast, { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuickShop',
  description: 'Launch your own store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormProvider>
          {children}
          <Toaster />
        </FormProvider>
      </body>
    </html>
  )
}
