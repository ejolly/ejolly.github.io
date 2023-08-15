---
title: Software
layout: page
---

{% include asciinema.html recording="/assets/ascii/software.json" loop="false" rows="6" %}

### Py-Feat

Python toolbox for facial expression analysis.  
[Github](https://github.com/cosanlab/py-feat) |  [Docs](https://py-feat.org)  |  [Slides](https://ejolly-py-feat.surge.sh/)  

[![arXiv-badge](https://img.shields.io/badge/arXiv-2104.03509-red.svg)](https://arxiv.org/abs/2104.03509) [![Downloads-badge](https://static.pepy.tech/badge/py-feat)](https://pepy.tech/project/py-feat)
{:.not-prose}

### Neighbors

A Python package for using collaborative filtering to predict affective responses from sparse data.  
[Github](https://github.com/cosanlab/neighbors) |  [Docs](https://cosanlab.github.io/neighbors)   

[![arXiv-badge](https://img.shields.io/badge/arXiv-2109.06906-red.svg)](https://arxiv.org/abs/2109.06906)  [![Downloads-badge](https://static.pepy.tech/badge/neighbors)](https://pepy.tech/project/neighbors)
{:.not-prose}

### Pymer4

A Python package for analyzing and simulating standard and multi-level regression data. Performs standard and robust regression, but also features a wrapper around the [lme4](https://cran.r-project.org/web/packages/lme4/index.html) mixed-modeling [R](https://www.r-project.org/) package. Makes it much easier to use lme4 from within python and in conjunction with data analysis libraries like [pandas](https://pandas.pydata.org/).  
[Github](https://github.com/ejolly/pymer4) |  [Docs](https://eshinjolly.com/pymer4/)  

[![DOI-badge](https://zenodo.org/badge/90598701.svg)](https://zenodo.org/record/1523205) [![DOI-badge](http://joss.theoj.org/papers/10.21105/joss.00862/status.svg)](https://doi.org/10.21105/joss.00862) [![Downloads-badge](https://static.pepy.tech/badge/pymer4)](https://pepy.tech/project/pymer4)
{:.not-prose}

### Nltools

A Python package for analyzing brain-imaging data, though also usable for other types of data. Makes data manipulation, model building and fitting quite simple. Builds upon several popular python libraries for [brain-imaging analysis](http://nipy.org/) and [machine learning](http://scikit-learn.org/stable/) more generally.         
[Github](https://github.com/cosanlab/nltools) |  [Docs](https://nltools.org) | [Scipy 2020 talk](https://youtu.be/1c1AnXLs7xM)   

[![DOI-badge](https://zenodo.org/badge/DOI/10.5281/zenodo.2229813.svg)](https://doi.org/10.5281/zenodo.2229813) [![Downloads-badge](https://static.pepy.tech/badge/nltools)](https://pepy.tech/project/nltools)
{:.not-prose}

### SvelteTurk

An desktop application for easily administering tasks and experiments on [Amazon Mechanical Turk](https://www.mturk.com/). Provides an GUI-based alternative to tools like [psiturk](http://psiturk.org/). Built in javascript using [svelte](https://svelte.dev/) and [electron](https://www.electronjs.org/).          
[Github](https://github.com/ejolly/svelte-turk) |  [Website](https://eshinjolly.com/svelteturk)   

### Py-utilz

A Python package for faster and easier declarative data analysis like [dpylr in R](https://dplyr.tidyverse.org/)    
[Github](https://github.com/ejolly/py-utilz) | [Docs](https://eshinjolly.com/py-utilz/)

### pyfit

A high-level computational model-fitting toolbox in Python. Particularly useful for easily fitting separate models to different individuals/groups/clusters and interfacing with data analysis libraries like  [pandas](http://pandas.pydata.org/).  
[Github](https://github.com/ejolly/pyfit)


### Cosan Lab analysis containers

"Containerized" brain-imaging data-analysis environments prebuilt with several neuroimaging specific programs, alongside the [scientific python stack](https://www.scipy.org/about.html). Skips the need to manually go through tedious software installation steps and makes it easier to conduct [reproducible research](https://www.nature.com/nrn/journal/v18/n2/full/nrn.2016.167.html). The containers are currently used by the [Cosan Lab](https://cosanlab.com/).       
Docker: [Github](https://github.com/cosanlab/cosanToolsDocker) | [Docker-Hub](https://hub.docker.com/r/ejolly/cosantoolsdocker/)  
Singularity: [Github](https://github.com/cosanlab/cosanToolsSingularity) | [Singularity-Hub](https://singularity-hub.org/collections/108/)
