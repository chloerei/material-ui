---
title: Dialog
---

# Dialog

## Basic dialogs

{% example sandbox %}
<input type="checkbox" class="dialog-toggle" checked>
<div class="dialog">
  <div class="dialog__container">
    <div class="padding-4">
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
  <div class="dialog__container display-flex flex-direction-column">
    <div class="padding-4 padding-bottom-2">
      <div class="headline-small">
        Dialog Headline
      </div>
    </div>
    <div class="flex-grow-1 min-height-0 overflow-auto padding-x-4 padding-y-2">
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
    <div class="display-flex justify-content-flex-end padding-4 padding-top-2">
      <button type="button" class="button button--text">
        Cancel
      </button>
      <button type="button" class="button button--text">
        Ok
      </button>
    </div>
  </div>
  <div class="dialog__scrim"></div>
</div>
{% endexample %}

## Full-screen dialog (mobile only)

{% example sandbox %}
<input type="checkbox" class="dialog-toggle" checked>
<div class="dialog dialog--full-screen">
  <div class="dialog__container display-flex flex-direction-column">
    <div class="top-app-bar flex-shrink-0 display-none@tablet">
      <div class="top-app-bar__action">
        <button type="button" class="icon-button">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="top-app-bar__title">
        Dialog title
      </div>
    </div>
    <div class="flex-shirnk-0 padding-4 headline-small display-none display-block@tablet">
      Dialog title
    </div>
    <div class="flex-grow-1 overflow-auto min-height-0 padding-4">
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
    <div class="flex-shirnk-0 display-flex justify-content-flex-end padding-4">
      <button type="button" class="button button--text">
        Cancel
      </button>
      <button type="button" class="button button--text">
        Ok
      </button>
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
    <div class="padding-4">
      <p>Dialog content</p>
      <div class="display-flex justify-content-flex-end">
        <label for="dialog-toggle" class="button button--text">
          Cancel
        </label>
        <button type="button" class="button button--text">
          Ok
        </button>
      </div>
    </div>
  </div>
  <label for="dialog-toggle" class="dialog__scrim"></label>
</div>
{% endexample %}
