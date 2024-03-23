import { Status } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

interface UserInterFace {
    value: {

        id: string;
        profileImg: string;
        email: string;
        displayName: string;
        userName: string;
        Status: Status
        color: string;
        haveNitro: boolean;
        createdAt: Date;
        updatedAt: Date;
    }
}

const initialState: UserInterFace = {
    value: {
        id: "",
        email: "",
        profileImg: "",
        displayName: "",
        userName: "",
        Status: "ONLINE",
        color: "",
        haveNitro: false,
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
