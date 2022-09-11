import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setCurrentEmail, setCurrentUser,logout ,meName} = userSlice.actions;
export const selectUser = (state) => state.user;    
export default userSlice.reducer;
