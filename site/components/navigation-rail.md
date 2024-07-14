---
title: Navigation rail
---

# Navigation Rail

{% example sandbox %}
<div class="navigation-rail">
  <button type="button" class="icon-button margin-top-4">
    <span class="material-icons">menu</span>
  </button>
  <button type="button" class="floating-action-button floating-action-button--lowest margin-y-4">
    <span class="material-icons">create</span>
  </button>
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
{% endexample %}
