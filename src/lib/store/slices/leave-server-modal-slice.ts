import { Member } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    data: {
        memberId: string,
        serverId: string,
    }
    isOpen: boolean
}


const initialState: InitialState = {
    data: {
        memberId: "",
        serverId: ""
    },
    isOpen: false,
}

export const leaveServerModalSlice = createSlice({
    name: "leave-server-modal",
    initialState,
    reducers: {

        setLeaveData: (state, action) => {
            state.data = action.payload
        },

        onOpenLeave: (state) => {
            state.isOpen = true
        },

        onCloseLeave: (state) => {
            state.isOpen = false
        }
    }
})



export const { setLeaveData, onOpenLeave, onCloseLeave } = leaveServerModalSlice.actions

export default leaveServerModalSlice.reducer