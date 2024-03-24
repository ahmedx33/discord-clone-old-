
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user-slice'
import modalReducer from './features/modal-slice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        modal: modalReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>