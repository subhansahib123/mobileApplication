import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userToken: '',
  userInfo: {},
  loading: false,
  member_to_update: {},
  isNavigated: 0,
  updatedName: '',
  isPatient : false,
  isDoctor : false,
  organization_id : null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,

  reducers: {
    setLoggedIn: (state, action) => {
      state.isAuthenticated = action?.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action?.payload;
    },
    setLoading: (state, action) => {
      state.loading = action?.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action?.payload;
    },
    setMemberToUpdate: (state, action) => {
      state.member_to_update = action?.payload;
    },
    setIsNavigated: (state, action) => {
      state.isNavigated = action?.payload;
    },
    setUpdatedName: (state, action) => {
      state.updatedName = action?.payload;
    },
    setIsPatient : (state,action) => {
      state.isPatient = action?.payload;
    },
    setIsDoctor : (state,action) => {
      state.isDoctor = action?.payload
    },
    setOrganizationId : (state,action) => {
      state.organization_id = action?.payload
    }
  },
});

export const {
  setLoggedIn,
  setUserToken,
  setLoading,
  setUserInfo,
  setMemberToUpdate,
  setIsNavigated,
  setUpdatedName,
  setIsPatient,
  setIsDoctor,
  setOrganizationId
} = loginSlice?.actions;
export default loginSlice?.reducer;
