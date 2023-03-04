const store = require("./app/store");

const { counterAction } = require("./features/counter/CounterSlice");

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(counterAction.increment());
store.dispatch(counterAction.increment());
store.dispatch(counterAction.increment());
store.dispatch(counterAction.increment());

store.dispatch(counterAction.decrement());
store.dispatch(counterAction.decrement());

store.dispatch(counterAction.decrement());
