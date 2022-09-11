import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      console.log("there is a user", action.payload.user != null);
      state.user = action.payload.user
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentUser } = userSlice.actions;
export const selectUser = (state) => state.user;  
export default userSlice.reducer;
console.log( " the user details is" ,selectUser.user);

