# Git concept: staging vs committing

## Differences between staging and committing

### Staging
- Staging means you're preparing for the commit.
- Staging is before committing.
- Staging can be done as: `git add <file>`.
- After staging, changes go into the staging area(also called the index).

### Committing
- Committing means you saves the staged changes into the git repository.
- Committing is after staging.
- Committing can be done as: `git commit -m <file>`.
- After committing, the committed file goes into the git commit history with a unique ID and message.

## Reasons for git seperating staging and committing steps
- For making the seperate commit history for each file. For example, when working on both bug fixes and new features, you can stage and commit each separately. First, stage and commit the bug fix files with a relevant message (e.g., "Fix login redirect"). Then, stage and commit the new feature files (e.g., "Add user profile page"). This keeps your commit history clean, organized, and easier to understand.

- Staging acts as a review step before committing. It allows you to see which files are staged, and if there are any files that shouldn’t be committed, you can easily remove them from the staging area. This reduces the likelihood of accidentally committing unintended changes.

## When would you want to stage changes without committing?
1. When we want to make review the staged changes to ensure they are correct and complete before committing them.
2. When you are working on multiple tasks and want to stage changes for one task before starting for the another task without committing.
3. When you want to stage specific changes from a file while leaving other changes unstaged.


**Note**: As mentioned on the issue description, `git reset HEAD <file>` is not working on new version of git. This code has been replaced by `git reset <file>`.
