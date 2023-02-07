import type { AppType } from 'next/app'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from 'theme'

export const MyApp: AppType<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} key={router.route} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
