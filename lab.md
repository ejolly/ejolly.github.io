---
title: Lab
layout: page
---
<style>
  .image {
    max-width: 40%;
    margin: 0 auto;
  }
</style>

# Coming this fall...the Sciminds Research Studio

I'm excited to preview that the new lab **Sciminds**, short for the <span class="my-highlight">Social Computations and Interacting Minds Research Studio</span>will be launching this Fall! 

Look out for a new website with team-member bios and more details about opportunities to get involved!

<!-- *I had some fun trying to make a podcast summary of my work courtesy of [NotebookLM](https://notebooklm.google.com/), and it's only half-bad! Blame Google for errors, social faux pas, cringe, and the poor Lil John impersonator shouting 'yea' in the background every once in a while.*

<div class="obp-grid">
  <audio controls class="obp-audio" src="https://dl.dropboxusercontent.com/s/6ipllqop17zlgr9/Ain%27t%20It%20The%20Truth.mp3?dl=0">
  </audio>
</div>
-->
*Last Updated: 07/30/25*   

As of **January 2025** I've [officially started](https://psychology.ucsd.edu/people/profiles/ejolly.html) as a new Assistant Professor in [UC San Diego's awesome Department of Psychology](https://psychology.ucsd.edu/). I'm currently growing a research group with the current broad aims of understanding how we *learn* about, *represent*, *remember*, and *share* information about other people by observing or participating in different kinds of *social interactions*. Until we're up and running I'll continue to post updates here.

I love taking an *interdisciplinary* approach to asking these questions drawing inspiration from: cognitive neuroscience, social psychology, behavioral economics, affective computing, and machine-learning & AI. In particular, I'm a big believer in the mutually-beneficial relationship between scientific inquiry and methodological development. New tools are just as exciting as new findings because they offer us [new perspectives](https://onlinelibrary.wiley.com/doi/epdf/10.1111/tops.12404) on how to explore our psychological questions. 

<div class="image">
  <img src="{{site.url}}/assets/images/sketch.png" alt="Alt Text" >
</div>

So far this has included stuff like: (a) using [online games](https://www.interactingminds.com/research-projects/why-do-we-gossip) to study how [gossip](https://www.sciencedirect.com/science/article/pii/S0960982221004632) helps us learn from and connect with others<sup id="a1">[1](#f1)</sup> ; (b) scanning brains while people watch TV shows to [model neural & affective state dynamics](https://doi.org/10.1126/sciadv.abf7129) using hidden-markov-models and [collaborative filtering](https://link.springer.com/article/10.1007/s42761-022-00161-2) (hello Netflix recommender system!); (c) using natural-language-processing to study how [social relationships organize our memories](https://psyarxiv.com/bw9r2); (d) using psychological-utility models to understand how [social emotions like guilt and indebtedness drive our decision-making](https://www.nature.com/articles/s41467-023-44286-9.epdf?sharing_token=NIf7F6ZBWfJIfbGC8ILBZdRgN0jAjWel9jnR3ZoTv0OnNr1VgUao8PGix03Ez_tPL329X4MVbjab8h0_bmcT6IcqcyihbqbYPkQGhGb8nzxaJBfs-C62qJB_ofzGcLQq2UJ8ibYvEAPQ5P2iKoh6bTqwsIP5OEmcEzy2Wyp96C4%3D); and (e) building [open-source tools](https://py-feat.org) for making [facial expression analysis via deep-nets](https://www.youtube.com/watch?v=BpZ3EqSxEXk) accessible to all social scientists; making [fMRI analysis more intuitive](https://nltools.org/); and bringing [multi-level models to Python](https://eshinjolly.com/pymer4).

If any of this sounds interesting to you and if any of the positions below sound like a good fit, feel free to [reach out](mailto:eshin.jolly@gmail.com)!

# Opportunities to join the lab

## PhD students

*I'm not actively recruiting for the 2026 PhD cycle, but will be reviewing applications. Please checkout [UCSD Psychology's prospective student page](https://psychology.ucsd.edu/graduate-program/prospective-students/index.html) for more details.*

This is a great opportunity for anyone who thinks the research directions above sound interesting or has some related ideas they want to explore together. Pursuing a PhD is a big journey that can often looks pretty different from what you might expect. At the same time, the most rewarding parts of that journey differ from person-to-person and even from [*past*-you to *future*-you!](https://eshinjolly.com/2021/05/03/delightful-journey/) You don't need to have things figured out at this stage, but you do have to bring an uncompromising willingness to fail, learn, and *grow*.

## Post-doctoral researchers
Feel free to reach out if you think it would be fun to work together! While the lab doesn't currently have funding for a full-time position, this could be a great opportunity to explore new research directions and funding avenues and learn/develop new methods together. It's also a good opportunity for someone who's still undecided about their long-term career goals and is considering academia, [industry or other paths](https://eshinjolly.com/portfolio/). 


<b id="f1">1. </b><em>If podcasts are more your thing, I had the awesome opportunity to be on <a href="https://open.spotify.com/episode/1qTwJx3tt6O4KlIZcxfEyo?si=30eeedd5271d47ad"> Normal Gossip </a> and talk about my work a bit! </em>[↩](#a1)

<style>
  .attention {
    -webkit-animation-duration: 4s;
    animation-duration: 4s;
    animation-delay: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }
@keyframes bounce {
  from,
  0%,
  8%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  5%,
  12% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1) rotate(-10deg);
  }

  12% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  16% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  /* 20% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  } */

  /* 24% {
    transform: translate3d(0, 0, 0);
  } */

  100% {
    transform: translate3d(0, 0, 0);
  } 
}

.bounce {
  animation-name: bounce;
  transform-origin: center bottom;
}

</style>
