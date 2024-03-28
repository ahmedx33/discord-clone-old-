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
    }

})


export const { onToggle, setMembersListData } = membersListSlice.actions

export default membersListSlice.reducer