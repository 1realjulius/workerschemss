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
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentUser } = userSlice.actions;
export const selectUser = (state) => state.user;  
export default userSlice.reducer;
console.log( " the user details is" ,selectUser.length);

