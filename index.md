---
layout: default
title: Beranda
---
<div class="home">

  <h1 class="page-heading">Postingan Terbaru</h1>

  <ul class="post-list">
    {%- for post in paginator.posts -%} {# LOOP INI BERUBAH: Mengulang postingan untuk halaman saat ini #}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </li>
    {%- endfor -%}
  </ul>

  {# --- BAGIAN PAGINASI DIMULAI DI SINI --- #}
  {% if paginator.total_pages > 1 %} {# Hanya tampilkan navigasi jika ada lebih dari 1 halaman #}
  <div class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path | relative_url }}" class="previous">
        &laquo; Sebelumnya
      </a>
    {% else %}
      <span class="previous disabled">&laquo; Sebelumnya</span>
    {% endif %}

    {% for page in (1..paginator.total_pages) %}
      {% if page == paginator.page %}
        <span class="page-number current">{{ page }}</span>
      {% else %}
        <a href="{{ site.paginate_path | replace: ':num', page | relative_url }}" class="page-number">{{ page }}</a>
      {% endif %}
    {% endfor %}

    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path | relative_url }}" class="next">
        Selanjutnya &raquo;
      </a>
    {% else %}
      <span class="next disabled">Selanjutnya &raquo;</span>
    {% endif %}
  </div>
  {% endif %}
  {# --- BAGIAN PAGINASI BERAKHIR DI SINI --- #}

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>

</div>