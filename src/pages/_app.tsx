import { AppProps } from 'next/app'
import Head from 'next/head'

import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>View Git | Procure por Gitters</title>
        <link rel="shortcut icon" href="/img/icon-250.png" />
        <link rel="apple-touch-icon" href="/img/icon-250.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ed5140" />
        <meta
          name="description"
          content="A project for interview of Front End Developer with COMPASSO"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo {...SEO} />

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NextNprogress
          color={theme.colors.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
