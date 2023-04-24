---
title: Segmented buttons
---

# Segmented buttons


{% example %}
<div class="segmented-button">
  <div class="segmented-button__item">
    <div class="segmented-button__item__icon">
      <span class="material-icons">star</span>
    </div>
    <div class="segmented-button__item__label">
      Star
    </div>
  </div>
  <div class="segmented-button__item segmented-button__item--active">
    <div class="segmented-button__item__icon">
      <span class="material-icons">check</span>
    </div>
    <div class="segmented-button__item__label">
      Selected
    </div>
  </div>
  <button class="segmented-button__item" disabled>
    <div class="segmented-button__item__icon">
      <span class="material-icons">favorite</span>
    </div>
    <div class="segmented-button__item__label">
      Disabled
    </div>
  </button>
  <a href="#" class="segmented-button__item">
    Link
  </a>
</div>
{% endexample %}
