---
title: "Sometimes a project can be an unexpected but delightful journey"
layout: post
date: 2021-05-03
tag:
- academia
- javascript
- web development
- scientific tooling
blog: true
description: The project taketh, but the project also giveth.
---

*This is post is a reflection on my experiences as a grad-student and the unexpected ways that a [recently published project](https://www.sciencedirect.com/science/article/pii/S0960982221004632) impacted my life. I wrote this as a current post-doc looking back and I have no expectations this will generalize to everyone (or anyone) in similar circumstances, but maybe some folks might it useful or entertaining.*

## The hamster-wheel death-spiral

<div style="margin-left:auto; margin-right:auto; text-align: center; margin-bottom: 2em">
<img src="https://images.squarespace-cdn.com/content/v1/59bc9a021f318d2ce39268c8/1506233183117-B968XGVTX2WMGDZ7SQ4R/ke17ZwdGBToddI8pDm48kPPJlLwfF1ZKCaao6uPxYBJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k6sq9GEl9ZUDkp1sRKcAyKq73LBCgj7GHSm2wXSrBl1oXcWlnrWoBiy1_RNtaPhhA/101+-+Searching.jpg?format=2500w" width="400">
<figcaption style="top: 10px; max-width: 85vw;"><em>Inspecting his fridge for something to eat, the grad student peers into a box as barren as his stomach, heart, and wallet<sup id="algs"><a href="#flgs">*</a></sup></em></figcaption>
</div>

You don't have to doom-scroll for long on Twitter to get a sense for how graduate school (and academia writ large) can wear away at even the most excited or resilient folks. While academia suffers from many of the same systemic cultural issues that affect other parts of society, there's also the long, pseudo-predictable delay between the effort you put into a project and the traditional "outcome," i.e. publication; kind of like a variable-interval reward-schedule [(Miltenberger, 1996)](https://www.google.com/books/edition/Behavior_Modification_Principles_and_Pro/8TZBBAAAQBAJ?hl=en&gbpv=1&dq=Behavior+Modification:+Principles+and+Procedures+%7C+6th+Edition&pg=PR4&printsec=frontcover). I'm certainly no exception and [my recently published work on the social value and function of gossip](https://www.sciencedirect.com/science/article/pii/S0960982221004632) has been one of the longest roller coasters of my academic life.

I entered graduate school in 2012 and quickly came to learn, both implicitly and explicitly (like many folks I assume), that even though some things are changing, there's a very real sense in which publications feel like the "currency" of academia. Walking in as a bright-eyed student, it's not unreasonable to eventually come to fatalistically measure your own sense of progress, development, and even self-worth through the "success" of your science, rather than *joy* of your discoveries and contributions, no matter how big or small. Each scathing review, rejected manuscript, and ambiguous statistical result<sup id="a1">[1](#f1)</sup> can feel like a huge setback and make you question: Why am I doing this again? What's the point? Does anyone care? Do *I* care?

Rather that rehash the details of my particular flavor of misery, suffice to say for a long time in grad school, it was this way of looking at the enterprise and myself that consumed my thoughts. It reinforced the hamster-wheel death-spiral that takes a serious toll on mental health: I felt the pressure of the [publish-or-perish](https://www.theguardian.com/science/2011/sep/05/publish-perish-peer-review-science) machine, which made me question *why* I was doing what I was doing, which destroyed my motivation to participate in science, which only served to remind me of the pressure. I constantly felt lost, defeated, and angry. My cynicism and negativity grew about many things, but mostly the *process* of doing science, and anything I was actually interested in studying suffered as a result. As the late [Dan Wegner (1992)](https://scholar.harvard.edu/files/dwegner/files/wegner_premature_demise_1992.pdf) characterized it, I became increasingly comfortable as as a *pointer*: quick to criticize, but reluctant to do anything about it. At peak negativity, I called my [sister](https://jihiijolly.com/) and exasperated loudly:  

> The problem *with* science, is that it's done by humans.

She lovingly had a coffee mug made for me with a minor, but purposeful typo that still annoys (and yet provokes) me to this day. 

<div style="margin-left: auto; margin-right: auto; text-align: center;">
<img src="/assets/images/mug.jpg" width="400">
<figcaption style="top: 10px; max-width: 85vw;"><em> (Fig 1) No, no, no. The problem OF science, is that it's done by humans.</em></figcaption>
</div>

## And so it begins...

When I started working with my then recently hired [advisor](http://lukejchang.com/) (~2015), not only was I coming from a pretty dismal *mental* place, I was very much lacking the technical competency that our study ultimately required to pull off. We were both interested in understanding why gossip seems so ubiquitous [(Dunbar, 1996)](https://www.google.com/books/edition/Grooming_Gossip_and_the_Evolution_of_Lan/nN5DFNT-6ToC?hl=en&gbpv=1&pg=PA1&printsec=frontcover) and what social function(s) it serves. We began by piloting *group* experiments in a laboratory setting, because we were very committed to fostering *real* interactions between people. As life would have it, when you live and work in [The Shire](https://pbs.dartmouth.edu/) with a small student body that's mostly away during summers, scheduling multi-person studies can be a bit of a... challenge<sup id="a2">[2](#f2)</sup>. If my memory serves, over many months, we collected a grand total of about 4 groups (of 6 people) worth of useable pilot data (~24) that wasn't otherwise plagued by technical or scheduling issues. Not a great start, but a great hamper on enthusiasm.

Around the same time, my advisor shared with me how he had recently learned enough web-development to create our [lab website](https://www.cosanlab.com) using Python and the neat things that might be possible with web technology. Little did I know that these initial conversations would drastically change my approach to not only this particular project, but my thinking about research more broadly. Having no experience in this area, we started pondering what a real-time interactive group experiment *online* might look like. We came across the [MeteorJS](https://www.meteor.com/) framework: a Javascript library that makes is relatively easy to "synchronize" data between the end-users of a web application in near real-time. While in some respects this type of functionality seems trivial in 2021 (e.g. real-time chat applications are everywhere now and even embedded direclty into many websites), to a grad-student with the tiniest amount of web development experience, it felt like opening the door to an entire world of things that I hadn't ever noticed before.

Rather than suggest I "learn enough to get the project going," I was fortunate to be mentored by someone who encouraged me to jump head-first into any number of rabbit holes, no matter how directly or in-directly related to my work. Gifted a small supply of Redbull, I threw myself headfirst into the wild west of web-app development and [Javascript](https://www.destroyallsoftware.com/talks/wat).

<div style="margin-left:auto; margin-right:auto; text-align: center; margin-bottom: 2em">
<img src="https://ars.els-cdn.com/content/image/1-s2.0-S1097276509006418-gr2_lrg.jpg" width="600">
<figcaption style="top: 10px; max-width: 85vw;"><em>(Fig 2) In Alon's (2009) <a href="https://www.sciencedirect.com/science/article/pii/S1097276509006418">How to Choose a Good Scientific Problem</a> he encourages PIs to adopt the mentorship schema on the right, suggesting that meandering is an integral part of the research process rather than a nuisance. He suggests that sailing into the unknown can facilitate more rich, strange and unique experiences and combat the emotional toll of perceived failure that comes from expecting the trajectory on the left. However, embracing meandering, Alon notes, requires an "uncommon degree of openness." In my experience, this can be especially true the farther you meander from where you think you should be going.</em></figcaption>
</div>

## Someone was right: it's about the journey not the destination

<div style="margin-left:auto; margin-right:auto; text-align: center; margin-bottom: 2em">
<img src="https://images.squarespace-cdn.com/content/v1/59bc9a021f318d2ce39268c8/1536166062949-ZKW14T8AMSRU9YYBZ1VR/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/191+-+Enjoying+%28smaller%29.jpg?format=2500w" width="600">
<figcaption style="top: 10px; max-width: 85vw"><em>Enjoying his work, the grad student solemnly ponders whether he is a victim of Stockholm Syndrome<sup id="algs"><a href="#flgs">*</a></sup></em></figcaption>
</div>

Not only did I find myself becoming as interested web development as our original research question, but in hindsight, it's the *way* it unfolded that had a huge impact on me. Rather than learning a new skill as a "means to an end," I found myself amused at the irony of intently reading a large literature on human communication and coordination, on the one hand, while trying to engineer a system that allowed *machines* (internet browsers) to communicate and coordinate on the other. My amusement grew into obsession, the kind of obsession you're told is an implicit "requirement" for a successful research career. But mine wasn't really about a scientific topic per se. Rather, it was learning to *think differently about what was possible* as a budding theoretician and experimentalist. Of finding inspiration in unexpected places.

Over many caffeine-induced manic sessions I came across ideas and concepts that were completely new to me. Take for example, the difference between a top-to-bottom, procedurally executed experiment script designed for a single participant and one that needs to manage the large number of potential *states* that a group of interacting participants could find themselves at any moment:
- What should happen to everyone else if one person drops out part way through a study?
- What should happen if someone refreshes their browser during the study, quickly disconnecting and reconnecting to their fellow group members?
- What if someone stops responding to their group members, because their cat runs out of their house and they have to chase it down the street because well, *life*? (this actually happened to one of our participants who emailed me apologizing profusely and who was obviously compensated in full)

It turns out that [finite-state machines](https://en.wikipedia.org/wiki/Finite-state_machine) are a useful abstraction for handling exactly this type of complexity:

<div style="margin-left:auto; margin-right:auto; text-align: center; margin-bottom: 2em">
<img src="https://turkserver.readthedocs.io/en/latest/_images/experiment-flow.png" width="800">
<figcaption style="top: 10px; max-width: 85vw"><em>(Fig 3) An early version of a state diagram I made to track a participant's "flow" through our study. The hand-drawn version on my office white-board along with my lack of hygiene at the time, looked a lot like a scene from <a href="https://i.pinimg.com/originals/d5/1a/43/d51a434cc8daa460a700a3a3d4b5d402.jpg">A Beautiful Mind</a> minus any semblance of genius. </em></figcaption>
</div>

Little did I know that ideas like this would serve as a kind of mental and conceptual "[scaffold](https://en.wikipedia.org/wiki/Zone_of_proximal_development)" for contributing to later work in the lab, such as how [state dynamics in the ventromedial prefrontal cortex seem to reflect on-going emotional experiences](https://advances.sciencemag.org/content/7/17/eabf7129). I came to see this project as an opportunity to *actually* practice technical skills I had read about, and that I (much) later had the honor of teaching to *other* folks, e.g. [version control via git and github](https://eshinjolly.com/2019/01/04/git_github/)<sup id="a3">[3](#f3)</sup>. Bolstered by tiny bits of confidence and enthusiasm (or just sheer mania) I began asking a few questions to the author of one of the software libraries that my project used. I ended up contributing to *their* [documentation](https://turkserver.readthedocs.io/en/latest/launching/live-management.html#troubleshooting) based on my own experiences running my study and was encouraged to apply for a PhD internship at [Microsoft Research NYC](https://www.microsoft.com/en-us/research/lab/microsoft-research-new-york/)<sup id="a4">[4](#f4)</sup>. 

I was immediately confused as to why that made any sense and what a cognitive neuroscience PhD student with mediocre programming ability had to offer a bunch of computer scientists. After many pep talks about why it was worth applying regardless of the outcome, I feel like I lucked out again getting an opportunity to spend a summer working with [Sid Suri](https://www.sidsuri.com/) and [Duncan Watts](https://www.asc.upenn.edu/people/faculty/duncan-watts-phd) in 2016. Not only did that turn out to be one of the most fun experiences of my graduate career, but it helped me discover an entire field I new very little about at the time: computational social science [(Lazar et al., 2020)](https://science.sciencemag.org/content/369/6507/1060). I attended a [conference](https://www.kellogg.northwestern.edu/news-events/conference/ic2s2/2016.aspx) I had never been to before, in a city that I had never visited,  and coaxed some lab members to make the trek as well.

One of the most profound things I learned from my experience at the time and that has stuck with me ever since, was the *ethnography* of the Mturk marketplace. Workers are [highly communicative](https://dl.acm.org/doi/pdf/10.1145/2872427.2883036) and [highly collaborative](https://dl.acm.org/doi/pdf/10.1145/2818048.2819942), which honestly should come as no surprise to anyone. But it often does so long as the primary way researchers think of Mturk is as "cheap labour force" rather than [ordinary folks just trying to get by, by grinding through hours of surveys and experiments each day](https://ghostwork.info/). This was consistent with the participant feedback I received in our study (snippets from [turkopticon](https://turkopticon.ucsd.edu/)):

> *Very fun game. I think it was 30 minutes at most, and I got a $3 bonus plus the $1.5 base pay. Very glad to be grouped with awesome cooperative people, and the chatting was fun too. Definitely one of the best HITs I've done.*

It turns out that people *really like* interacting with other people online and some of our findings demonstrating how gossip can build social connections, extended well beyond the end of our study:

> *Purple birdie, if you are reading this - it was nice chatting with you. Thanks for liking my bee, but your bird was still better!*


## Back to The Churn, but some how different

The several years that followed my internship, weren't particularly kind my gossip project. It languished in peer-review hell, sometimes being rejected with no feedback, because "it's not possible to study gossip empirically," (thanks Reviewer 2!). More often, it was because notions about *what gossip is* elicited strong reactions, given our strong folk intuitions [(Foster, 2004)](https://journals.sagepub.com/doi/abs/10.1037/1089-2680.8.2.78). I happen to like this quote by [Paul Bloom (2003)](https://journals.sagepub.com/doi/abs/10.1037/1089-2680.8.2.138?journalCode=rgpa):

> *...gossip is an arena where some of the most interesting aspects of our mental life are laid bare.* 

All the while at various conferences that I presented my work, I often received the exact *opposite* feedback. Though the project certainly hadn't solved one of the "great mysteries of the world," I felt encouraged when it received positive feedback and raised novel questions and ideas in the folks I shared it with. In reconciling these two contrasting sets of experiences, I often found myself slipping back into familiar mental territory: See? No one _actually_ cares. This is all just a waste of time. I heard the squeaking of the hamster-wheel and wondered if I would ever get off.

But in an unexpected about-face of my mental life, my ["psychological immune system"](https://www.nytimes.com/2003/09/07/magazine/the-futile-pursuit-of-happiness.html) seemed to slowly to kick-in. It reminded me of how unexpected this ride had been thus far, and how the *journey* that I'm writing about here, is what I would ultimately remember and cherish most, *not* the outcome<sup id="a5">[5](#f5)</sup>. This way of thinking once again slowly started to save me from myself. And each time it did, I got excited about [building](https://eshinjolly.com/pymer4) or [contributing](https://codeforuv.org/) to something new. And each time I did that, I discovered a new way to think about my work and my interests, and [a new way to think about software development](https://eshinjolly.com/2020/07/12/scipy/) that focused on helping others *learn* and *build intuitions* as critical pieces of "optimal" software design.

Receiving even the smallest piece of positive feedback from a student or independent researcher outside of the lab, about the utility [our open-source tools](https://github.com/cosanlab) offered their own work or how any of my research has influenced *their* thinking, warms my heart in a way that no amount of publications or career in science ever could. I am only ever reminded of how the kindness of strangers (and friends) helped *me* and influenced *my* thinking. The notion that I could have even a modicum of that kind of impact on *someone else* as I've been bumbling about all these years, has always left me in disbelief. 

I've always loved the *social* side of the scientific enterprise, and in my mind it's not made up of publication records and tenure track job markets, but rather the surprising and unexpected ways that we can shape each other's thinking and perspective of the world. 


## You *are* in the right place at the right time

The [Social Affective Neuroscience Society's](https://socialaffectiveneuro.org/) 2021 virtual conference wrapped up this past weekend and one of my personal highlights was a lovely distinguished scholars Q&A session with venerable [Chris](https://www.wikiwand.com/en/Chris_Frith) and [Uta Frith](https://www.wikiwand.com/en/Uta_Frith)<sup id="a6">[6](#f6)</sup>. When asked a question about what drove their own interests, research program, and ultimately careers, and any advice they had for aspiring researchers, they both humbly discussed the outsized role of luck. Chris Frith cheekily joked: "Maybe the advice to young scientists is to be in the right place at the right time." Uta Frith, however was quick to correct him stating:

> "No I think the advice is that you *are* in the right place at the right time. Just be open to what is around you and what the ideas are and go with them."

It's only in hindsight that I realize how much I unconsciously took this advice to heart all these years. Unbeknownst to me at the time, I've tried to reframe each project setback or negative experience in graduate school as some kind of new opportunity to learn and grow. To find inspiration in unexpected places. Outcomes be damned. Do I have more faith that maybe [everything *isn't* fucked](https://thehardestscience.com/2016/08/11/everything-is-fucked-the-syllabus/)? Not necessarily, but I do have more faith in my own ability to seek out the little joys that make the ride worth staying on a bit longer. Maybe this is because I was [raised (but don't actively practice) Buddhist](https://buddhistsolutions.transistor.fm/). Or maybe it's because after years of pointing, [bumbling](https://scholar.harvard.edu/files/dwegner/files/wegner_premature_demise_1992.pdf) just turns out to be more fun. Or far more likely, maybe it's because I've just been extremely lucky. Regardless, if I could say something to a younger version of myself it would be a paraphrase of Uta Frith's advice:

> If you treat each project as an opportunity to *grow as an individual* instead of an opportunity to *grow your career*, it'll not only help you survive grad school, but it could very well change the direction of your life in delightful and unexpected ways.

And if you're *really* lucky, Jimmy Fallon might use your work as the setup to a mediocre joke:

<iframe width="600" height="400" src="https://www.youtube.com/embed/W4ARRNm4Idk?start=278" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

<b id="flgs">* </b><em>Photo and caption credits go to the ever cathartic <a href="https://brickademics.com"> Lego grad student</a>[↩](#algs)

<b id="f1">1. </b><em>I'm absolutely not advocating for defining project success based on statistical significance. However, we most often discuss the impact of the academic <a href="https://arxiv.org/abs/physics/9909033">file drawer problem</a> in terms of the quality of findings in a field. But on a more personal level, and especially as a trainee, until the measure of a "productive scientist" grows to include more than the publication of significant findings (e.g. null results, research tooling, outreach, etc) there's still a sense of defeat or despair that grows when a years-long project "doesn't work" or "isn't publishable" because of a lack of a significant finding.</em>[↩](#a1)

<b id="f2">2. </b><em>That's not to say it's impossible to recruit for group studies in a smaller student population. Just ask <a href="https://twitter.com/ErikNook/status/1383090788171669504?s=20">Emma Templeton</a> who has been far more persistent and successful than me. </em>[↩](#a2)

<b id="f3">3. </b><em>Thanks to git/github (of which I knew essentially nothing when this journey began), I tracked down my first commit on this project to [July 23, 2015](https://github.com/cosanlab/PGG_meteor/commit/89298f2), almost 6 years ago as of this post.</em>[↩](#a3)

<b id="f4">4. </b><em> If your program, financial, and personal situation allows it, I highly recommend applying for PhD internships as a graduate student coming from a psych/neuro PhD program. Not only is it experientially useful to see what "something else" looks like so you can better make decisions about the future of your own life, but you may be surprised about the way it comes around to influence your thinking about current projects. If you can make it work, don't let your advisor talk you out of it. And no, you don't need to be any kind of technical or coding expert. </em>[↩](#a4)

<b id="f5">5. </b><em> I'm not ignorant of the fact publishing your work in a "high quality" outlet certainly feels like an accomplishment in a way that publishing in another outlet might not. But in all honesty the story in this post is one that I've long been waiting to share and one I've been planning to share regardless of where this work was ultimately ended up. It's the unexpected journey rather than the destination that has personally impacted me the most.</em>[↩](#a5)

<b id="f6">6. </b><em> The Friths announced they are writing a graphic novel about mentalizing that I intend to purchase as soon as its out and put up on my shelf right next to the The Little Prince. </em>[↩](#a6)