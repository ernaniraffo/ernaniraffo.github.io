---
layout: page
title: Graffiti Trials
categories: games
---

Check out [Graffiti Trials](https://ernaniraffo.itch.io/graffiti-trials)!
This game was created for the Urban Game Jam #1.

<iframe frameborder="0" src="https://itch.io/embed/3683437?dark=true" width="552" height="167"><a href="https://ernaniraffo.itch.io/graffiti-trials">Graffiti Trials by ernaniraffo</a></iframe>

# Graffiti Trials Dev Logs

<ul class="post-list">
  {%- for post in site.posts -%}
    {%- if post.categories contains "graffiti-trials" -%}
        <li>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-meta">{{ post.date | date: date_format }}</span>
        <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
            </a>
        </h3>
        {%- if site.show_excerpts -%}
            {{ post.excerpt }}
        {%- endif -%}
        </li>
    {%- endif -%}
  {%- endfor -%}
</ul>
