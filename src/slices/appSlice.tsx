import { createSlice } from "@reduxjs/toolkit";

// base of the api url
export interface AppState {
  url: string;
}

const initialState: AppState = {
  url: "https://localhost:44398/api/"
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {}
});

// Action creators are generated for each case reducer function
export default appSlice.reducer;