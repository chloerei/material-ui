---
title: Dialog
---

# Dialog

## Basic dialogs

{% example sandbox %}
<input type="checkbox" class="dialog-toggle" checked>
<div class="dialog">
  <div class="dialog__container">
    <div class="dialog__body">
      <div class="text-secondary text-align-center margin-bottom-3">
        <span class="material-icons">info</span>
      </div>
      <div class="headline-small text-align-center margin-bottom-3">
        Dialog with hero icon
      </div>
      <div class="body-medium margin-bottom-3">
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
<input type="checkbox" class="dialog-toggle" checked>
<div class="dialog">
  <div class="dialog__container">
    <div class="dialog__header">
      <div class="headline-small">
        Dialog Headline
      </div>
    </div>
    <div class="dialog__body body-medium">
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
<input type="checkbox" class="dialog-toggle" checked>
<div class="dialog dialog--full-screen">
  <div class="dialog__container">
    <div class="top-app-bar display-none@tablet">
      <div class="top-app-bar__action">
        <button type="button" class="button button--icon">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="top-app-bar__title">
        Dialog title
      </div>
      <div class="top-app-bar__action">
        <button type="button" class="button button--text">
          Save
        </button>
      </div>
    </div>
    <div class="dialog__header headline-small display-none display-block@tablet">
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
<label for="dialog-toggle" class="button button--filled">
  Dialog Toggle
</label>

<input type="checkbox" id="dialog-toggle" class="dialog-toggle">
<div id="demo-dialog" class="dialog">
  <div class="dialog__container">
    <div class="dialog__body">
      <p>Dialog content</p>
      <div class="dialog__actions">
        <label for="dialog-toggle" class="button button--text">
          Cancel
        </label>
        <button type="button" class="button button--text">
          Ok
        </button>
      </div>
    </div>
  </div>
  <label for="dialog-toggle" class="dialog__scrim">dialog#close"></label>
</div>
{% endexample %}
