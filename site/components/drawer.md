---
title: Drawer
---

# Drawer

## Standard

### Side appbar

{% example sandbox %}
<div class="app">
  <div class="drawer-wrapper">
    <nav id="demo-drawer-permanent" class="drawer" data-controller="drawer">
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
    </nav>
    <div class="drawer-wrapper__content">
      <div class="app-bar-wrapper">
        <div class="app-bar app-bar--primary">
          <div class="toolbar">
            <div class="toolbar__title">
              Title
            </div>
          </div>
        </div>
        <div class="app-bar-wrapper__content">
          <div class="padding">
            Main Content
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

### Under appbar

{% example sandbox %}
<div class="app">
  <div class="app-bar-wrapper">
    <div class="app-bar app-bar--primary">
      <div class="toolbar">
        <div class="toolbar__title">
          Title
        </div>
      </div>
    </div>
    <div class="app-bar-wrapper__content">
      <div class="drawer-wrapper">
        <nav id="demo-drawer-permanent" class="drawer" data-controller="drawer">
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
        </nav>
        <div class="drawer-wrapper__content">
          <div class="padding">
            Main Content
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Dismissible

{% example sandbox %}
<div class="app">
  <div class="app-bar-wrapper">
    <div class="app-bar app-bar--primary">
      <div class="toolbar">
        <div class="toolbar__action">
          <button type="button" class="button button--icon" data-controller="toggle" data-toggle-target="#demo-drawer-dismissible" data-toggle-action="drawer#toggle">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          </button>
        </div>
        <div class="toolbar__title">
          Title
        </div>
      </div>
    </div>
    <div class="app-bar-wrapper__content">
      <div class="drawer-wrapper">
        <nav id="demo-drawer-dismissible" class="drawer drawer--dismissible" data-controller="drawer">
          <div class="drawer__container">
            <div class="drawer__header">
              <div class="toolbar">
                <div class="toolbar__title">
                  Header
                </div>
              </div>
            </div>
            <div class="drawer__body">
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
            <div class="drawer__footer">
              <div class="toolbar">
                <div class="toolbar__title">
                  Footer
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="drawer-wrapper__content">
          <div class="app-content">
            <div class="padding">
              Main Content
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Modal

{% example sandbox %}
<div class="app">
  <div class="app-bar-wrapper">
    <div class="app-bar app-bar--primary">
      <div class="toolbar">
        <div class="toolbar__action">
          <button type="button" class="button button--icon" data-controller="toggle" data-toggle-target="#demo-drawer-modal" data-toggle-action="drawer#toggle">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          </button>
        </div>
        <div class="toolbar__title">
          Title
        </div>
      </div>
    </div>
    <div class="app-bar-wrapper__content">
      <div class="drawer-wrapper">
        <nav id="demo-drawer-modal" class="drawer drawer--modal" data-controller="drawer">
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
          <div class="drawer__scrim" data-action="click->drawer#close"></div>
        </nav>
        <div class="drawer-wrapper__content">
          <div class="app-content">
            <div class="main__container">
              Main Content
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}
