import { Head, Html, Main, NextScript } from "next/document";

// Идет перед _app.tsx
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
				<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
				<link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#253a50" />
				<link rel="manifest" href="favicon/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#253a50" />
				<meta name="theme-color" content="#253a50" />

        <meta name="theme-color" content="#FF7652"/>
        <meta name="msapplication-navbutton-color" content="#FF7652"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#FF7652"/>
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}