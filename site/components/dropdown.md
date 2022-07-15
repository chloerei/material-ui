---
title: Dropdown
---

# Dropdown

## Example

{% example %}
<div class="dropdown">
  <label tabindex="0" class="button button--filled">Dropdown button</label>
  <div tabindex="0" class="dropdown__container">
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
<div class="dropdown">
  <label tabindex="0" class="button button--filled">Default</label>
  <div tabindex="0" class="dropdown__container">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown dropdown--right">
  <label tabindex="0" class="button button--filled">Align Right</label>
  <div tabindex="0" class="dropdown__container">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown dropdown--bottom">
  <label tabindex="0" class="button button--filled">Align Bottom</label>
  <div tabindex="0" class="dropdown__container">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
<div class="dropdown dropdown--right dropdown--bottom">
  <label tabindex="0" class="button button--filled">Align Right Bottom</label>
  <div tabindex="0" class="dropdown__container">
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
    <a class="dropdown__item" href="#">Dropdown item</a>
  </div>
</div>
{% endexample %}
