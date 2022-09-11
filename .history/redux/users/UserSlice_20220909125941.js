import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  name: 'email',
  initialState:{
    user:null,
    email:null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload.user;
    },
    setCurrentEmail: (state, action) => {
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.user = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setCurrentEmail, setCurrentUser,logout ,meName} = userSlice.actions;
export const selectUser = (state) => state.user;   
export const selectEmail = (state) => state.email;   
export default userSlice.reducer;
