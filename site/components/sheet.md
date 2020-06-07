---
title: Sheet
---

# Sheet

## Standard

{% example sandbox %}
<div class="app">
  <div class="app-bar-wrapper">
    <div class="app-bar app-bar--primary">
      <div class="toolbar">
        <div class="toolbar__title">
          Title
        </div>
        <div class="toolbar__action">
          <button type="button" class="button button--icon" data-controller="toggle" data-toggle-target="#demo-sheet" data-toggle-action="sheet#toggle">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"/></svg>
          </button>
        </div>
      </div>
    </div>
    <div class="sheet-wrapper">
      <div class="main">
        <div class="main__container">
          Main Content
        </div>
      </div>
      <nav id="demo-sheet" class="sheet" data-controller="sheet">
        <div class="sheet__container">
          <div class="sheet__header">
            <div class="toolbar">
              <div class="toolbar__title">
                Header
              </div>
            </div>
          </div>
          <div class="sheet__body">
            body
          </div>
          <div class="sheet__footer">
            <div class="toolbar">
              <div class="toolbar__title">
                Footer
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>
{% endexample %}
