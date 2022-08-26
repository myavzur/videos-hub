import React, { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { store, persistor } from "@/store/store"

const PersistedStoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate 
        persistor={persistor} 
        loading={null} // ? Не нужен лодинг так как быстро подгрузится итак
      >
        {children}
      </PersistGate>
    </Provider>
  )
}

export default PersistedStoreProvider