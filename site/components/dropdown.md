---
title: Dropdown
---

# Dropdown

## Example

{% example %}
<div class="dropdown">
  <label tabindex="0" class="button button--filled">Dropdown button</label>
  <div tabindex="0" class="dropdown__menu">
    <a class="dropdown__item" href="#">
      <div class="dropdown__item__icon">
        <span class="material-icons">add</span>
      </div>
      <div class="dropdown__item__label">
        item
      </div>
    </a>
    <form action="index.html" method="post">
      <button type="submit" class="dropdown__item">
        <div class="dropdown__item__icon">
          <span class="material-icons">add</span>
        </div>
        <div class="dropdown__item__label">
          item
        </div>
      </button>
    </form>
  </div>
</div>
{% endexample %}

## Placement

{% example %}
<div class="dropdown">
  <label tabindex="0" class="button button--filled">Default</label>
  <div tabindex="0" class="dropdown__menu">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown dropdown--top-right">
  <label tabindex="0" class="button button--filled">Top Right</label>
  <div tabindex="0" class="dropdown__menu">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown dropdown--bottom-left">
  <label tabindex="0" class="button button--filled">Bottom Left</label>
  <div tabindex="0" class="dropdown__menu">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown dropdown--bottom-right">
  <label tabindex="0" class="button button--filled">Bottom Right</label>
  <div tabindex="0" class="dropdown__menu">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
{% endexample %}
