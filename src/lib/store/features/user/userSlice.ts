import { createSlice } from "@reduxjs/toolkit";



interface UserInterFace {
    value: {

        id: string
        email: string
        profileImg: string
        displayName: string
        userName: string
        createdAt: Date
        updatedAt: Date
    }
}

const initialState: UserInterFace = {
    value: {

    id: "",
    email: "",
    profileImg: "",
    displayName: "",
    userName: "",
    createdAt: new Date(),
    updatedAt: new Date()
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        mainUser: (state, action) => {
            state.value = action.payload
        }
    }
})



export const { mainUser } = userSlice.actions

export default userSlice.reducer
