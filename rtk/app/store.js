const { configureStore } = require("@reduxjs/toolkit");

const counterReducer = require("../features/counter/CounterSlice");

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

console.log(store);

module.exports = store;
