import { createSlice } from "@reduxjs/toolkit";

type modalName = "invite" | "createServer"


const initialState = {
    isOpen: false
}

export const createServerModalSlice = createSlice({
    name: "create-server-modal",
    initialState,
    reducers: {
        onOpen: (state) => {
            state.isOpen = true
        },

        onClose: (state) => {
            state.isOpen = false
        }
    }
})

export const { onOpen, onClose } = createServerModalSlice.actions

export default createServerModalSlice.reducer