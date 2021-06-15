---
title: Dialog
---

# Dialog

{% example sandbox %}
<div class="dialog dialog--open">
  <div class="dialog__container">
    <div class="toolbar">
      <div class="toolbar__title">
        Dialog Title
      </div>
      <div class="toobar__action">
        <button type="button" class="button button--icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </button>
      </div>
    </div>
    <div class="padding overflow-auto">
      Dialog Content
    </div>
    <div class="toolbar">
      <div class="toolbar__space">
      </div>
      <div class="toolbar__action">
        <button type="button" class="button button--text">Action 1</button>
      </div>
      <div class="toolbar__action">
        <button type="button" class="button button--text button--primary">Action 2</button>
      </div>
    </div>
  </div>
  <div class="dialog__scrim"></div>
</div>
{% endexample %}

## Dialog Toggle

{% example sandbox %}
<button type="button" class="button button--contained button--primary" data-controller="toggle" data-toggle-target="#demo-dialog" data-toggle-action="dialog#toggle">
  Toggle
</button>

<div id="demo-dialog" class="dialog" data-controller="dialog">
  <div class="dialog__container">
    <div class="toolbar">
      <div class="toolbar__title">
        Dialog Title
      </div>
      <div class="toobar__action">
        <button type="button" class="button button--icon" data-action="dialog#close">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </button>
      </div>
    </div>
    <div class="padding overflow-auto">
      Dialog Content
    </div>
    <div class="toolbar">
      <div class="toolbar__space">
      </div>
      <div class="toolbar__action">
        <button type="button" class="button button--text">Action 1</button>
      </div>
      <div class="toolbar__action">
        <button type="button" class="button button--text button--primary">Action 2</button>
      </div>
    </div>
  </div>
  <div class="dialog__scrim" data-action="click->dialog#close"></div>
</div>
{% endexample %}
