import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='dark'>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
