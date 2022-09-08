import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  name: 'meName',
  initialState:{
    user:null,
    meName:null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.user
    },
    addme: (state,action)=> {
      state.meName = action.meName
    },
    logout: (state) => {
      state.user = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentUser,logout ,meName} = userSlice.actions;
export const selectUser = (state) => state.user;   
export const selectmeName = (state) => state.meName;   
export default userSlice.reducer;