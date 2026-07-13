---
title: Demos and Workshops
icon: fas fa-laptop-code
order: 6
---

A collection of hands-on demos and workshops I've built to help teams learn GitHub,
automation, and DevOps best practices. Each entry links to a full walkthrough with
setup steps, code samples, and the companion repository.

{% assign all_tags = "" | split: "" %}
{% for demo in site.demos %}
  {% for tag in demo.tags %}
    {% assign all_tags = all_tags | push: tag %}
  {% endfor %}
{% endfor %}
{% assign all_tags = all_tags | uniq | sort_natural %}

<div class="demo-controls mt-3 mb-2">
  <div class="demo-search-wrapper">
    <i class="fas fa-search demo-search-icon"></i>
    <input
      type="text"
      id="demo-search"
      class="demo-search-input"
      placeholder="Search demos by topic, title, or keyword…"
      aria-label="Search demos"
      autocomplete="off"
    />
  </div>

  {% if all_tags.size > 0 %}
    <div class="demo-tag-filters" role="group" aria-label="Filter demos by tag">
      <button type="button" class="demo-tag-filter active" data-tag="">All</button>
      {% for tag in all_tags %}
        <button type="button" class="demo-tag-filter" data-tag="{{ tag | downcase }}">{{ tag }}</button>
      {% endfor %}
    </div>
  {% endif %}
</div>

<div id="demo-list" class="demo-list row g-4 mt-1">
  {% assign demos = site.demos | sort: 'date' | reverse %}
  {% for demo in demos %}
    {% capture demo_tags %}{% for tag in demo.tags %}|{{ tag | downcase }}{% endfor %}|{% endcapture %}
    {% capture demo_search %}{{ demo.title }} {{ demo.description }} {% for tag in demo.tags %}{{ tag }} {% endfor %}{% endcapture %}
    <div class="col-12 col-md-6 demo-item"
      data-tags="{{ demo_tags }}"
      data-search="{{ demo_search | strip_html | downcase | strip }}">
      <a href="{{ demo.url | relative_url }}" class="demo-card-link">
        <article class="demo-card card h-100">
          {% if demo.image %}
            <div class="demo-card-img">
              <img src="{{ demo.image | relative_url }}" alt="{{ demo.title }}" loading="lazy">
            </div>
          {% endif %}
          <div class="card-body d-flex flex-column">
            <h2 class="demo-card-title">{{ demo.title }}</h2>
            <p class="demo-card-text flex-grow-1">
              {{ demo.description | default: demo.excerpt | strip_html | truncate: 140 }}
            </p>
            <div class="demo-card-meta text-muted">
              {% if demo.date %}
                <span class="me-3">
                  <i class="far fa-calendar fa-fw me-1"></i>{{ demo.date | date: '%b %-d, %Y' }}
                </span>
              {% endif %}
              {% if demo.tags %}
                <span class="demo-card-tags">
                  {% for tag in demo.tags %}
                    <span class="demo-tag">{{ tag }}</span>
                  {% endfor %}
                </span>
              {% endif %}
            </div>
          </div>
        </article>
      </a>
    </div>
  {% endfor %}
</div>

<p id="demo-no-results" class="text-muted mt-4" hidden>
  No demos match your search. Try a different topic or clear the filters.
</p>

{% if site.demos.size == 0 %}
> No demos published yet. Check back soon!
{: .prompt-info }
{% endif %}

<script>
  (function () {
    var search = document.getElementById('demo-search');
    var items = Array.prototype.slice.call(document.querySelectorAll('.demo-item'));
    var tagButtons = Array.prototype.slice.call(document.querySelectorAll('.demo-tag-filter'));
    var noResults = document.getElementById('demo-no-results');
    var activeTag = '';

    function applyFilters() {
      var query = (search && search.value ? search.value : '').toLowerCase().trim();
      var visible = 0;

      items.forEach(function (item) {
        var text = item.getAttribute('data-search') || '';
        var tags = item.getAttribute('data-tags') || '';
        var matchesText = query === '' || text.indexOf(query) !== -1;
        var matchesTag = activeTag === '' || tags.indexOf('|' + activeTag + '|') !== -1;

        if (matchesText && matchesTag) {
          item.removeAttribute('hidden');
          visible++;
        } else {
          item.setAttribute('hidden', '');
        }
      });

      if (noResults) {
        if (visible === 0) {
          noResults.removeAttribute('hidden');
        } else {
          noResults.setAttribute('hidden', '');
        }
      }
    }

    if (search) {
      search.addEventListener('input', applyFilters);
    }

    tagButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeTag = btn.getAttribute('data-tag') || '';
        tagButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        applyFilters();
      });
    });
  })();
</script>
