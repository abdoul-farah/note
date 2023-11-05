import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    update: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { update } = searchSlice.actions;

export const store = configureStore({
  reducer: searchSlice.reducer,
});
