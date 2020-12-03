---
title: Dropdown
---

# Dropdown

## Example

{% example %}
<div class="dropdown" data-controller="dropdown">
  <button type="button" class="button button--text" data-action="dropdown#toggle">Dropdown button</button>
  <div class="dropdown__menu">
    <a class="dropdown__item" href="#">
      <div class="dropdown__item__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
      </div>
      item
    </a>
    <a class="dropdown__item" href="#">
      <div class="dropdown__item__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
      </div>
      item
    </a>
    <a class="dropdown__item" href="#">
      <div class="dropdown__item__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
      </div>
      item
    </a>
  </div>
</div>
{% endexample %}

## Placement

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
