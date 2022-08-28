import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	PersistConfig,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root.reducer'

/**
 * ? Кэшируем данные через localstorage чтобы не делать постоянных запросов на сервак для авторизации.
 */
const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['channel'] // ? Какие редюсеры записываем в localstorage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] // ? Overwise RTK would conflict with Redux-Persist
			}
		}).concat() // Redux Thunk and others included
	// devTools: process.env.NODE_ENV !== 'production', // Disable in Prod
})

export const persistor = persistStore(store)

export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch
