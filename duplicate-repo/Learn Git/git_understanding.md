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

## Merge Conflicts & Conflict Resolution

### What caused the conflict?
I created a new branch called `feature-branch` and made some changes on it. After that, I staged and committed the changes on `feature-branch`. Then, I switched to the `main` branch and made changes to the same file that I had modified in `feature-branch`. I staged and committed those changes as well. Finally, while on the `main` branch, I pulled the changes from `feature-branch` into `main`, which resulted in a merge conflict.

### How do you resolve it?
After the conflict occurred, I reviewed the changes from both the `main` and `feature-branch`. In that case, the VS Code editor presented several options like Accept Current Change, Accept Incoming Change, Accept Both Changes, and Compare Changes. I chose the Accept Both Changes option, then staged and committed the resolved merge conflict.

### What do your learn?
From this task, I learned how a merge conflict occurs and how it can be resolved. Additionally, I became familiar with various Git commands that can be used for conflict resolution.


## Advanced Git Commands & When to Use Them

### What does each command do?

| Command      | Description |
| ----------- | ----------- |
| `git checkout main -- <file>`      | restore a specific file from the `main` branch into your current working branch, without affecting any other files or change       |
| `git cherry-pick <commit>`   | apply a single commit from another branch to your current branch        |
| `git log`   | view the project's commit history        |
| `git blame <file>`   | show you last modified the particular line of file and when        |

### When would you use it in a real project (hint: these are all really important in long running projects with multiple developers)? 

| Command      | Usage |
| ----------- | ----------- |
| `git checkout main -- <file>`      | When you accidentally changed a file (e.g., config.json) and now want a fresh copy of the file from main without affecting your other work      |
| `git cherry-pick <commit>`   | When you want to apply a specific bug fix from one branch to another      |
| `git log`   | you are starting your workday and want to see what changes were recently made to the project        |
| `git blame <file>`   | you're investigating a bug in config.js and wants to know who last modified the line that's causing issues       |

### What surprised you while testing these commands?
I was suprised that how easily we can solve our real world scenario using git while working in long running projects with multiple developers.


**Some screenshot related to git:**<br>

**git status**
![git status](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/git_status.png)

**git add**
![git add](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/git_add.png)

**git commit**
![git commit](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/git_commit.png)

**merge conflict**
![merge conflict](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/merge_conflict.png)

**merge editor**
![merge editor](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/merge_editor.png)

**merge conflict resolution**
![merge conflict resolution](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/merge_resolution.png)

**git log**
![git log](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/git_log.png)

**git branch**
![git branch](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/git_branch.png)

**switching branch**
![switching branch](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/switching_branch.png)

**git checkout main --`<file>`**
![git checkout main -- <file>](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/git_checkout_main.png)
**note:** index.html file is restored from main branch through testing branch

**git cherry-pick `<commit>`**
![git cherry-pick <commit>](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/git_cherry_pick.png)
**note:** 8c7ebe8178726f2a06d80a96dd64012a60f8c5b9 is pull on testing branch from main branch 

**git blame `<file>`**
![git blame <file>](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/git_blame.png)



## git bisect

### What does git bisect do?
Git bisect is used to detect the bad commit that causes the issue. <br>
It works based on the binary search principle: first, it asks us to mark the bad commit (where the bug exists) and the good commit (where there is no bug). Between those commits, it finds the middle commit where the bug was introduced using the binary search strategy.

### When would you use it in a real-world debugging situation?
You would use `git bisect` when you know the project was functioning correctly at an earlier point but has since developed a problem, and you need to identify which commit introduced the issue. It is especially helpful when there are a large number of commits, making manual review too time-consuming or impractical.

### How does it compare to manually reviewing commits?
| git bisect    | Manual reviewing |
| -------- | ------- |
| It is faster as it used the principle of binary search(log2n)  | It is slower as the commit need to be checked one by one (linear search)    |
| It is automated process, user have little effort | It is not automatic process as user requires manual examination of each commit     |
| It is suitable where there is large number of commit or large project   | It is suitable where there is small number of commit or small project    |


### Real world scenario for git bisect
As I needed to track down which commit introduced a bug—a typo in the .gitignore file (READMEmd instead of README.md)—I used git bisect.
**git bisect start**
![git bisect start](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/git_bisect_start.png)
<br>

And then i set the current HEAD to the bad state and i put my first commit to the good state. In between those two state, i need to track the bad commit causing the issue.
**git bisect good**
![git bisect good](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/git_bisect_good.png)
<br>

As the process of finding bad commit is going using the two different command `git bisect bad` and `git bisect good` and finally found the commit causing the type error issue. The issue is putting the typo error READMEmd instead of README.md
**git bisect bad**
![git bisect bad](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/git_bisect_bad.png)
<br>

After finding bad commit, the HEAD is reset to the current/present commit.
**git bisect reset**
![git bisect reset](https://github.com/ashokneupane/ashokneupane-intern-repo/blob/main/duplicate-repo/images/git/git_bisect_reset.png)
<br>

