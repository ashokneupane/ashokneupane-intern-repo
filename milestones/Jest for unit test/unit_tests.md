# 📌 Introduction to Unit Testing with Jest

## what is Jest?
Jest is a Javascript testing framework developed by meta, which is used for testing react applications.

## Importance of unit testing in software development
1. Catches bugs early before code reaches production.
2. Improves code quality by enforcing modular and testable design.
3. Simplifies debugging by isolating test failures.
4. Boosts developer confidence when making changes.
5. Supports refactoring without breaking existing functionality.
6. Enables automation for continuous integration and deployment.
7. Documents expected behavior of functions and components.

The test code is uploaded in the `tests` folder under `onboarding-react-project` project root path.<br>
Here, is the screenshot of my test cases:
## Running Test Cases
![Running Test Cases](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/react_fundamentals/running_test_cases.png)<br>

## Why is automated testing important in software development?
**1.Efficiency and Speed:** Runs tests faster than manual testing, enabling frequent and rapid feedback.<br>
**2.Consistency and Reliability:** Performs tests the same way every time, reducing human error.<br>
**3.Cost-Effective Over Time:** Initial setup takes effort, but it saves time and resources in the long run.<br>
**4.Quick Feedback Loop:** Helps developers catch and fix bugs early in the development process.<br>
**5.Supports Regression Testing:** Ensures that new updates don’t break existing features.<br>
**6.Scalability:** Handles large, complex test cases more easily than manual testing.<br>
**7.Enables CI/CD:** Essential for continuous integration and deployment processes, leading to faster and safer releases.<br>

## What did you find challenging when writing your first Jest test?
I initially wrote my code using ES6 module syntax, but encountered issues running tests with Jest, as it primarily supports CommonJS by default. After some research, I discovered that configuring Babel resolves this compatibility issue. Once set up, Babel successfully allowed me to use ES6 syntax in my tests with Jest.