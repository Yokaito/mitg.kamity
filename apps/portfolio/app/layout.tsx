import '@/styles/global.css'
import { Header, Main, Tags } from '@/components/common'
import { Jost } from 'next/font/google'
import { MenuOverlay } from '@/components/ui/MenuOverlay'

export const metadata = {
  title: 'Kamity | Portfólio',
  description: 'Portfólio de Kamity',
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
    <html lang="pt-BR" className="dark">
      <Tags />
      <body
        className={`${font.variable} ${font.className} w-full h-full relative`}
      >
        <Header />
        <Main>{children}</Main>
        <MenuOverlay />
      </body>
    </html>
  )
}
