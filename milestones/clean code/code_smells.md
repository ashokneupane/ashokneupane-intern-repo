## Identifying & Fixing Code Smells #36
Code smells are indicators or warnings that suggest your code is not well-written and that there may be problems in its design or structure.

### Common code smells are:
1. Long methods and not following the Single Responsibility Principle.
2. Duplicate code.
3. Unused variables or parameters.
4. Tightly coupled classes/functions.
5. Inconsistent naming and code quality.

### How code smells impact code quality:
1. Makes code harder to read and understand
2. Increases the chance of introducing bugs during updates
3. Makes testing and debugging more difficult and time-consuming
4. Slows down team collaboration and onboarding
5. Leads to tight coupling and low reusability

### Some code smells:
#### 1. Magic Numbers & Strings 
```
function calculateDiscount(price) {
  if (price > 1000) {
    return price * 0.1; // 0.1 is a "magic number"
  }
  return 0;
}

function getUserRole(role) {
  if (role === 'admin') { // 'admin' is a magic string
    return 'Full access';
  }
  return 'Limited access';
}
```
#### 2. Long Functions

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

#### 3. Duplicate Code
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
#### 4. Large Classes (God Objects)
```
class UserManager {
  constructor(user) {
    this.user = user;
    this.dbConnection = null;
  }

  // Handles user authentication
  authenticate() {
    console.log('Authenticating user...');
  }

  // Manages user data
  updateUserData(newData) {
    console.log('Updating user data...');
  }

  // Manages database connections
  connectToDatabase() {
    this.dbConnection = 'Connected';
    console.log('Database connected');
  }

  // Sends notifications to user
  sendNotification(message) {
    console.log('Sending notification:', message);
  }

  // Logs out user
  logout() {
    console.log('Logging out...');
  }
}
```
#### 5. Deeply Nested Conditionals
```
function checkConditions(a, b, c) {
    if (a > 10) {
        if (b < 5) {
            if (c === "hello") {
                console.log("All conditions met!");
            } else {
                console.log("Condition c failed.");
            }
        } else {
            console.log("Condition b failed.");
        }
    } else {
        console.log("Condition a failed.");
    }
}

checkConditions(11, 4, "hello"); // Output: All conditions met!
```

#### 6. Commented-Out Code
```
const pi = 22/7;
let r;

// calculate the square
function areaOfSquare(value){
    return value*value;
}
// function areaOfCircle(){
//     return pi*r*r;
// }
```
#### 7. Inconsistent Naming
```
let x = 100; // What does 'x' represent?
let y = "John"; // 'y' doesn't describe the purpose
let z = true; // 'z' is vague
```

---

### Refactor code
#### 1. Magic Numbers & Strings 
```
const DISCOUNT_THRESHOLD = 1000;
const DISCOUNT_RATE = 0.1;
const ROLE_ADMIN = 'admin';

function calculateDiscount(price) {
  if (price > DISCOUNT_THRESHOLD) {
    return price * DISCOUNT_RATE;
  }
  return 0;
}

function getUserRole(role) {
  if (role === ROLE_ADMIN) {
    return 'Full access';
  }
  return 'Limited access';
}

```
#### 2. Long Functions

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

#### 3. Duplicate Code
```
var day ;
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

#### 4. Large Classes (God Objects)
```
class Authenticator {
  authenticate(user) {
    console.log('Authenticating user...');
  }
}

class UserDataManager {
  updateUserData(user, newData) {
    console.log('Updating user data...');
  }
}

class DatabaseManager {
  connect() {
    console.log('Database connected');
  }
}

class NotificationManager {
  sendNotification(message) {
    console.log('Sending notification:', message);
  }
}

class UserManager {
  constructor(user) {
    this.user = user;
    this.authenticator = new Authenticator();
    this.userDataManager = new UserDataManager();
    this.databaseManager = new DatabaseManager();
    this.notificationManager = new NotificationManager();
  }

  authenticate() {
    this.authenticator.authenticate(this.user);
  }

  updateUserData(newData) {
    this.userDataManager.updateUserData(this.user, newData);
  }

  connectToDatabase() {
    this.databaseManager.connect();
  }

  sendNotification(message) {
    this.notificationManager.sendNotification(message);
  }
}

```
#### 5. Deeply Nested Conditionals
```
function checkConditions(a, b, c) {
    if (a <= 10) return console.log("Condition a failed.");
    if (b >= 5) return console.log("Condition b failed.");
    if (c !== "hello") return console.log("Condition c failed.");

    console.log("All conditions met!");
}

checkConditions(11, 4, "hello"); // Output: All conditions met!

```

#### 6. Commented-Out Code
```
// calculate the square
function areaOfSquare(value){
    return value*value;
}
```
#### 7. Inconsistent Naming
```
let userAge = 100;
let userName = "John";
let isLoggedIn = true;

```
---

### What code smells did you find in your code?
1. Inconsistent naming of variables.
2. Using unused and commented-out code.
3. Overloading classes (taking on too many responsibilities).
4. Duplicate code (does not follow the DRY principle).
5. Functions have too many responsibilities.
6. Using magic numbers instead of declaring constant variables.

### How did refactoring improve the readability and maintainability of the code?
1. Removing unused code makes the code easier to read and understand.
2. The code is easy to modify due to adherence to the single responsibility principle.
3. Bugs are easier to find because of the use of small functions.
4. The code is less prone to bugs due to loosely coupled classes.
5. Replacing magic numbers with named constants improved clarity and made the code more self-explanatory.

### How can avoiding code smells make future debugging easier?
1. **Improved Code Clarity**: Clean, well-structured code is easier to read and understand, helping developers quickly locate and fix issues.
2. **Simplified Maintenance**: When code follows best practices (e.g., the single responsibility principle), changes or fixes are easier to implement with minimal risk of introducing new bugs.
3. **Easier Bug Isolation**: Small, well-defined functions and loosely coupled classes allow developers to isolate bugs more effectively.
4. **Reduced Redundancy**: Eliminating duplicate code reduces the chances of inconsistent behavior and makes debugging more straightforward.
5. **Better Naming Conventions**: Consistent and meaningful naming of variables and functions helps developers understand the code’s purpose without needing to decipher ambiguous or misleading names.
6. **More Reliable Codebase**: A cleaner codebase with fewer smells generally has fewer hidden issues, making it more stable and predictable during debugging.

---