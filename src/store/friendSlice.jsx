import { createSlice } from "@reduxjs/toolkit";

const friendSlice = createSlice({
  name: "friendList",
  initialState: null,
  reducers: {
    addFriends: (state, action) => {
      return action.payload;
    },
    removeFriend: () => {
      return null;
    },
  },
});

export const { addFriends, removeFriend } = friendSlice.actions;
export default friendSlice.reducer;
