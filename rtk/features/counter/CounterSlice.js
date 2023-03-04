const { createSlice } = require("@reduxjs/toolkit");

// set initial state
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
});

module.exports = counterSlice.reducer;
module.exports.counterAction = counterSlice.actions;
