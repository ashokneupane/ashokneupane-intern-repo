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