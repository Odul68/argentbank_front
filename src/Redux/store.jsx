import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./Reducer";

export const initialState = {
  loading: false,
  connected: false,
  users: [],
  error: "",
  token: "",
  status: "void",
};

const store = configureStore({ reducer });

export default store;
