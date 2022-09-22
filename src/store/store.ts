import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import authReducer from './slices/auth/auth.slice'

const reducer = {
    authReducer
}


export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch
// export const 
export const useAppDispatch = () => useDispatch<AppDispath>()