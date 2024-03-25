import { Server } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    server: Server,
    isOpen: boolean
}

const initialState: InitialState = {
    server: {
        id: "",
        imgUrl: "",
        inviteLink: "",
        name: "",
        autherId: "",
        createdAt: new Date,
        updatedAt: new Date,
    },
    isOpen: false
}

const inviteModalSlice = createSlice({
    name: "invite-modal",
    initialState,
    reducers: {
        setServerData: (state, action) => {
            state.server = action.payload
        },
        onOpen: (state) => {
            state.isOpen = true
        },
        onClose: (state) => {
            state.isOpen = false
        }
    }
})


export const { onOpen, onClose, setServerData } = inviteModalSlice.actions

export default inviteModalSlice.reducer