---
title: "Your favorite time-machine"
layout: post-toc
date: 2019-01-04
tag:
- tutorial
- software
- hackathon
- reference
blog: true
description: Understanding version control
---

This is a long overdue post regarding one of the tutorials I taught at the 2018 Dartmouth Methods in Neuroscience (MIND) summer school on version control for researchers. Rather than recount my 30 minute talk and demo here, I figured I would share direct links to the materials so interested folks could peruse them at their leisure.

In this talk, and for myself, I've found the analogy of a version control system (e.g. git) as a (social) time-machine incredibly useful for understanding fundamental concepts. In case this framing is useful for others, my talk can be seen in it's entirety at the bottom of this post; the slides accompanying the talk can be found [here](https://github.com/Summer-MIND/mind_2018/blob/master/slides/git_github_slides.pdf).  

Something summer school attendees told me they found really useful were some animated gifs I generated capturing the output of the most commonly used git commands, as well as actions on github.com, to see what to expect and how they work. I've embedded those below as a reference as well. Enjoy!

## `git status`  
See what files are ready to be made into a "snapshot" (committed) and which ones are not being kept track of  
![git status](/assets/example_command_gifs/gitstatus.gif)  

## `git init`  
Create a new git repository for the first time (will not add any files)  
![git init](/assets/example_command_gifs/gitinit.gif)  

## `git add`  
Add file(s) to the list of files that should be made into a "snapshot" (committed)
![git add](/assets/example_command_gifs/gitadd.gif)  

## `git commit`  
Take a "snapshot" of all currently tracked project files. Files need to be "prepped" (staged) for commit using `git add` beforehand.    
![git commit](/assets/example_command_gifs/gitcommit.gif)  

## `git log`  
See the full historical timeline of the project  
![git log](/assets/example_command_gifs/gitlog.gif)  

## `git push`  
Send latest local changes to a remote location (e.g. github)  
![git push](/assets/example_command_gifs/gitpush.gif)  

## `git pull`  
Get the latest changes from a remote location (e.g. github)  
![git pull](/assets/example_command_gifs/gitpull.gif)  

## `git clone`  
Duplicate a remote repository (e.g. github) on your local computer  
![git clone](/assets/example_command_gifs/gitclone.gif)

## `git branch`  
Create a new independent "timeline" for the project  
![git branch](/assets/example_command_gifs/gitbranch.gif)  

## `git revert`  
Undo changes by reversing any specific "snapshot" (commit)  
![git revert](/assets/example_command_gifs/gitrevert.gif)  

## `forking`  
Copy a remote repository on github, to your own remote account on github  
![git fork](/assets/example_command_gifs/gitfork.gif)  

## `pull request`  
Notify a remote repository owner you would like them to review+incorporate your additions  
![pull request](/assets/example_command_gifs/pullrequest.gif)

---
<iframe src="https://www.youtube.com/embed/0DGCnBZBoc0" width="600" height="400"></iframe>
