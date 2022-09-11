import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.user
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
console.log(selectUser);