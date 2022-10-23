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

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
