import type { AppType } from 'next/app'
import type { AppProps } from 'next/app'

export const MyApp: AppType<AppProps> = ({ Component, pageProps, router }) => {
  return <Component {...pageProps} key={router.route} />
}

export default MyApp
