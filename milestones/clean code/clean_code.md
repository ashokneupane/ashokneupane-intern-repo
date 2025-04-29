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