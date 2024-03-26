
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user-slice'
import createServerModalReducer from './slices/create-server-modal-slice'
import inviteModalReducer from './slices/invite-modal-slice'
import leaveServerModalReducer from './slices/leave-server-modal-slice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        createServerModal: createServerModalReducer,
        inviteModal: inviteModalReducer,
        leaveServerModal: leaveServerModalReducer 
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>