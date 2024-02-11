import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: StateType = {
  loading: false,
  words: [],
  result: [],
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    getWordsRequest: (state) => {
      state.loading = true;
    },
    getWordsSuccess: (state, action: PayloadAction<WordType[]>) => {
      // payload was any type so we import payloadAction and make it type of wordType
      state.loading = false;
      state.words = action.payload;
    },
    getWordsFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    saveResult: (state, action: PayloadAction<string[]>) => {
      // payload was any type so we import payloadAction and make it type of wordType
      state.loading = false;
      state.result = action.payload;
    },
    clearState: (state) => {
      // payload was any type so we import payloadAction and make it type of wordType
      state.loading = false;
      state.result = [];
      state.words = [];
      state.error = undefined;
    },
  },
});

export const {
  getWordsRequest,
  getWordsSuccess,
  getWordsFail,
  saveResult,
  clearState,
} = rootSlice.actions;

export default rootSlice.reducer;
