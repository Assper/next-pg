import React, { ReactElement, StrictMode } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/common/styles/theme'
import GlobalStyles from '@/common/styles/global'

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <StrictMode>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </StrictMode>
  )
}

export default App
