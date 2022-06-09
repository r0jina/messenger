import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_MAX,
} from "./userTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsersMax = () => {
  return {
    type: FETCH_USERS_MAX,
  };
};

export const fetchUsers = (pageNumber) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);

    if (pageNumber !== 0 && pageNumber > 0) {
      axios({
        method: "GET",
        url: "https://gorest.co.in/public/v1/users/",
        params: { page: pageNumber },
      })
        .then((response) => {
          console.log("Response:", response.data);
          console.log("Data:", response.data.data);

          const users = response.data.data;
          dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
          console.log("Error:", error);
          dispatch(fetchUsersFailure(error));
        });
    } else {
      dispatch(fetchUsersMax());
    }
  };
};
