# Understanding React Hooks: useEffect #23

## When to use UseEffect Hooks.
Whenever we want to run the side effects in your components. 
1. Fetching Data
2. Setting up timers
3. Listening to events
4. Subscribing to services (e.g., sockets)
5. Running code when props/state change

## When should you use useEffect instead of handling logic inside event handlers?
You should use useEffect when you want logic to run as a side effect of rendering, not just in direct response to a user action.
1. You need to fetch data, set up subscriptions, or start timers when the component mounts.
2. You want to react to changes in props or state automatically.
3. You need to clean up resources when the component unmounts.

## What happens if you don’t provide a dependency array?
if the dependency array is not provided, the effect will run after every render - both the initial mount and every update.

## How can improper use of useEffect cause performance issues?
1. Missing dependency array
```
useEffect(() => {
  fetchData(); // runs on every render
});
```

2. Incorrect dependency
```
useEffect(() => {
  doSomething();
}, [unrelatedVar]); // effect re-runs unnecessarily
```

3. Not cleaning up (e.g. timers, subscriptions)
```
useEffect(() => {
  setCount(count + 1); // infinite loop!
});
```

4. Updating state inside effect without control
```
useEffect(() => {
  const id = setInterval(...);
  // no cleanup
});
```
