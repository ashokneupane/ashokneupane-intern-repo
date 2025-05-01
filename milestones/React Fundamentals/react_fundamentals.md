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


