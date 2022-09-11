import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  name: 'Email',
  initialState:{
    user:null,
    Email:null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload.user;
    },
    setCurrentEmail: (state, action) => {
      state.Email = action.payload.Email;
    },
    logout: (state) => {
      state.user = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setCurrentEmail, setCurrentUser,logout ,meName} = userSlice.actions;
export const selectUser = (state) => state.user;   
export const selectEmail = (state) => state.Email;   
export default userSlice.reducer;
