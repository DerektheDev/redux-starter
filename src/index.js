import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, getUnresolvedBugs } from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(bugAdded({ name: "Bug 1" }));
store.dispatch(bugAdded({ name: "Bug 2" }));
store.dispatch(bugAdded({ name: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState());

console.log(unresolvedBugs);
