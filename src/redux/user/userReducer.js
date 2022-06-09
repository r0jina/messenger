import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_MAX,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: false,
  max: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: false,
        max: false,
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: true,
      };
    case FETCH_USERS_MAX:
      return {
        loading: false,
        users: [],
        max: true,
        error: false,
      };
    default:
      return state;
  }
};

export default reducer;
