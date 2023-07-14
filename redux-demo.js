const redux = require("redux");
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "dispatch") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const localState = store.getState();
  console.log(localState);
};
store.subscribe(counterSubscriber);

store.dispatch({ type: "dispatch" });
store.dispatch({ type: "dispatch" });
store.dispatch({ type: "dispatch" });
store.dispatch({ type: "dispatch" });
store.dispatch({ type: "dispatch" });

store.dispatch({ type: "decrement" });
