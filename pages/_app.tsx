import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, err }: AppProps) {
  return <Component {...pageProps}
                    error={err}
  />;
}

export default MyApp
