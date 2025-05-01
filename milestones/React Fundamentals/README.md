# Installing react with Tailwind using Vite Plugin
## 1. Make sure Node.js and npm are installed
In my case I have already installed my node.js and npm. so, to verify that it was installed or not:<br>
`node -v`<br>
`npm -v` <br>

## 2. Creating react app using vite
I prefer `vite` over `create-react-app` because vite starts faster, simple and perform hot reloads for enhancing better developer experience.<br>

`npm create vite@latest`

The above command ask you to type project name(onboarding-react) and selecting framework(react).

## 3. Navigate to project folder
`cd onboarding-react`

## 4. installing Tailwind CSS
I install `tailwindcss` and its peer dependencies using:<br>
`npm install -D tailwindcss@3 postcss autoprefixer`<br>

And, I generated my `tailwind.config.js` and `postcss.config.js` files using:<br>
`npx tailwindcss init -p`

## 5. Configuring template paths
I added the paths to all of my template files in your `tailwind.config.js` file.
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 6. Add the Tailwind directives to my css
I added the `@tailwind` directives for each of Tailwind’s layers to `./src/index.css` file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

## 7. Starting my build process
Run building process using:
`npm run dev`

## 8. Start using tailwind in the project
Finally, I started using Tailwind’s utility classes to style the content by replacing below code in `App.jsx` file.
```
export default function App() {
  return (
    <div className="p-4 text-2xl font-bold text-blue-500 text-center">
    Hello, Tailwind!
  </div>
  )
}
```