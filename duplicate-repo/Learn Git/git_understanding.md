# Git Concept

## Staging Vs Committing

### Differences between staging and committing

#### Staging
- Staging means you're preparing for the commit.
- Staging is before committing.
- Staging can be done as: `git add <file>`.
- After staging, changes go into the staging area(also called the index).

#### Committing
- Committing means you saves the staged changes into the git repository.
- Committing is after staging.
- Committing can be done as: `git commit -m <file>`.
- After committing, the committed file goes into the git commit history with a unique ID and message.

### Reasons for git seperating staging and committing steps
- For making the seperate commit history for each file. For example, when working on both bug fixes and new features, you can stage and commit each separately. First, stage and commit the bug fix files with a relevant message (e.g., "Fix login redirect"). Then, stage and commit the new feature files (e.g., "Add user profile page"). This keeps your commit history clean, organized, and easier to understand.

- Staging acts as a review step before committing. It allows you to see which files are staged, and if there are any files that shouldn’t be committed, you can easily remove them from the staging area. This reduces the likelihood of accidentally committing unintended changes.

### When would you want to stage changes without committing?
1. When we want to make review the staged changes to ensure they are correct and complete before committing them.
2. When you are working on multiple tasks and want to stage changes for one task before starting for the another task without committing.
3. When you want to stage specific changes from a file while leaving other changes unstaged.


**Note**: As mentioned on the issue description, `git reset HEAD <file>` is not working on new version of git. This code has been replaced by `git reset <file>`.

## Branching and Team Collaboration

### Why is pushing directly to main problematic?

**1. No code review:** Pushing code directly to main lack the review of code so maintaining code quality and catching bugs is hard.

**2. Increases merge conflict:** When multiple developers work on the same project without creating branch, pushing the code will results in increased of merge conflict so, it will take time to resolve those conflict.

**3. Risk of breaking the main branch:** A bad push can break the main branch and introduce bugs that affect end-users or downstream environments as main is the stable branch.

### How do branches help with reviewing code?
**1. Isolated Changes:** Each developers can work on seperate branches for their different work. Based upon the feature, they can make seperate branches and isolate their work, so that reviewing the code is easy.
**2. Pull request:** Developer can make a pull request(PR), where team members can review, discuss, and approve changes before merge their code into main branch. 
**3. Running test seperately:** Automated test can be run independently before merging to main branch so that no unfinished or buggy code reaches the main branch.

### What happens if two people edit the same file on different branches?
**Merge conflict:** if two people work on same file at different branch, it will create the conflict in between their code while merging their work and can be resolved manually. And we can write the new committed message for merge conflict resolution.

