---
title: Drawer
---

# Drawer

## Standard

{% example sandbox %}
<div class="app-bar">
  <div class="app-bar__title">
  Title
  </div>
</div>

<div class="display-flex">
  <div class="drawer drawer--app-bar-margin" id="drawer-standard" data-controller="drawer">
    <div class="drawer__container">
      <a href="#" class="drawer__item drawer__item--active">
        <div class="drawer__item__icon">
          <span class="material-icons">inbox</span>
        </div>
        <div class="drawer__item__label">
          Inbox
        </div>
      </a>
      <a href="#" class="drawer__item">
        <div class="drawer__item__icon">
          <span class="material-icons">favorites</span>
        </div>
        <div class="drawer__item__label">
          Favorites
        </div>
      </a>
      <a href="#" class="drawer__item">
        <div class="drawer__item__icon">
          <span class="material-icons">delete</span>
        </div>
        <div class="drawer__item__label">
          Trash
        </div>
      </a>
    </div>
    <div class="drawer__scrim" data-action="click->drawer#close">
    </div>
  </div>
  <div class="flex-grow-1">
    <div class="padding">
      Main Content
    </div>
  </div>
</div>
{% endexample %}

## Modal

{% example sandbox %}
<div class="app-bar">
  <div class="app-bar__action">
    <button type="button" class="button button--icon" data-controller="toggle" data-toggle-target="#drawer-modal" data-toggle-action="drawer#toggle">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
    </button>
  </div>
  <div class="app-bar__title">
    Title
  </div>
</div>

<div class="drawer drawer--modal" id="drawer-modal" data-controller="drawer">
  <div class="drawer__container">
    <a href="#" class="drawer__item drawer__item--active">
      <div class="drawer__item__icon">
        <span class="material-icons">inbox</span>
      </div>
      <div class="drawer__item__label">
        Inbox
      </div>
    </a>
    <a href="#" class="drawer__item">
      <div class="drawer__item__icon">
        <span class="material-icons">favorites</span>
      </div>
      <div class="drawer__item__label">
        Favorites
      </div>
    </a>
    <a href="#" class="drawer__item">
      <div class="drawer__item__icon">
        <span class="material-icons">delete</span>
      </div>
      <div class="drawer__item__label">
        Trash
      </div>
    </a>
  </div>
  <div class="drawer__scrim" data-action="click->drawer#close">
  </div>
</div>

<div class="padding">
  Main Content
</div>
{% endexample %}
