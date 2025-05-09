# Practise React Debugging in a Test Repo

## Debugging buggy example
![Debugging buggy example](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/debugging/debugging_buggy_example.png)<br>

![State Count](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/debugging/state_count.png)<br>

## What was the issue?
The issue in the code lies in this line inside the Child component.<br>
`state.count = state.count + 5`<br>
The code mutates the state directly, which violates React's state immutability principle. In React, you should never directly modify state objects that come from  `useState`, because:
1. It does not trigger a re-render.
2. It leads to unpredictable behavior.
3. It breaks React’s internal optimizations.

In your Parent, you have:<br>
`const [state, setState] = useState({ count: 0 })`<br>
And you're passing state to the Child.

Inside Child, you do:<br>
`state.count = state.count + 5`

This modifies the state object that belongs to the Parent, but React has no idea it was changed, so it won't re-render anything based on that mutation.

## What debugging method did you use?
I used the React DevTools in the browser. In the **Components** tab of the DevTools, I was able to see the component tree along with the state and its value (`count`). From there, I identified the issue. I also went through the code line by line and consulted ChatGPT to help confirm and understand the problem.

## How did you resolve the problem?
I resolved the problem by creating a copy of the prop in the child, then transform the properties on the cloned data. I used object literal and spread syntax as:
```
function Child({state}){
   const stateClone = {...state}
   stateClone.count= stateClone.count+5;
  return <div><p>count + 5 = {stateClone.count} </p></div>
}
```