import { removeChat } from "../store/chatSlice";
import { removeUser } from "../store/userSlice";
import { removeFriend } from "../store/friendSlice";


export const resetRdeuxStoreOnLogout = (dispatch) => {
  dispatch(removeChat());
  dispatch(removeUser());
  dispatch(removeFriend());
};
