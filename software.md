---
title: Software
layout: page
---

In addition to my primary work, I also routinely develop, contribute to, and maintain several research software projects. Currently these include:

**nltools**

>A python package for analyzing brain-imaging data, though also usable for other types of data. Makes data manipulation, model building and fitting quite simple. Builds upon several popular python libraries for [brain-imaging analysis](http://nipy.org/) and [machine learning](http://scikit-learn.org/stable/) more generally.         
>[Github](https://github.com/ljchang/nltools) |  [Docs](http://neurolearn.readthedocs.io/en/latest/)

**pymer4**

>A python wrapper around the [lme4](https://cran.r-project.org/web/packages/lme4/index.html) mixed-modeling [R](https://www.r-project.org/) package. Makes it much easier to use lme4 from within python and in conjunction with data analysis libraries like [pandas](http://pandas.pydata.org/).  
>[Github](https://github.com/ejolly/pymer4)

**pyfit**

>A computational model-fitting toolbox in python. Builds upon functionality from [lmfit](https://github.com/lmfit/lmfit-py) package which itself wraps [scipy.optimize](https://docs.scipy.org/doc/scipy/reference/optimize.html) functionality. Particularly useful for modeling group data from multiple participants and interfacing with data analysis libraries like  [pandas](http://pandas.pydata.org/).  
>[Github](https://github.com/ejolly/pyfit)


**Cosan Lab analysis containers**

>"Containerized" brain-imaging data-analysis environments prebuilt with several neuroimaging specific programs, alongside the [scientific python stack](https://www.scipy.org/about.html). Skips the need to manually go through tedious software installation steps and makes it easier to conduct [reproducible research](http://www.nature.com/nrn/journal/v18/n2/full/nrn.2016.167.html). The containers are currently used by the [Cosan Lab](http://cosanlab.com/).       
>Docker: [Github](https://github.com/cosanlab/cosanToolsDocker) | [Docker-Hub](https://hub.docker.com/r/ejolly/cosantoolsdocker/)  
>Singularity: [Github](https://github.com/cosanlab/cosanToolsSingularity) | [Singularity-Hub](https://singularity-hub.org/collections/108/)
