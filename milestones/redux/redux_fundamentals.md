# Introduction to Redux Toolkit #26
## Installing Redux Toolkit and React Redux.
![Installing Redux Toolkit and React Redux.](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/react_fundamentals/installing_react_toolkit.png)<br>

## When should you use Redux instead of useState?

### useState
**1. Simple Components:** If your component’s state is self-contained and doesn’t need to be shared across other components, useState is the way to go.<br>
**2. Quick and Easy:** For small projects or individual features, useState keeps things simple and efficient.<br>
**3. Limited State Needs:** When you don’t need to manage a lot of state, useState works perfectly without adding unnecessary complexity.<br>

### Redux
**1. Complex Apps:** If your app is large or has a lot of state to manage, Redux helps keep things organized.<br>
**2. Shared State:** When you need to share the same state between many components, Redux makes it easy to keep everything in sync.<br>
**3. Predictable State:** Redux’s structure makes state changes predictable, which is great for debugging and scaling your app.<br>

----

## Using Selectors in Redux Toolkit #25

### What are the benefits of using selectors instead of directly accessing state?
1. The same selectors can be resused across multiple components, which avoids duplication of code.
2. selectors hide the structure of the redux state from components.
```
// selector
export const selectUserName = (state) => state.user.name;
```
```
// in component
const name = useSelector(selectUserName);
```
3. Selectors are plain functions and easy to test in isolation, without involving React or the Redux store.
4. Make code easier to update and manage because of centralized state access.

---
