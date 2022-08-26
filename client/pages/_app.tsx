import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import NextProgressBar from 'nextjs-progressbar'

import PersistedStoreProvider from '@/components/providers/PersistedStoreProvider'

import '../app/styles/globals.scss'
import AuthProvider from '@/components/providers/AuthProvider/AuthProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>

      <NextProgressBar
        color='#278BD7'
        startPosition={1}
        stopDelayMs={500}
        height={3}
      />

      <PersistedStoreProvider>
          <AuthProvider Component={Component}>
            <Component {...pageProps} />
          </AuthProvider>
      </PersistedStoreProvider>

    </React.Fragment>
  )
}

export default MyApp
