// without slice

// import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
// interface StateType {
//   count: number;
// }

// const increment = createAction("increment");
// const decrement = createAction("decrement");

// const initialState: StateType = { count: 0 };

// const rootReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state) => {
//       state.count += 1;
//     })
//     .addCase(decrement, (state) => {
//       state.count -= 1;
//     });
// });

// export const store = configureStore({ reducer: rootReducer });

// With slice

import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export interface StateType {
  count: number;
}

const initialState: StateType = { count: 0 };

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export const store = configureStore({ reducer: counterSlice.reducer });
