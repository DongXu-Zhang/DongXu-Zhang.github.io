---
layout: default
permalink: /
title: Dongxu Zhang
excerpt: "Incoming Ph.D. student at Tsinghua University in September 2027. Research in efficient reasoning, multimodal learning, and AI for scientific discovery."
redirect_from:
  - /about/
  - /about.html
---

<section class="intro section" id="about-me" aria-label="About me">
  <div class="incoming-note">
    <img src="{{ '/images/thu-emblem.svg' | relative_url }}" width="46" height="46" alt="Tsinghua University emblem">
    <div>
      <p class="incoming-title">{{ site.data.profile.incoming.label }} <span>· {{ site.data.profile.incoming.university }}</span></p>
      <p>Starting {{ site.data.profile.incoming.date }} · Advisor: <a href="{{ site.data.profile.incoming.advisor_url }}" target="_blank" rel="noopener noreferrer">Prof. {{ site.data.profile.incoming.advisor }}</a></p>
    </div>
  </div>
  <div class="intro-copy">
    <p>I am a master's student in Software Engineering at Xi'an Jiaotong University, advised by <a href="https://gr.xjtu.edu.cn/web/zhujh" target="_blank" rel="noopener noreferrer">Prof. Jihua Zhu</a>. I will join {{ site.data.profile.incoming.university }} in {{ site.data.profile.incoming.date }} to pursue a Ph.D. under the supervision of <a href="{{ site.data.profile.incoming.advisor_url }}" target="_blank" rel="noopener noreferrer">Prof. {{ site.data.profile.incoming.advisor }}</a>.</p>
    <p>I received my B.Eng. in Computer Science and Technology from Taiyuan University of Technology, where I was advised by <a href="https://rjxy.tyut.edu.cn/info/1191/3989.htm" target="_blank" rel="noopener noreferrer">Prof. Juanjuan Zhao</a>. I previously visited <a href="https://www.shlab.org.cn/" target="_blank" rel="noopener noreferrer">Shanghai AI Laboratory</a>, working with <a href="https://chengtan9907.github.io/" target="_blank" rel="noopener noreferrer">Cheng Tan</a>, and was a research intern with <a href="https://scholar.google.com/citations?hl=zh-CN&amp;user=b4cE0J4AAAAJ" target="_blank" rel="noopener noreferrer">Ning Yang</a> at the Institute of Automation, Chinese Academy of Sciences.</p>
    <p>My research interests include efficient and reliable reasoning in large language models, multimodal learning, and AI for scientific discovery. My earlier work focused on 3D vision and point cloud registration.</p>
  </div>
</section>

<section class="section news-section" id="news" aria-labelledby="news-title">
  <span id="-news" class="legacy-anchor" aria-hidden="true"></span>
  <h2 id="news-title">News</h2>
  <ul class="news-list">
    {% for update in site.data.news limit:7 %}{% include news-item.html update=update %}{% endfor %}
  </ul>
  <details class="news-archive disclosure">
    <summary>Earlier updates <span aria-hidden="true">+</span></summary>
    <ul class="news-list">{% for update in site.data.news offset:7 %}{% include news-item.html update=update %}{% endfor %}</ul>
  </details>
</section>

<section class="section publications-section" id="publications" aria-labelledby="publications-title">
  <span id="-publications" class="legacy-anchor" aria-hidden="true"></span>
  <h2 id="publications-title">Publications</h2>
  <p class="publication-legend">* Equal contribution · † Corresponding author</p>
  <ul class="publication-list">
    {% assign ordered_papers = site.data.publications | sort: 'display_order' %}
    {% for paper in ordered_papers %}{% include publication.html paper=paper %}{% endfor %}
  </ul>
</section>

<section class="section projects-section" id="projects" aria-labelledby="projects-title">
  <h2 id="projects-title">Open-source projects</h2>
  <ul class="project-list">
    {% for project in site.data.projects %}
    <li class="project" id="project-{{ project.id }}">
      <div class="project-heading"><h3><a href="{{ project.url }}" target="_blank" rel="noopener noreferrer">{{ project.name }}</a></h3><span class="project-date">{{ project.date }}</span></div>
      <p class="project-role">{{ project.role }}</p>
      <p>{{ project.description }}</p>
    </li>
    {% endfor %}
  </ul>
</section>

<section class="section background-section" id="education" aria-labelledby="education-title">
  <span id="-educations" class="legacy-anchor" aria-hidden="true"></span>
  <h2 id="education-title">Education</h2>
  <div class="timeline">
    {% for entry in site.data.background.education %}
    {% include timeline-item.html entry=entry %}
    {% endfor %}
  </div>
</section>

<section class="section background-section" id="experience" aria-labelledby="experience-title">
  <span id="-internships-and-research" class="legacy-anchor" aria-hidden="true"></span>
  <h2 id="experience-title">Research experience</h2>
  <div class="timeline">
    {% for entry in site.data.background.experience %}
    {% include timeline-item.html entry=entry %}
    {% endfor %}
  </div>
</section>

<div class="closing-grid">
  <section class="section" id="awards" aria-labelledby="awards-title">
    <span id="-honors-and-awards" class="legacy-anchor" aria-hidden="true"></span>
    <h2 id="awards-title">Honors &amp; awards</h2>
    <ul class="dated-list">{% for award in site.data.background.awards %}<li><span class="item-date">{{ award.date }}</span><span>{{ award.text }}</span></li>{% endfor %}</ul>
  </section>
  <section class="section" id="talks" aria-labelledby="talks-title">
    <span id="-invited-talks" class="legacy-anchor" aria-hidden="true"></span>
    <h2 id="talks-title">Invited talks</h2>
    <ul class="talk-list">{% for talk in site.data.background.talks %}<li><span class="item-date">{{ talk.date }} · {{ talk.location }}</span><span>{% if talk.url %}<a href="{{ talk.url }}" target="_blank" rel="noopener noreferrer">{{ talk.text }}</a>{% else %}{{ talk.text }}{% endif %}</span></li>{% endfor %}</ul>
  </section>
</div>

<section class="section contact-section" id="contact" aria-labelledby="contact-title">
  <h2 id="contact-title">Get in touch</h2>
  <p>I welcome conversations about reasoning, multimodal learning, and AI for science.</p>
  <a class="contact-link" href="mailto:{{ site.author.email }}">{{ site.author.email }} <span aria-hidden="true">↗</span></a>
</section>
