import { createSlice } from "@reduxjs/toolkit";
import { User, Role, Member } from "prisma/prisma-client"



interface InitialState {
    data: {
        users: User[],
        roles: Role[],
        members: Member[]
    }
    isOpen: boolean
}

const initialState: InitialState = {
    data: {
        users: [],
        roles: [],
        members: []
    },
    isOpen: false,
}


const membersListSlice = createSlice({
    name: "members-list",
    initialState,
    reducers: {
        setMembersListData: (state, action) => {
            state.data = action.payload
        },
        onToggle: (state) => {
            state.isOpen = !state.isOpen
        },
        onOpen: (state) => {
            state.isOpen = true
        },

        onClose: (state) => {
            state.isOpen = false
        },
    }

})


export const { onOpen, onClose,onToggle, setMembersListData } = membersListSlice.actions

export default membersListSlice.reducer