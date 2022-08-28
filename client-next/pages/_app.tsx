import { persistor, store } from '@/store/store'
import type { AppProps } from 'next/app'
import NextProgressBar from 'nextjs-progressbar'
import React from 'react'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import { PersistGate } from 'redux-persist/integration/react'

import '../app/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <NextProgressBar
        color='#ff7652'
        startPosition={0.3}
        stopDelayMs={500}
        height={3}
      />

      <Provider store={store}>
        <PersistGate 
          persistor={persistor} 
          loading={null} // ? Не нужен лодинг так как быстро подгрузится итак
        >
          <Component {...pageProps} />


          {/* Alerts */}
          <ReduxToastr
            newestOnTop={false}
            preventDuplicates
            progressBar
            closeOnToastrClick
            timeOut={4000}
            transitionIn="fadeIn"
            transitionOut='bounceOut'
          />
        </PersistGate>
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
