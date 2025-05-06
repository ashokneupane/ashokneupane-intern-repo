# Static Analysis Checks in CI/CD #35

## What is CI/CD

CI/CD stands for Continuous Integration and Continuous Delivery/Deployment, where it involves an automated set of steps to move the code into production.

## Importance of CI/CD in software development

1. Speeds up the development lifecycle.
2. Runs code through multiple test steps, improving code quality.
3. Enhances team productivity by reducing repetitive tasks.
4. Enables faster feedback and quicker issue resolution.

## CI workflow
![CI Workflow](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/ci_workflow.png)<br>

## Git Hooks(Husky)
![Git Hooks(Husky)](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/git_hooks_husky.png)<br>

## Pull Request Fail
![Pull Request Fail](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/milestones/images/pull_request_fail.png)<br>


## What is the purpose of CI/CD?

1. Automating the build, test, and deployment process.
2. Ensuring that code changes are frequently integrated, tested automatically, and delivered quickly.
3. Improving developer productivity, code quality, and delivery speed.
4. Reducing the chances of bugs making it into production.

## How does automating style checks improve project quality?

1. Ensures consistent code style across the project
2. Catches syntax or formatting issues early in development
3. Reduces code review overhead by automating repetitive feedback
4. Helps developers focus on logic and functionality, not styling
5. Maintains a clean and readable codebase, which improves maintainability

## What are some challenges with enforcing checks in CI/CD?
I found the initial setup challenging, especially due to version compatibility issues. For example, Husky displayed deprecation warnings during installation, which made the process more confusing.

## How do CI/CD pipelines differ between small projects and large teams?
### Small projects
1. smaller workflows, often just build and test.
2. one or two developers may control the entire setup.
3. fewer dependencies, faster build times.
4. May not need the full CD(manual deployment is okay).

### large projects
1. complex pipelines with multiple stages(build, test, deploy, etc).
2. Required collaboration between devs, QA, DevOPs, and many more developers.
3. More dependencies and integration(e.g. Docker, Kubernetes).
4. Automated deployments to staging/production are common.

---


