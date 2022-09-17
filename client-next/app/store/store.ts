import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { apiErrorsMiddleware } from './middlewares/api-errors.middleware'
import { api } from './slices/api/api.slice'
import { Namespaces } from './slices/namespaces.enum'

import { rootReducer } from './root.reducer'

/**
 * ? Кэшируем данные через localstorage чтобы не делать постоянных запросов на сервак для авторизации.
 */
const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: [ Namespaces.channelSlice ] // ? Какие редюсеры записываем в localstorage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] // ? Overwise RTK would conflict with Redux-Persist
			}
		})
		.concat(apiErrorsMiddleware)
		.concat(api.middleware) // Redux Thunk and others included
	// devTools: process.env.NODE_ENV !== 'production', // Disable in Prod
})

export const persistor = persistStore(store)

export type IStoreState = ReturnType<typeof store.getState>
export type IStoreDispatch = typeof store.dispatch
