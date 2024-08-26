import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        name: 'nitin',
        car: 'Harrier and Scorpion 4*4'
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        changeName: (state, action) => {
            state.name = action.payload
        },
        carName: (state) => {
            state.car
        },
    }
})

export const { increment, changeName } = counterSlice.actions
export default counterSlice.reducer