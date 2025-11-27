---
layout: page
title: Glass Room
categories: games
---

Check out [Glass Room](https://ernaniraffo.itch.io/glass-room)!
This game was created for the Brackeys Game Jam 2025 #1.

<iframe frameborder="0" src="https://itch.io/embed/3341133?linkback=true&amp;dark=true" width="552" height="167"><a href="https://ernaniraffo.itch.io/glass-room">Glass Room by ernaniraffo</a></iframe>

# Glass Room Dev Logs

<ul class="post-list">
  {%- for post in site.posts -%}
    {%- if post.categories contains "glass-room" -%}
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