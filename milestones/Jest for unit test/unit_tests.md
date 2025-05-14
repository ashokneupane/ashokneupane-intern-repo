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

## Testing React Components with Jest & React Testing Library #17
### React Testing Library with Jest
React Testing Library is a lightweight testing library that helps you test React components by simulating how users interact with your app — focusing on behavior, not implementation details.

Some screenshot of testing:
## Hello World Test
![Hello World Test](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/jest_test/hello_world_test.png)<br>

## Click Counter Test
![Click Counter Test](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/jest_test/click_counter_test.png)<br>


### What are the benefits of using React Testing Library instead of testing implementation details?
1. Focuses on what the user sees and does, not how the component is built.
2. Less likely to break when UI or internal code structure changes.
3. Tests are easier to read, write, and maintain over time.
4. Promotes use of semantic HTML and accessibility roles (e.g., `getByRole`, `getByLabelText`).
5. Fewer mocks needed; tests behave more like real user interactions.
6. Safe to refactor internals without breaking tests, as long as the UI behavior stays the same.
7. Clearly shows how the app is expected to behave from the user’s perspective.


### What challenges did you encounter when simulating user interaction?
I initially wrote my code using ES6 module syntax, but encountered issues running tests with Jest, as it primarily supports CommonJS by default. After some research, I discovered that configuring Babel resolves this compatibility issue. Once set up, Babel successfully allowed me to use ES6 syntax in my tests with Jest.<br>

Some other challenges are:<br>

**1. Async behavior** – UI updates may require `waitFor` or `findBy` to handle delays.<br>
**2. Complex components** – Elements like modals or dropdowns can be difficult to interact with.<br>
**3. Poor accessibility** – Missing labels or roles make element selection harder.<br>
**4. Form handling** – Typing and submitting forms needs accurate event simulation.<br>
**5. Third-party UI libraries** – Wrapped elements can complicate user interaction and queries.

## Mocking API Calls in Jest #16
### Running test:
![Running Test](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/jest_test/mock_api_jest.png)<br>

### Why is it important to mock API calls in tests?
1. It avoids real network calls and make it faster, more reliable tests.
2. It simulates different scenarios (e.g., success, error, delay) to test how your code handles them.
3. It improves performance by not delaying from real requests.
4. It can run offline - no internet needed.

### What are some common pitfalls when testing asynchronous code?
1. **Not waiting for async ops** – Leads to flaky tests.
2. **Race conditions** – Can cause inconsistent failures.
3. **Poor error handling** – Misses edge cases.
4. **Complex setups** – Makes tests fragile.
5. **Timeout issues** – Causes unnecessary delays or failures.

---

## Testing Redux with Jest #15
### What was the most challenging part of testing Redux?
1. **Async thunks** are tricky due to multiple states (`pending`, `fulfilled`, `rejected`).
2. **Mocking APIs** adds complexity and requires tools like `jest.mock()` or `msw`.
3. **Redux setup** (like wrapping components in `<Provider>`) can clutter tests.
4. **Over-testing logic** instead of focusing on behavior makes tests harder to maintain.
5. **State structure changes** can break multiple tests, increasing maintenance.

### How do Redux tests differ from React component tests?
1. Redux tests are logic-based and often don't require rendering components.
2. Component tests usually involve the DOM and often need the Redux store if they use `useSelector` or `useDispatch`.
3. Redux tests are usually unit tests, while component tests can be unit, integration, or end-to-end.

### Redux reducers and actions test in jest
![Redux reducers and actions test in jest](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/jest_test/redux_counterslice_test.png)<br>

---

