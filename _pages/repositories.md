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

## Selected repositories

A selection of research code, data visualizations, and web projects.

{% if site.data.repositories.github_repos %}
<div class="repositories">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}
