# Clean Code
## Understanding Clean Code Principle

### Simplicity
1. Keep code as simple as possible.
2. Instead of writing all code in one function, break it into multiple functions so that each function performs only one task.
3. Use straightforward solutions that clearly solve the problem.

### Readability 
1. Use clear naming conventions for variables, functions, and classes.
2. Proper intendation and space in the code are necessary.
3. proper documentation and comments of each function are necessary.

### Maintainability 
1. Provide proper documentation of the code.
2. Follow coding principles like SOLID and DRY.
3. Maintained a well-structured README file.
4. write unit and feature tests for each functionality of the code.
5. Comment on each business logic section of code.
6. Ensure resuablity of code(components in React) and avoid code duplication.

### Consistency 
1. Consistency should be maintained across all files in the project.
2. Stick to the language style guide (e.g., PSR-12 for PHP).
3. Use the same naming conventions, indentations, and structure throughout the codebase.

### Efficiency 
1. Ensure a high performance score in website performance audits.
2. Optimize the website when needed.
3. Remove unnecessary code and unused files.

---

This one is the dirty code:
```var day = "monday";
var weather ="sunny";

let daytime = function(){
if(day == "monday"){
  if(weather == "sunny"){
    console.log(`this is a good sunny monday`);
  }else if(weather == "cloud"){
    console.log("this is a cloudy monday");
  }else if(weather == "storm"){
    console.log("this is a stormy monday")
  }
}else if(day == "tuesday"){
    if(weather == "sunny"){
    console.log(`this is a good sunny tuesday`);
  }else if(weather == "cloud"){
    console.log("this is a cloudy tuesday");
  }else if(weather == "storm"){
    console.log("this is a stormy tuesday")
  }
}else if(day == "wednesday"){
  //other day of the week
}


}

daytime();
```
The code is hard to read because it has many repetitive if-else blocks, making it long and cluttered. The same logic is repeated for different days, reducing reusability and making maintenance difficult. It can be shortened and made more readable by using reusable structures.

Now, converting into clean code:

```var day ;
var weather ;

weathers = {
  sunny:"sunny",
  cloud:"cloudy",
  storm:"stormy"
}

let daytime = function(day, weather){
  console.log(`this is a good ${weathers[weather]} ${day}` )
}

daytime("monday", "cloud");
```


## Naming Variables & Functions

### ✅ What Makes a Good Variable or Function Name?

1. A good variable name should not be a single character. For example, when summing two numbers, use descriptive names like `sum` or `total`.  
2. A good function name should clearly describe what the function does. For instance, a function that adds two numbers could be named `sumTwoNumbers`.  
3. Use camelCase for function and variable names in JavaScript (e.g., `sumTwoNumbers`, `calculateAverage`).  
4. Avoid vague terms like `data`, `temp`, or `stuff`, as they don’t provide meaningful context.  
5. Names should be long enough to be clear, but not overly wordy or repetitive.

---

### ⚠️ What Issues Can Arise from Poorly Named Variables?

1. It can confuse developers, making the code hard to understand and maintain.  
2. Poorly named variables may lead to logical errors, especially when their purpose isn’t clear.  
3. Debugging becomes more time-consuming due to lack of clarity.  
4. Overall code readability suffers, especially for other team members or future developers.

---

### 🔁 How Did Refactoring Improve Code Readability?

1. Refactoring with clear variable and function names helps avoid confusion and improves understanding.  
2. It reduces debugging time by making code logic more transparent.  
3. New team members can grasp the codebase faster and onboard more efficiently.  
4. Clear naming reduces mental effort, making it easier to follow and reason about the code.

---

### Unclear variable in a given code block
```function p(d) {
  let t = 0;
  for (let i = 0; i < d.length; i++) {
    t += d[i];
  }
  return t / d.length;
}
```

### Making clear and meaningful variable name in above code block
```function calculateAverage(numArray) {
  let total = 0;
  for (let i = 0; i < numArray.length; i++) {
    total += numArray[i];
  }
  return total / numArray.length;
}
```
### Changes in between above two code block

| unclear variable    | clear variable | difference |
| -------- | ------- | ----- |
| t  | total    |   `t` doesnot understandable while `total` helps us to know it is the sum or total of given number list    |
| d | numArray     | `d` doesnot understandable while `numArray` means list of the array of number      |
| p | calculateAverage     | `p` doesnot understandable while `calcuateAverage` function helps us to know that it calculate the average of given number list      |

---

## 📌 Writing Small, Focused Functions
### Why is breaking down functions beneficial?
1. Helps developers understand the code more easily and allows for quicker modifications.
2. Functions can be reused in multiple places, reducing redundancy.
3. Smaller units of code are easier to test and debug.
4. Improves overall code readability and maintainability.
5. Makes the codebase more organized and less prone to errors.
6. Enables changes to be made with minimal impact on the rest of the code.

---

### How did refactoring improve the structure of the code?
1. Each function (add, multiply, display) now handles a specific task, making the overall logic clearer.
2. The code becomes more reusable, avoiding repetition of the same logic across different areas.
3. As the project grows, breaking functionality into smaller, well-defined functions allows for easier scaling and avoids code clutter.

---

Example of long, complex function which take two numbers as an input and add, multiply and console the results by one single function named `addAndMultiply`:

```
function addAndMultiply(num1, num2) {
  const sum = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

  const product = num1 * num2;
  console.log(`The product of ${num1} and ${num2} is: ${product}`);
}

// Example usage:
addAndMultiply(5, 3);
```

Breaking the above code into smaller function:

```
function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

function multiply(num1, num2) {
  const result = num1 + num2;
  return result;
}

function display(num,operation){
  console.log(`The $(operation) of two numbers is: ${num}`);
}

// Example usage:
sumOfTwoNumber = add(5, 3);
multiplyOfTwoNumber = multiply(5,3);
display(sumOfTwoNumber,'sum');
display(multiplyOfTwoNumber,'multiply');
```

The above `addAndMultiply` can be broken down into three smaller functions:<br>
The `add` function is responsible for adding two numbers, <br>
The `multiply` function is responsible for multiplying two numbers and <br>
The `display` function is responsible for printing the results to the console. <br>

Each function have its own responsibility, which aligns with the Single Responsibility Principle—one of the five SOLID principles of object-oriented design.

---

## Commenting & Documentation

### When should you add comments?
1. To explain why certain code is written.
2. To make complex logic easier to understand.
3. To give helpful information for other developers in the future.
4. To follow the flow and structure of the code more easily.
5. To turn off parts of the code during debugging to find and fix errors.

---

### When should you avoid comments and instead improve the code?
1. When the code is simple and easily understood (e.g., no comment is needed for a = a + 2). 
2. When comments become outdated or misleading. 
3. Don’t write comments explaining what the code is already doing; it’s already clear in the code itself.
4. When the comment doesn’t provide any useful information or isn’t needed for understanding.

---

The poorly documentated code:

```
//add
function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

//multiply
function multiply(num1, num2) {
  // do math
  const result = num1 + num2;
  return result;
}

// display
function display(num,operation){
  // print
  console.log(`The $(operation) of two numbers is: ${num}`);
}

// calling
sumOfTwoNumber = add(5, 3);
multiplyOfTwoNumber = multiply(5,3);
display(sumOfTwoNumber,'sum');
display(multiplyOfTwoNumber,'multiply');
```

Above poorly documentated code can be rewrite with proper comment as

```
/**
 * Adds two numbers and returns the sum.
 * 
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The sum of num1 and num2.
 */
function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

/**
 * Multiplies two numbers and returns the result.
 * 
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The product of num1 and num2.
 */
function multiply(num1, num2) {
  const result = num1 + num2;
  return result;
}

/**
 * Displays the result of an operation in a formatted message.
 * 
 * @param {number} num - The result of the operation.
 * @param {string} operation - The name of the operation (e.g., 'sum', 'multiply').
 */
function display(num,operation){
  console.log(`The $(operation) of two numbers is: ${num}`);
}

// Execute functions with sample inputs and display the results
sumOfTwoNumber = add(5, 3);
multiplyOfTwoNumber = multiply(5,3);

display(sumOfTwoNumber,'sum');
display(multiplyOfTwoNumber,'multiply');
```
---

## 📌 Avoiding Code Duplication

### Don't Repeat Yourself(DRY) principle
DRY principle is the fundamental concepts of software development where it allows to write the reusable components, functions, or abstractions to make code more maintainable and efficent instead of repeating the same logic multiple times.

---

### What were the issues with duplicated code?
1. Difficult to maintain.
2. Fixing bugs becomes harder.
3. Debugging takes more time.
4. Developers may get confused and frustrated.
5. High processing power usage can lead to performance issues.
6. New developers may take longer to understand the code.
7. Increases the risk of bugs.

---

### How did refactoring improve maintainability?
1. Reduces code duplication and makes the code cleaner.
2. Converts complex logic into simpler, more manageable parts.
3. Makes the code easier to read and understand.
4. Improves the performance of the application.
5. Lowers the risk of errors.
6. Removes unnecessary or repeated code.
7. Makes bug fixing easier and faster.

---

Here's is the simple javascript that contains the unnecessary repetitions:

```
console.log("Hello, Alice!");
console.log("Hello, Bob!");
console.log("Hello, Charlie!");
console.log("Hello, Dave!");
console.log("Hello, Eve!");
```

In the above code block, the same console.log statement is repeated multiple times with just a change in the name. 
This redundancy can be eliminated by using a loop:

```
const names = ['Alice','Bob','Charlie','Dave','Eve'];
for (let i = 0; i < names.length; i++){
  console.log("Hello," + names[i]);
}
```
This codeblock is more efficient and easier to maintain.

---

## 📌 Refactoring Code for Simplicity

Overly complicated code:
```
class Calc {
  area(a, b, type) {
    if (type === "square") {
      if (a && typeof a === "number") {
        console.log("Area of Square:", Math.pow(a, 2));
      }
    } else if (type === "rectangle") {
      if (a && b && typeof a === "number" && typeof b === "number") {
        let res = 0;
        [1].forEach(() => res = a * b);
        console.log("Area of Rectangle:", res);
      }
    } else {
      console.log("Invalid shape");
    }
  }
}

const c = new Calc();
c.area(4, null, "square");
c.area(4, 5, "rectangle");
```

Refactor code:
```
Class areaCalculator
{
  square(side)
  {
    return side*side;
  }
  rectangle(length,width)
  {
    return length*width
  }
}
const calc = new areaCalculator();
console.log("Area of Square:",calc.square(4));
console.log("Area of Rectangle:",calc.rectangle(4,5));

```
---

### What made the original code complex?
1. poor name class `calc`
2. The `area` method is doing too much- It calculates area as well as perform validation at the same time.
3. It uses unnecessary code and too many `if else` statements.
4. no reusablity of code i.e. the area calculation logic is not separated or reusable.
---
### How did refactoring improve it?
1. Makes the code simple, easy to understand, and easier to extend in the future if needed.
2. Removes unnecessary parts of the code, such as the unused forEach loop.
3. Improves reusability by separating logic into clear, reusable methods.
4. Uses clear and meaningful class and method names.
5. Ensures each method follows the single responsibility principle (does one specific task only).
---

## 📌 Code Formatting & Style Guides

### Importance of consistent code style.
1. Easy to read, debug, and understand.  
2. Reduces confusion and makes code reviews easier.  
3. Makes bugs easier to spot and fix.  
4. Makes it easier to grasp the logic of the code, especially for new developers.  
5. Improves productivity, reduces manual checks, and makes long-term maintenance easier.

### Airbnb javascript style guide.
The Airbnb javascript style guide helps to ensure the consistent and readable coding style.
It follows various rules while writing code to ensure consistent in the coding style.

1. Using `let` and `const` instead of `var` 
2. Utilize arrow function for anonymous function, especially when passing them as an arguments.
3. Use destructuring to extract values from objects and arrays.
4. Employ template literals (```) for string concatenation and embedding expressions.
5. Maintain consistent spacing, indentation, and formatting throughout the codebase


### Some installation of eslint and Prettier is shown in below screenshot:

#### Eslint Install
![Eslint Install](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/react_fundamentals/eslint_install.png)<br>

#### Running Linter
![Running linter](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/react_fundamentals/running_linter.png)<br>

#### Running Prettier
![Running Prettier](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/react_fundamentals/running_prettier.png)<br>

I ran prettier in my console using the command `npx prettier --write .` to format all the file in the project.

Additionally, I used ESLint, which suggested defining prop types. In the file `HelloWorld.jsx`, it recommended using `PropTypes`, so I added them and resolved the issue.

### Why is code formatting important?
1. To maintain consistency in the files and make them readable.
2. To reduce errors and bugs.
3. To save time during code reviews.
4. To improve productivity by saving developers time on manual code formatting.

### What issues did the linter detect?
1. Missing PropTypes in the `HelloWorld.jsx` component.
2. unused variables in some files.
3. React-specific warnings, such as missing key props.
4. Improper indentation and spacing.

### Did formatting the code make it easier to read?
Yes, formatting the code with Prettier significantly improved readability.
It organized the structure, fixed indentation, aligned brackets, and ensured consistent use of quotes and spacing.
This made the code easier to understand, maintain, and review.

## 📌 Handling Errors & Edge Cases
### Stategies for handling errors.

#### 1. Guard clauses/early error handling
Guard clauses are the early exit from a function to handle edge cases or invalid inputs, which improves readability and reducing nesting.

```
function square(value) {
   if(typeof value === 'string'){
    return "Error: value must be an number.";
   }

   //main logic here
}
```

#### 2. Use Try/Catch exception handling.
Another way is to handle the exception is using by try/catch exception block for unexpected or invalid situations and customizing the error message.

```
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  } catch (error) {
    console.error("An error occurred:", error.message);
    return NaN;
  } finally {
    console.log("Division operation complete.");
  }
}

console.log(divide(10, 2)); // Output: 5, "Division operation complete."
console.log(divide(10, 0)); // Output: "An error occurred: Division by zero is not allowed.", NaN, "Division operation complete."
```

#### 3. Input Validation
Always validate input, especially the form request and for function parameters.
For example, type checking, null checks, range checking, and so on.
```
function validateForm(value) {
  if (value == "") {
    alert("Value must be filled out");
    return false;
  }
}
```

#### 4. Logging
Log if there is any error/exception occurs using 

`console.log()`,<br>
`console.info()`,<br>
`console.warn()`,<br>
`console.error()`,<br>
`console.debug()` and so on.<br>


### Function not handling errors and unexpected inputs.

```
function areaOfSquare(value){
  return value*value;
}
```

#### Issue with original code
1. if value is not a number, it will raise a TypeError.
2. Return `NAN` or garbage if passed `null` and `undefined` value.

### Improve & refactor code

```
function areaOfSquare(value) {
  if (value === null || value === undefined) {
    throw new Error("Input value is required.");
  }

  if (typeof value !== "number" || isNaN(value)) {
    throw new TypeError("Input must be a valid number.");
  }

  if (value < 0) {
    throw new RangeError("Length of a square cannot be negative.");
  }

  return value * value;
}
```

### Refactor code note
1. `Guard clauses` are used for quick exists on bad input.
2. It ensures the function only processes valid and positive numbers.

The refactored code now handles invalid user input without raising unhandled exceptions. Instead of crashing, it notifies the user about the specific issue with their input, allowing the program to continue running effectively. This makes the code safer, easier to debug, and more user-friendly. Additionally, the use of input validation and guard clauses improves the overall readability and maintainability of the code.

---

##  Writing Unit Tests for Clean Code

### Importance of unit testing in software development
1. Catches bugs early before code reaches production.
2. Improves code quality by enforcing modular and testable design.
3. Simplifies debugging by isolating test failures.
4. Boosts developer confidence when making changes.
5. Supports refactoring without breaking existing functionality.
6. Enables automation for continuous integration and deployment.
7. Documents expected behavior of functions and components.

### Jest for Javascript
I have used Jest for javascript. The test code is uploaded in the `tests` folder under `onboarding-react-project` project root path.`
Here, is the screenshot of my test cases:
#### Running Test Cases
![Running Test Cases](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/react_fundamentals/running_test_cases.png)<br>


### How do unit tests help keep code clean?
1. Encourages writing small, focused functions that are easier to test and maintain.
2. Helps catch bugs early, preventing issues from reaching the production environment.
3. Promotes modular design, making components more reusable and easier to manage.
4. Enforces clear naming and logical structure, which improves code readability.

### What issues did you find while testing?
I initially wrote my code using ES6 module syntax, but encountered issues running tests with Jest, as it primarily supports CommonJS by default. After some research, I discovered that configuring Babel resolves this compatibility issue. Once set up, Babel successfully allowed me to use ES6 syntax in my tests with Jest.

---







