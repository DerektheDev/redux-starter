import configureStore from "./store/configureStore";
import * as actions from "./store/api";
import {
  // bugAdded,
  // bugResolved,
  // getUnresolvedBugs,
  // bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(bugAdded({ name: "Bug 1" }));
// store.dispatch(bugAdded({ name: "Bug 2" }));
// store.dispatch(bugAdded({ name: "Bug 3" }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));

// store.dispatch((dispatch, getState) => {
//   // call API
//   // when resolved, dispatch action to update store
//   dispatch({ type: "bugsReceived", bugs: [1, 2] });
//   console.log("getState", getState());
// });

// // const unresolvedBugs = getUnresolvedBugs(store.getState());
// // console.log(unresolvedBugs);

// const bugs = getBugsByUser(2)(store.getState());
// console.log(bugs);

// store.dispatch({ type: "error", payload: { message: "Error message" } });
store.dispatch(
  actions.apiCallBegan({
    url: "/bugs",
    onSuccess: "bugsReceived",
  })
);
