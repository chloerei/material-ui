---
title: Navigation Drawer
---

# Navigation Drawer

## Standard

{% example sandbox %}
<div class="display-flex">
  <input type="checkbox" id="standard-rawer-toggle" class="navigation-drawer-toggle">
  <div class="navigation-drawer">
    <div class="navigation-drawer__container">
      <a href="#" class="navigation-drawer__item navigation-drawer__item--active">
        <div class="navigation-drawer__item__icon">
          <span class="material-icons">inbox</span>
        </div>
        <div class="navigation-drawer__item__label">
          Inbox
        </div>
      </a>
      <a href="#" class="navigation-drawer__item">
        <div class="navigation-drawer__item__icon">
          <span class="material-icons">favorites</span>
        </div>
        <div class="navigation-drawer__item__label">
          Favorites
        </div>
      </a>
      <a href="#" class="navigation-drawer__item">
        <div class="navigation-drawer__item__icon">
          <span class="material-icons">delete</span>
        </div>
        <div class="navigation-drawer__item__label">
          Trash
        </div>
      </a>
    </div>
    <div class="navigation-drawer__scrim" data-action="click->navigation-drawer#close">
    </div>
  </div>

  <div class="flex-grow-1">
    <div class="top-app-bar">
      <div class="top-app-bar__action display-none@laptop">
        <label for="standard-drawer-toggle" class="icon-button">
          <span class="material-icons">menu</span>
        </label>
      </div>
      <div class="top-app-bar__title">
        Title
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Modal

{% example sandbox %}
<div class="top-app-bar top-app-bar--sticky-top">
  <div class="top-app-bar__action">
    <label for="modal-drawer-toggle" class="icon-button">
      <span class="material-icons">menu</span>
    </label>
  </div>
  <div class="top-app-bar__title">
    Title
  </div>
</div>

<input type="checkbox" id="modal-drawer-toggle" class="navigation-drawer-toggle">
<div class="navigation-drawer navigation-drawer--modal">
  <div class="navigation-drawer__container">
    <a href="#" class="navigation-drawer__item navigation-drawer__item--active">
      <div class="navigation-drawer__item__icon">
        <span class="material-icons">inbox</span>
      </div>
      <div class="navigation-drawer__item__label">
        Inbox
      </div>
    </a>
    <a href="#" class="navigation-drawer__item">
      <div class="navigation-drawer__item__icon">
        <span class="material-icons">favorites</span>
      </div>
      <div class="navigation-drawer__item__label">
        Favorites
      </div>
    </a>
    <a href="#" class="navigation-drawer__item">
      <div class="navigation-drawer__item__icon">
        <span class="material-icons">delete</span>
      </div>
      <div class="navigation-drawer__item__label">
        Trash
      </div>
    </a>
  </div>
  <label for="modal-drawer-toggle" class="navigation-drawer__scrim">
  </label>
</div>
{% endexample %}
