---
title: Navigation Drawer
---

# Navigation Drawer

## Modal

{% example sandbox %}
<div class="top-app-bar top-app-bar--sticky-top">
  <div class="top-app-bar__action">
    <button type="button" class="button button--icon" data-controller="toggle" data-toggle-target="#navigation-drawer-modal" data-toggle-action="navigation-drawer#toggle">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
    </button>
  </div>
  <div class="top-app-bar__title">
    Title
  </div>
</div>

<div class="navigation-drawer" id="navigation-drawer-modal" data-controller="navigation-drawer">
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
{% endexample %}

## Permanently

{% example sandbox %}
<div class="display-flex">
  <div class="navigation-drawer navigation-drawer--permanently" id="navigation-drawer-permanently" data-controller="navigation-drawer">
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
        <button type="button" class="button button--icon" data-controller="toggle" data-toggle-target="#navigation-drawer-permanently" data-toggle-action="navigation-drawer#toggle">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </button>
      </div>
      <div class="top-app-bar__title">
        Title
      </div>
    </div>
  </div>
</div>
{% endexample %}
