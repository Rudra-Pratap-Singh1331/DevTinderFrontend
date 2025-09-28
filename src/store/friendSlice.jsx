import { createSlice } from "@reduxjs/toolkit";

const friendSlice = createSlice({
  name: "friendList",
  initialState: null,
  reducers: {
    addFriends: (state, action) => {
      return action.payload;
    },
  },
});

export const { addFriends } = friendSlice.actions;
export default friendSlice.reducer;
