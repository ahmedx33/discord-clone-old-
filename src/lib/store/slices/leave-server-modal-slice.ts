import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    memberId: string,
    isOpen: boolean
}


const initialState: InitialState = {
    memberId: "",
    isOpen: false,
}

export const leaveServerModalSlice = createSlice({
    name: "leave-server-modal",
    initialState,
    reducers: {

        setMemberId: (state, action) => {
            state.memberId = action.payload
        },

        onOpen: (state) => {
            state.isOpen = true
        },

        onClose: (state) => {
            state.isOpen = false
        }
    }
})



export const { setMemberId, onOpen, onClose } = leaveServerModalSlice.actions

export default leaveServerModalSlice.reducer