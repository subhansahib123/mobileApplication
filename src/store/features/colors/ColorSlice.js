import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    colors : {}
}

const colorReducer = createSlice({
    name : 'colors',
    initialState,
    reducers : {
        setColors : (state,action) => {
            state.colors = action?.payload
        }
    }
})

export const {setColors} = colorReducer?.actions;
export default  colorReducer.reducer