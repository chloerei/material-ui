---
title: Navigation rail
---

# Navigation Rail

{% example sandbox %}
<div class="navigation-rail">
  <div class="navigation-rail__container">
    <button type="button" class="button button--icon">
      <span class="material-icons">menu</span>
    </button>
    <button type="button" class="button button--floating-action">
      <span class="material-icons">create</span>
    </button>
    <div class="flex-grow-1">
    </div>
    <a href="#" class="navigation-rail__item navigation-rail__item--active">
      <div class="navigation-rail__item__icon">
        <span class="material-icons">circle</span>
      </div>
      <div class="navigation-rail__item__label">
        Label
      </div>
    </a>
    <a href="#" class="navigation-rail__item">
      <div class="navigation-rail__item__icon">
        <span class="material-icons">square</span>
        <div class="badge badge--small">
        </div>
      </div>
      <div class="navigation-rail__item__label">
        Label
      </div>
    </a>
    <a href="#" class="navigation-rail__item">
      <div class="navigation-rail__item__icon">
        <span class="material-icons">label</span>
        <div class="badge badge--large">
          123+
        </div>
      </div>
      <div class="navigation-rail__item__label">
        Label
      </div>
    </a>
    <div class="flex-grow-1">
    </div>
  </div>
</div>
{% endexample %}
