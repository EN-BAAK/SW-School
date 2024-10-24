import { createSlice } from "@reduxjs/toolkit";
import { PostSection } from "../../misc/types";
import data from "../../assets/data/data.json";

type InitialState = {
  posts: PostSection[];
};

const initialState: InitialState = {
  posts: data,
};

const cakeSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default cakeSlice.reducer;
// export const { setTheme } = cakeSlice.actions;
