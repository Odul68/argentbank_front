import store from "./store";

const FETCH_DATA_REQUESTED = "FETCH_DATA_REQUESTED";
const FETCH_DATA_RECEIVED = "FETCH_DATA_RECEIVED";
const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";
const CONNECTED = "CONNECTED";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const DISCONNECTED = "DISCONNECTED";

const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUESTED,
  };
};

const fetchDataReceived = (data) => {
  return {
    type: FETCH_DATA_RECEIVED,
    payload: data,
  };
};

const fetchDataFailed = (error) => {
  return {
    type: FETCH_DATA_FAILED,
    payload: error,
  };
};

const loginConnected = (data) => {
  return {
    type: CONNECTED,
    payload: data,
  };
};

const updateProfile = (data) => {
  return {
    type: UPDATE_PROFILE,
    payload: data,
  };
};

const logout = () => {
  return {
    type: DISCONNECTED,
  };
};

/**
 * Function to get token when email and password are correct
 * @param {*} email
 * @param {*} password
 * @returns data with token
 */

export const fetchLogin = (email, password) => {
  return function (dispatch) {
    dispatch(fetchDataRequest());
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        response.json().then(function (data) {
          dispatch(loginConnected(data));
          dispatch(fetchUsers());
        });
      })
      .catch((error) => {
        dispatch(fetchDataFailed(error.message));
      });
  };
};

/**
 * Function to get user profile
 * using token from previous function
 * @returns user profile
 */

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchDataRequest());
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer` + store.getState().token,
      },
    })
      .then((response) => {
        response.json().then(function (data) {
          dispatch(fetchDataReceived(data));
        });
      })
      .catch((error) => {
        dispatch(fetchDataFailed(error.message));
      });
  };
};

/**
 * Function to update firstname and lastname of user profile
 * @param {*} firstName
 * @param {*} lastName
 * @returns updated user profile
 */

export const updateProfileInfo = (firstName, lastName) => {
  return function (dispatch) {
    dispatch(fetchDataRequest());
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer` + store.getState().token,
      },
    })
      .then((response) => {
        response.json().then(function (data) {
          dispatch(updateProfile(data));
        });
      })
      .catch((error) => {
        dispatch(fetchDataFailed(error.message));
      });
  };
};

/**
 * Function to logout from user profile
 * @returns the initial State
 */

export const Logout = () => {
  return function (dispatch) {
    dispatch(logout());
  };
};
