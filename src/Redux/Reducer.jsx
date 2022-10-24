import { initialState } from "./store";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUESTED":
      return {
        ...state,
        loading: true,
      };

    case "CONNECTED":
      return {
        ...state,
        status: "connected",
        token: action.payload.body.token,
      };

    case "FETCH_DATA_RECEIVED":
      return {
        ...state,
        loading: false,
        connected: true,
        data: action.payload,
        error: "",
      };

    case "UPDATE_PROFILE":
      return {
        ...state,
        data: action.payload,
        connected: true,
      };

    case "FETCH_DATA_FAILED":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case "DISCONNECTED":
      return initialState;

    default:
      return state;
  }
};
