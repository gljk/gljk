---
layout: page
title: Predupredimo
description: Research Project
img: assets/img/Predupredimo/stopdeath.png
importance: 1
category: Research
---

Premature mortality in Serbia is a problem that is often overlooked.

The goal of this research project was to quantify premature mortality in Serbia. 
I was researching the total premature mortality and the mortality caused by the COVID-19 pandemic and PM2.5 air pollution.

In this individual research project, I use detailed mortality (vital statistics-based) data, which I then combined with remote sensing data of PM2.5 to estimate how affected Serbia's municipalities are by air pollution.

Results show that Serbia loses over half a million years of potential life per year. Premature mortality due to PM2.5 air pollution is most prominent in the municipalities of Vojvodina (North Banat). Results indicate that the initial year of the pandemic paints a partial picture of premature mortality caused by COVID-19. The paper offers recommendations in the form of a needed paradigm shift when it comes to population policy (instead of a pronatalist one – to one that focuses on the improvement of public health as a population policy), revision of strategic documents, focus on prevention and opening data as a cheap way to encourage research, inform and educate the public.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/Predupredimo/image2.png" title="Overall Premature Mortalty" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/Predupredimo/image3.png" title="Distribution of pm2.5 pollution" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/Predupredimo/image4.png" title="COVID-19 Premature Mortalty" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
 The project included a spatial analysis of premature mortality as well as the distribution of PM2.5 air pollution in Serbia.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/Predupredimo/image1.png" title="Premature mortality by causes of death" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This figure shows how different causes of death contributed to premature mortality in Serbia in 2020.
</div>
In this project, I also looked into the cost of the pandemic 2020 to premature deaths in Serbia. In 2020 alone, 64620 years of potential life were lost directly by COVID-19, i.e., 1019.14 years of potential life per 100.000 people younger than 75. Men lost 2.5 as many potential years of life than women did. Moreover, the region of eastern and Southern Serbia fared much worse than any other region. In 2020 more than $0.34 billion was lost to premature deaths; by the end of 2021, this number will likely be well over $1 billion when the pandemic ends.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/Predupredimo/figure1.jpg" title="Premature mortality in Serbia 2017-2020 " class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/Predupredimo/figsmall.png" title="Distribution of Premature mortality in Serbia for 2020" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    COVID-19 premature mortality in Serbia 2020.
</div>

An interactive version of premature mortality in Serbia is available at <a href="https://predupredimo.rs" target="_blank">predupredimo.rs</a> (in the Serbian language).

<div style="position: relative;">
<iframe style= "    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;" src="https://gljk.github.io/VI-CDI-MG"></iframe>
</div>


<div class="publications">
    {% bibliography -f papers -q @*[project=Predupredimo]* %}
 
 
</div>


The Open Society Foundation, Serbia, supported this research project as part of the "Serbia and Global Challenges: Towards Fairer and More Democratic Public Policies" program.