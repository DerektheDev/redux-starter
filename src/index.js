import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(actions.bugAdded({ name: "Bug 1" }));
store.dispatch(actions.bugAdded({ name: "Bug 2" }));
store.dispatch(actions.bugAdded({ name: "Bug 3" }));

console.log(store.getState());
