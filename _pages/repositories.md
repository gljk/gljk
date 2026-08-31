---
layout: page
permalink: /repositories/
title: Repos
nav: true
nav_order: 3
---
## GitHub profile

{% if site.data.repositories.github_users %}
<div class="repository-profiles">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.html username=user %}
  {% endfor %}
</div>
{% endif %}

## Publication repositories

Data, analysis code, study materials, and journal supplements explicitly linked from the publications. Each badge opens the corresponding public artifact.

{% if site.data.repositories.publication_repositories %}
<div class="publication-repositories">
  {% for repository in site.data.repositories.publication_repositories %}
    {% include repository/publication_repo.html repository=repository %}
  {% endfor %}
</div>
{% endif %}

## Selected GitHub repositories

A selection of research code, data visualizations, and web projects.

{% if site.data.repositories.github_repos %}
<div class="repositories">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}
