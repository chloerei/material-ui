---
title: Dropdown
---

# Dropdown

{% example %}
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--text" data-action="dropdown#toggle">Dropdown button</button>
  <div class="dropdown__menu">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--text" data-action="dropdown#toggle">Menu top right</button>
  <div class="dropdown__menu dropdown__menu--top-right">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--text" data-action="dropdown#toggle">Menu buttom left</button>
  <div class="dropdown__menu dropdown__menu--bottom-left">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--text" data-action="dropdown#toggle">Menu align bottom right</button>
  <div class="dropdown__menu dropdown__menu--bottom-right">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
{% endexample %}
