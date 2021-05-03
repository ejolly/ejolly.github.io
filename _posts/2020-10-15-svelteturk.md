---
title: "Managing Amazon's Mechanical Turk with a nice user interface"
layout: post
date: 2020-10-15
tag:
- scientific-tooling
- svelte
- javascript
- web development
blog: true
description: Giving Mturk the paint job it needs
---

In the [Cosan Lab](https://www.cosanlab.com), like many other reserach groups, we often run experiments or surveys on the web using [Amazon's Mechanical Turk marketplace](https://www.mturk.com/). One of the constant pain points we've run into is on the *administration* side of things. In other words, quickly and reliably creating and managing HITs and contacting and paying Workers, which Mturk's ownsite is lackluster for (when using custom URLs). There already exist several great libraries like [psiturk](https://psiturk.org/) which act as a stort of "one-stop-shop" for building, managing and hosting web studies. However, we've often found that it's helpful to decouple administration from the tasks themselves such as in the case of [multiplayer synchronous experiments](https://www.sciencedirect.com/science/article/pii/S0960982221004632). While there are several great software libraries for programmatically controlling Mturk as a requestor such as [Boto](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/mturk.html) in Python, this can be a bit of a chore and still presents a hurdle for less experienced or younger students (e.g. undergraduates) in the lab who were less comfortable with programming. 

To help out with this I started developing a graphical desktop application (GUI) to make life a bit easier. Its working name is [SvelteTurk](https://eshinjolly.com/svelteturk/#), because I've fallen absolutely in love with a Javascript framework called [Svelte](https://svelte.dev/). What attracted me to Svelte was not only it's ease of use and [intuition-building design](https://eshinjolly.com/2020/07/12/scipy), but that it was, and is, explicitly used in a context where not every team member has to be highly technically proficient: editorial teams at the The New York Times. Many of their latest interactive graphics [especially around coronavirus](https://www.nytimes.com/interactive/2021/us/covid-cases.html), are built and embedded alongside content using Svelte. Further, the original author, [Rich Harris](https://twitter.com/Rich_Harris) is a very compelling and thought-provoking speaker when it comes to [rethinking the approach to modern web development](https://www.youtube.com/watch?v=AdNJ3fydeao).

Combined with another framework called [Electron](https://www.electronjs.org/) which makes it relatively straighforward to build cross-platform desktop applications using the languages of the web (HTML, CSS, JS), Svelteturk allows you to create, manage, review, and edit MTurk HITs, interact with Workers, and handle Qualifications, without writing a single line of code or using Mturk's clunky web interface. It's *very much* a work-in-progress and I've only been handling bug-fixes or adding new features as needed internally. However, it's entirely [open source](https://github.com/ejolly/svelteturk) and as always contributions are welcome! Clicking the image below will take you to the documentation site that has a ton more information.

<figure>
<div style="text-align:center">
<a href="https://eshinjolly.com/svelteturk">
  <img src="https://eshinjolly.com/svelteturk/assets/setup.jpg" width="600">
  </a>
  </div>
</figure>
<i style="font-size: .75em; max-width: 75%">SvelteTurk only handles nodes and connections highlighted in green, namely the creation and management of HITs via communication with MTurk and a local database. It's up to you to build your experiment or survey and store appropriate data as see you see fit.</i>

