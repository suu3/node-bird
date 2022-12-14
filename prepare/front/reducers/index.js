import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

const initialState = {
  user: {},
  posts: {},
};

// (이전 상태, 액션) => 다음 상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    // SSR을 위한 HYDRATE
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
