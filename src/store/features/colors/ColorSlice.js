import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    colors : {},
}

export const colorSlice = createSlice({
    name : 'color',
    initialState,
    reducers : {
        setColors : (state,action) => {
            state.colors = action.payload
        },
    }
})

export const {setColors} = colorSlice?.actions;
export default  colorSlice?.reducer