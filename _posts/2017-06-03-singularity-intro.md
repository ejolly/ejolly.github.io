---
title: "Analysis containers and compute clusters"
layout: post
date: 2017-06-03
tag:
- tutorial
- analysis
blog: true
description: using containers on a HPC
---

Recently [Dartmouth graduate students](http://pbs.dartmouth.edu/) collectively organized a full day of workshops to share and help each other out with the plethora of data analysis tools we regularly use in our respective research endeavors. Amongst these was a brief hands-on tutorial I gave with [Matteo Visconti](http://mvdoc.me/) on utilizing container-based analysis environment with [Discovery](http://techdoc.dartmouth.edu/discovery/), Dartmouth's high-performance compute cluster (HPC).

For a nice primer on what containers are and how they can be useful for sharing and reproducing research I highly recommend checking out Matteo's [blog post](http://mvdoc.me/2017/using-singularity-to-make-analyses-reproducible.html). The general idea is to create a portable computing environment that has all the tools one might need to conduct a particular analysis workflow (i.e. the actual programs and system architecture that your analysis scripts can be executed with).

While tools like [Docker](https://www.docker.com/) have been especially popular in the software development world for this purpose, utilizing them in a computing environment where one does not have root privileges (e.g. a university HPC maintained by system administrators) is largely not possible. [Singularity](http://singularity.lbl.gov/) was developed for exactly this purpose: the benefits of a containerized analysis environment, that *can* be utilized on a HPC. Because getting setup can be a bit tricky, our tutorial provides basic HPC users (particularly those with personal computers running OSX) with the steps required to get going with Singularity. Just follow the link below. Enjoy.

<div style="text-align: center; font-size: 2em"><a class="nounderline" href="https://github.com/ejolly/IntroToSingularity">Intro to Singularity</a>
