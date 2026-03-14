---
layout: page
title: Trust and Usage of LLMs in the BCMS Language Sphere
description: Research Project
img: assets/img/aibcms.jpg
importance: 5
category: Research
---

Generative AI research is overwhelmingly Western-centric. The models themselves perform differently across languages, the user studies sample almost exclusively from English-speaking populations, and the theoretical frameworks assume cultural universals that may not hold. This project addresses that gap for the Bosnian, Croatian, Montenegrin, and Serbian (BCMS) language sphere.

We surveyed nearly 800 respondents across Bosnia and Herzegovina, Croatia, Montenegro, and Serbia, roughly half of whom are active chatbot users, to examine how BCMS speakers interact with and perceive large language models. The data cover usage patterns, language preferences, trust, perceived creepiness, motivations, and continuance intention, alongside broader attitudes toward AI risks and benefits.

The first published paper replicates a US-based chatbot acceptance model (Baek & Kim, 2023) in the BCMS region. The structural relationships diverge substantially from the original. Task efficiency, a significant driver of both creepiness and trust in the US sample, predicts neither in ours. Playfulness, irrelevant in the US model, emerges as the strongest factor: reducing creepiness and building trust. Most strikingly, while creepiness was the dominant deterrent to continued use in the US, trust is the dominant driver in the Balkans. Qualitative analysis points to an "instrumentalist mindset": BCMS users treat AI as a pragmatic tool, not a social agent, which emotionally decouples efficiency from unease.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/IJHCIFigure1.jpg" title="Structural model comparison: US vs. BCMS samples" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Standardized path coefficients for the chatbot acceptance model in the US (Baek & Kim, 2023) and BCMS samples. Task efficiency drives both creepiness and trust in the US; it predicts neither in the Balkans. Playfulness, non-significant in the US, emerges as the key predictor. Trust dominates continuance intention in the BCMS context (β = 0.690), while creepiness dominates in the US (β = −0.704).
</div>

A second paper, currently under review, uses repeated cross-sectional data from Serbia (2022 and 2025) to examine how the structure of public AI attitudes shifted after ChatGPT made generative AI widely accessible. The results point toward an institutional decoupling: trust in state institutions, which predicted AI sentiment before ChatGPT's release, no longer does among users who have direct experience with the technology.

All survey data, code, and materials are openly available on [OSF](https://osf.io/utgs8/).

I am working on this project in collaboration with [Marina Budić](http://orcid.org/0000-0001-7516-7209), PhD. 

The project was funded by the Open Society Foundations — Western Balkans.

<div class="publications">
    {% bibliography -f papers -q @*[project=BCMSAI]* %}


</div>