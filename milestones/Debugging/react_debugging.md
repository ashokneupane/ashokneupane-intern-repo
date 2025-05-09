## What are the most common debugging techniques?
1. React Devtools
2. Console logging
3. Error Boundary
4. React Profiler

## Which tools are most effective for React debugging?
**1. React DevTools**: For inspecting component trees, props, state, and performance profiling.<br>
**2. Browser DevTools**: Built-in tools like breakpoints, the console, network tab, and more.<br>
**3. Jest & React Testing Library**: For unit testing and snapshot testing React components.<br>
**4. Redux DevTools**: For inspecting Redux state (if you're using Redux for state management).<br>
**5. ESLint:** To catch errors or bad practices during development.<br>
**6.VS Code Debugger:** For setting breakpoints and debugging directly inside VS Code.<br>

## How do you debug issues in large React codebases?

**1. Isolate the problem** – Narrow down the component or logic causing the issue.
**2. Log strategically** – Log props, state, and function execution at critical points.
**3. Use Profiler** – Find and fix unnecessary re-renders and performance issues.
**4. Break components into smaller parts** – Easier to test, debug, and reuse.
**5. Write tests** – Ensure stability and catch bugs early.
**6. Use TypeScript (if possible)** – Reduce runtime errors with static type checking.
**7. Collaborate** – Pair programming or code reviews help spot bugs faster.


## React Devtools
![React Devtools](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/debugging/react_devtools.png)<br>

## Browser Console
![Browser Console](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/debugging/browser_console.png)<br>

## Error Boundary
![Error Boundary](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/debugging/error_boundary.png)<br>
Here, `ErrorFallback.jsx` component is created to show the user-defined error on runtime and the component should be wrapped by the `ErrorBoundary` components.

## React Profiler
Please find the video link for profiler:
https://www.loom.com/share/1bcf63f3069c4870b60dc83db169d0e0