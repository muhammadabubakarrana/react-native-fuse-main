import {createSlice} from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = {
  userType: null,
};

export const userTypeSlice = createSlice({
  name: 'userType',
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
});

export const {setUserType} = userTypeSlice.actions;

export default userTypeSlice.reducer;
