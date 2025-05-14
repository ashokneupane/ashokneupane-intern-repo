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

# Preventing Unnecessary Renders with useCallback #21
## What is useCallback?
useCallback is a hook in react which memoize the callback functions. It memoizes a callback function and prevents unnecessary re-renders of a child component.
useCallback can be defined as:
```
const cachedFn = useCallback(fn, dependencies)
```

## Video link for useCallback function 
https://www.loom.com/share/6221ca61111140d082077fe6323dc0c7

The video shows the unnecessary rendering of the child components when button click of the parents component.

If we remove callback function from the parent component, then both child and parent components re-render.

## What problem does useCallback solve?
The problem that `useCallback` solves is preventing unnecessary re-rendering of child components when the parent component re-renders, thereby helping to optimize performance.

## How does useCallback work differently from useMemo?

### useCallback
**purpose:** Memorizes a function.<br>
**Use case:** When you want to prevent passing a new function reference to child components on every render (to avoid unnecessary re-renders).<br>
**Example:**
```
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

### useMemo
**Purpose:** Memoizes the result of a computation.<br>
**Use case:** When you have an expensive calculation and want to cache the result.<br>
**Example:**
```
const sortedData = useMemo(() => expensiveSort(data), [data]);
```

## When would useCallback not be useful?
1. If the function is only used within the same component, there's usually no benefit in memoizing it.
```
const handleClick = () => setCount(c => c + 1);
```

2. If the app is small or the component isnot suffering from performances issues.
3. If the dependencies inside useCallback change every render, it will recreate the function anyway — defeating the purpose.

---

# Optimizing Performance with useMemo #22

## How does useMemo improve performance?
useMemo improves performance by memoizing the result of an expensive computation. In the `NumberList` component, the expensive `total` calculation only runs once—when the numbers array changes. Without useMemo, this calculation would run on every re-render, even when it’s unnecessary.

## When should you avoid using useMemo?
1. The computation is cheap or fast.
2. You don’t experience performance issues.
3. The dependency array is unstable or changes too often.

Overusing useMemo can actually hurt performance by adding overhead.

## What happens if you remove useMemo from your implementation?
If useMemo is removed, the expensive calculation would run every time the component re-renders, such as when clicking the “Re-render” button. This leads to noticeable delays, especially with large datasets or slow computations.

---

