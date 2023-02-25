import '@/styles/global.css'
import { Tags } from '@/components/common'
import { Jost } from 'next/font/google'

export const metadata = {
  title: 'Kamity | MITG',
  description: 'Portfolio de Kamity',
}

const font = Jost({
  subsets: ['latin'],
  variable: '--primary-font',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="[color-scheme:dark]">
      <Tags />
      <body className={`${font.variable}`}>{children}</body>
    </html>
  )
}
