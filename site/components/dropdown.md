---
title: Dropdown
---

# Dropdown

## Example

{% example %}
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--filled" data-action="dropdown#toggle">Dropdown button</button>
  <div class="dropdown__container">
    <a class="dropdown__item" href="#">
      <div class="dropdown__item__icon">
        <span class="material-icons">add</span>
      </div>
      <div class="dropdown__item__text">
        item
      </div>
    </a>
    <form action="index.html" method="post">
      <button type="submit" class="dropdown__item">
        <div class="dropdown__item__icon">
          <span class="material-icons">add</span>
        </div>
        <div class="dropdown__item__text">
          item
        </div>
      </button>
    </form>
  </div>
</div>
{% endexample %}

## Placement

{% example %}
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--filled" data-action="dropdown#toggle">Default</button>
  <div class="dropdown__container">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--filled" data-action="dropdown#toggle">Top Right</button>
  <div class="dropdown__container dropdown__container--top-right">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--filled" data-action="dropdown#toggle">Button Left</button>
  <div class="dropdown__container dropdown__container--bottom-left">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--filled" data-action="dropdown#toggle">Bottom Right</button>
  <div class="dropdown__container dropdown__container--bottom-right">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
{% endexample %}
