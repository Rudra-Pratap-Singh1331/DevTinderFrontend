import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import friendListReducer from "./friendSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    friendList: friendListReducer,
  },
});

export default appStore;
