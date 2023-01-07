import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    departmentId : null
};

const orgSlice = createSlice({
    name : 'orgInfo',
    initialState,
    reducers : {
        setParticularDepartmentId :(state,action) => {
            state.departmentId = action?.payload
        }
    }
})

export const {setParticularDepartmentId} = orgSlice.actions;
export default orgSlice.reducer;