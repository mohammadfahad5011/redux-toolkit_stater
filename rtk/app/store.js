const { configureStore } = require("@reduxjs/toolkit");

const counterReducer = require("../features/counter/CounterSlice");

const store = configureStore({
  reducer: {
    balCounter: counterReducer,
  },
});

console.log(store);

module.exports = store;
