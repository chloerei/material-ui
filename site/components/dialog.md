---
title: Dialog
---

# Dialog

## Basic dialogs

{% example sandbox %}
<div class="dialog dialog--open">
  <div class="dialog__container">
    <div class="dialog__body">
      <div class="color-secondary text-align-center">
        <span class="material-icons">info</span>
      </div>
      <div class="headline-small text-align-center">
        Dialog with hero icon
      </div>
      <div class="body-medium">
        A dialog is a type of modal window that appears in front of app content to provide critical information, or ask for a decision.
      </div>
      <div class="dialog__actions">
        <button type="button" class="button button--text">
          Enabled
        </button>
        <button type="button" class="button button--text">
          Enabled
        </button>
      </div>
    </div>
  </div>
  <div class="dialog__scrim"></div>
</div>
{% endexample %}

## Basic dialogs with scrollable content

{% example sandbox %}
<div class="dialog dialog--open">
  <div class="dialog__container">
    <div class="dialog__header">
      <div class="title-large">
        Dialog Headline
      </div>
    </div>
    <div class="dialog__body border-y">
      <p>
        A dialog is a type of modal window that appears in front of app content to provide critical information, or ask for a decision.
      </p>
      <p>
        A dialog is a type of modal window that appears in front of app content to provide critical information, or ask for a decision.
      </p>
      <p>
        A dialog is a type of modal window that appears in front of app content to provide critical information, or ask for a decision.
      </p>
      <p>
        A dialog is a type of modal window that appears in front of app content to provide critical information, or ask for a decision.
      </p>
    </div>
    <div class="dialog__footer">
      <div class="dialog__actions">
        <button type="button" class="button button--text">
          Cancel
        </button>
        <button type="button" class="button button--text">
          Ok
        </button>
      </div>
    </div>
  </div>
  <div class="dialog__scrim"></div>
</div>
{% endexample %}

## Full-screen dialog (mobile only)

{% example sandbox %}
<div class="dialog dialog--full-screen dialog--open">
  <div class="dialog__container">
    <div class="app-bar display-none@tablet">
      <div class="app-bar__action">
        <button type="button" class="button button--icon">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="app-bar__title">
        Dialog title
      </div>
      <div class="app-bar__action">
        <button type="button" class="button button--text">
          Save
        </button>
      </div>
    </div>
    <div class="dialog__header display-none display-block@tablet">
      Dialog title
    </div>
    <div class="dialog__body">
      <p>
        A dialog is a type of modal window that appears in front of app content to provide critical information, or ask for a decision.
      </p>
      <p>
        A dialog is a type of modal window that appears in front of app content to provide critical information, or ask for a decision.
      </p>
      <p>
        A dialog is a type of modal window that appears in front of app content to provide critical information, or ask for a decision.
      </p>
      <p>
        A dialog is a type of modal window that appears in front of app content to provide critical information, or ask for a decision.
      </p>
    </div>
    <div class="dialog__footer display-none-on-phone">
      <div class="dialog__actions">
        <button type="button" class="button button--text">
          Cancel
        </button>
        <button type="button" class="button button--text">
          Ok
        </button>
      </div>
    </div>
  </div>
  <div class="dialog__scrim"></div>
</div>
{% endexample %}

## Dialog Toggle

{% example sandbox %}
<button type="button" class="button button--elevated" data-controller="toggle" data-toggle-target="#demo-dialog" data-toggle-action="dialog#toggle">
  Toggle
</button>

<div id="demo-dialog" class="dialog" data-controller="dialog">
  <div class="dialog__container">
    <div class="dialog__body">
      <p>Dialog content</p>
      <div class="dialog__actions">
        <button type="button" class="button button--text">
          Cancel
        </button>
        <button type="button" class="button button--text">
          Ok
        </button>
      </div>
    </div>
  </div>
  <div class="dialog__scrim" data-action="click->dialog#close"></div>
</div>
{% endexample %}
