---
title: "Predicting wait lines using computer vision and machine learning"
layout: post
date: 2019-02-11
tag:
- machine-learning
- web app
- project
blog: true
description: Real-time queue tracking 
---

<div class="flex w-1/2 mx-auto gap-x-2">
  <img src="/assets/images/lineatkaf/main.png" class="w-3/5">
  <img src="/assets/images/kaf_people.png" class="w-2/5">
</div>
<figcaption class="text-sm italic text-center">This blog post was co-written with Jin.</figcaption>

For the past year I've been working on the Line@KAF project with [Jin Cheong](http://jinhyuncheong.com/) with the support from [COSAN lab](http://cosanlab.com), [DALI lab](http://dali.dartmouth.edu/projects-blog/kaf), and [Magnuson Center of Entrepreneurship](https://magnuson.dartmouth.edu/).

Line@KAF allows real-time tracking of the length of the queue at KAF, a popular cafe at Dartmouth College. Users can browse the menu and prices, see data on popular times by hour, and submit their requests and feedback to the KAF team!

While we are making finishing touches to the iOS and Android apps, we launched a beta version of the app
on our website at [http://lineatkaf.com/](http://lineatkaf.com/).
Please visit our website to take a sneak peek at our app and send us your thoughts and suggestions.  

<div class="grid w-3/4 grid-cols-2 gap-4 mx-auto">
    <img src="/assets/images/lineatkaf/img1.png" class="my-0">    
    <img src="/assets/images/lineatkaf/img2.png" class="my-0">  
    <img src="/assets/images/lineatkaf/img3.png" class="my-0">  
    <img src="/assets/images/lineatkaf/img4.png" class="my-0">  
</div>

To make our app possible, we use a combination of tools including computer vision algorithms, neural network models, and cloud computing services. We'll write a more detailed post of how it works in the future but here is a quick infographic overview of the system.

<figure>
    <img src="/assets/images/lineatkaf/infographic.png" class='w-3/4 mx-auto'>    
</figure>

While we are currently testing our services at the King Arthur Flour cafe located at Baker-Berry library,
we look forward to extending our services to multiple locations on campus and in the community where students,
customers, and businesses can all benefit from knowing the line.
