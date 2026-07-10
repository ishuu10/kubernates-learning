git 

--versioning system 
-- there are 4 areas where code is travelled 


localworking directory.    staging area.  lcoal repositry.  remote remositr
                                                clone       <---------

 we can make some changes--->commit ---> add the changes ---> push 
                           (its like snapshot
                           of changes)

git pull-> combines  fetch and merge 

git fetch -> pull the changes merge-> merges them to local workking directory

git rebase-moved the feature bracnh to tip of main

git merge - like tying a know between feature and main ,that knot is new branch commit 




STARTING POINT (BEFORE MERGE OR REBASE)
---------------------------------------
A, B, C = Commits on main branch
D, E    = Commits on your feature branch

      (main)
A---B---C
         \
          D---E (feature)


OPTION 1: GIT MERGE (The "Join" Approach)
-----------------------------------------
Command: (on main) git merge feature

Result: Creates a NEW "Merge Commit" (M).
Branch history remains non-linear and split.

      (main)
A---B---C-----M
         \   /
          D---E (feature)

Characteristics:
- Preserves complete context of feature branch.
- Easy to see *when* branches were combined.
- Non-linear, complex history graphs.


OPTION 2: GIT REBASE (The "Replay" Approach)
-------------------------------------------
Command: (on feature) git rebase main

Result: Rewrites D and E to appear *after* C.
Feature branch commits get NEW hashes (D', E').

      (main)
A---B---C
         \
          D'---E' (feature)

*(Next, typical flow is a fast-forward merge on main)*
Command: (on main) git merge feature

A---B---C---D'---E' (main & feature)

Characteristics:
- Linear history, clean progression.
- DANGER: Rewrites history (Do not use on shared/public branches!).
- Simpler graph, but obscures branch context.



| Feature | git merge | git rebase |
| :--- | :--- | :--- |
| **History** | Non-linear (shows divergence) | Linear (straight line) |
| **Commit IDs** | Preserves original commit hashes | Rewrites history (creates new hashes) |
| **Merge Commit** | Creates a explicit merge commit | Does not create a merge commit |
| **Best For** | Shared, public, public branches | Local, private feature branches |


