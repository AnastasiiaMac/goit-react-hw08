import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
};
const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload.toString();
    },
  },
});
export const { changeFilter } = slice.actions;
export const selectedNameFilter = (state) => state.filters.name;
export default slice.reducer;
