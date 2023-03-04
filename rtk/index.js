const store = require("./app/store");

const { counterAction } = require("./features/counter/CounterSlice");

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(counterAction.increment(5));
store.dispatch(counterAction.increment(10));

//
