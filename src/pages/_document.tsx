import React, { ReactElement } from 'react'
import { NextRouter } from 'next/router'
import { ServerStyleSheet } from 'styled-components'
import { NextComponentType } from 'next'
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

import {
  AppContextType,
  AppInitialProps,
  AppPropsType
} from 'next/dist/next-server/lib/utils'

type AppComponentType = NextComponentType<
  AppContextType<NextRouter>,
  AppInitialProps,
  AppPropsType<NextRouter, Record<string, unknown>>
>

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppComponentType) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>{this.props.styles}</Head>

        <body>
          <Main />
          <NextScript />
          <noscript>
            <iframe
              src="/noscript.html"
              frameBorder="0"
              height="100%"
              width="100%"
              scrolling="no"
            />
          </noscript>
        </body>
      </Html>
    )
  }
}

export default AppDocument
