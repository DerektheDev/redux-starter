import configureStore from "./store/store";
import * as actions from "./bugs/actions";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

const store = configureStore();

store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 2" }));
store.dispatch(actions.bugAdded({ description: "Bug 3" }));
store.dispatch(actions.bugResolved({ id: 1 }));

// unsubscribe();

console.log(store.getState());
