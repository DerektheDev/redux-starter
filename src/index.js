import configureStore from "./store/store";
import * as actions from "./bugs/actions";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

const store = configureStore();

store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 2"));
store.dispatch(actions.bugAdded("Bug 3"));
store.dispatch(actions.bugResolved(1));

// unsubscribe();

console.log(store.getState());
