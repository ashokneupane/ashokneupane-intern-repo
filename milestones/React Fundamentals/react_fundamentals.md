## What challenges did you face during setup?
I didn’t face any major challenges during the setup of React with Tailwind CSS. However, while adding the Tailwind directives in the `index.css` file, I encountered a warning:
**Unknown at rule @tailwind css(unknownAtRules)**.

After some investigation, I realized that this was just a VS Code warning—not an actual error. It didn’t affect the functionality, and Tailwind CSS worked as expected. The warning was related to VS Code’s CSS language server not recognizing Tailwind-specific `@tailwind` directives.

## Some screenshot while setting the react app with tailwind css:
### Creating React app using Vite
![Creating React app using Vite](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/react_fundamentals/installing_react.png)<br>

### Installing Tailwind
![Installing Tailwind](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/react_fundamentals/installing_tailwind.png)<br>

### Configuring Tailwind path
![Configuring Tailwind path](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/react_fundamentals/configuring_tailwind_path.png)<br>

### Browser View of React with Tailwind
![Browser View of React with Tailwind](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/react_fundamentals/react_with_tailwind.png)<br>

---

## Understanding Components & Props #30

### Dynamic display of "Hello, Focus Bear!" using components and props
![Hello Focus Bear](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/react_fundamentals/hello_focus_bear.png)<br>

### Why are components important in React?
**1. Enhances Reusability** – Write once and use in multiple places across the app.<br>
**2. Improves Readability and Maintenance** – Components are easier to read, update, and debug.<br>
**3. Encapsulates Logic and Structure** – Each component manages its own logic and UI independently.<br>
**4. Boosts Performance** – Only the necessary components re-render, not the entire page.<br>
**5. Simplifies Scalability** – Easy to expand the application without affecting existing code.<br>

---

## Handling state & User Input #29

Please find the video link:<br>
https://www.loom.com/share/301ab8553f3d4a45abadfa91bb3cff16<br>

### What happens if we modify state directly instead of using setState?

Modified state directly:
`count = count + 1`

This direct modification doesn’t work because React doesn't detect the change, so it won't re-render the component. The count variable will not update, and it causes an error in the console: "Assignment to constant variable."

Please see the below screenshot for more details:

![Modify State Directly](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/react_fundamentals/modify_state_directly.png)<br>

---

## 📌 Styling with Tailwind CSS #28
Counter.jsx:

```
import {useState} from 'react';
import Button from './components/Button';
function Counter(){
    const [count, setCount] = useState(0);
return (
    <>
<Button onClick={() => setCount(count+1)}> Click Me </Button>
<p>You have click {count} times</p>
</>
);
}
export default Counter;
```

Button.jsx:

```
export default function Button(props) {
    return (
        <button
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold rounded active:bg-blue-700"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}
```
Please find the below video link where button is customized using tailwind css:

https://www.loom.com/share/f735f50fb2d9475e93fc4bd2766325cb<br>


### What are the advantages of using Tailwind CSS?
1. Utility class makes fast and straightforward - no need to make seperate css files.
2. Speeding up the development process by reducing the need to switch between HTML and CSS.
3. Faster page reload and improved performance by removing unused css files.
4. Provide a high degree of customization and flexibility.
5. Built-in responsive classes like md:, lg:, etc., help you adjust layouts easily across screen sizes.

### What are some potential pitfalls?
1. **Cluttered HTML** – Too many utility classes can make markup hard to read.
2. **Messy in large projects** – Without structure, code can become repetitive and unmanageable.
3. **Learning curve** – Utility-first approach may be confusing for beginners.
4. **Code duplication** – Inline styling can lead to repeated patterns across files.
5. **Complex customization** – Editing the config file requires extra knowledge and effort.

---

