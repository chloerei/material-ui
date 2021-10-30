---
title: Drawer
---

# Drawer

## Standard

{% example sandbox %}
<div class="display-flex">
  <div class="drawer" id="drawer-standard" data-controller="drawer">
    <div class="drawer__container">
      <div class="drawer__menu">
        <a href="#" class="drawer__item">
          Drawer Item
        </a>
        <a href="#" class="drawer__item">
          Drawer Item
        </a>
        <a href="#" class="drawer__item">
          Drawer Item
        </a>
      </div>
    </div>
    <div class="drawer__scrim" data-action="click->drawer#close">
    </div>
  </div>
  <div class="flex-grow-1">
    <div class="app-bar">
      <div class="toolbar">
        <div class="toolbar__title">
          Title
        </div>
      </div>
    </div>
    <div class="padding">
      Main Content
    </div>
  </div>
</div>
{% endexample %}

## Modal

{% example sandbox %}
<div class="app-bar">
  <div class="toolbar">
    <div class="toolbar__action">
      <button type="button" class="button button--icon" data-controller="toggle" data-toggle-target="#drawer-modal" data-toggle-action="drawer#toggle">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </button>
    </div>
    <div class="toolbar__title">
      Title
    </div>
  </div>
</div>

<div class="drawer drawer--modal" id="drawer-modal" data-controller="drawer">
  <div class="drawer__container">
    <div class="drawer__menu">
      <a href="#" class="drawer__item">
        Drawer Item
      </a>
      <a href="#" class="drawer__item">
        Drawer Item
      </a>
      <a href="#" class="drawer__item">
        Drawer Item
      </a>
    </div>
  </div>
  <div class="drawer__scrim" data-action="click->drawer#close">
  </div>
</div>

<div class="padding">
  Main Content
</div>
{% endexample %}
