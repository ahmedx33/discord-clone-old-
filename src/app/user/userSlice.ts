import { createSlice } from "@reduxjs/toolkit";





const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {}
    },

    reducers: {
        mainUser: (state, action) => {
            state.value = action.payload
        }
    }
})



export const { mainUser } = userSlice.actions

export default userSlice.reducer
