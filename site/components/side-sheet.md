---
title: Sheet
---

# Sheet

## Standard

{% example sandbox %}
<div class="display-flex">
  <div class="flex-grow-1">
    <div class="top-app-bar top-app-bar--sticky-top">
      <div class="top-app-bar__title">
        Title
      </div>
      <div class="top-app-bar__action display-none@laptop">
        <label for="standard-sheet-toggle" class="icon-button">
          <span class="material-icons">info</span>
        </label>
      </div>
    </div>
    <div class="padding-3">
      Main Content
    </div>
  </div>

  <input type="checkbox" id="standard-sheet-toggle" class="side-sheet-toggle">
  <div id="side-sheet-permanently" class="side-sheet">
    <div class="side-sheet__container">
      <div class="padding-3">
        Sheet Content
      </div>
    </div>
    <label for="standard-sheet-toggle" class="side-sheet__scrim">
    </label>
  </div>
</div>
{% endexample %}

## Modal

{% example sandbox %}
<div class="top-app-bar top-app-bar--sticky-top">
  <div class="top-app-bar__title">
    Title
  </div>
  <div class="top-app-bar__action">
    <label for="modal-sheet-toggle" class="icon-button">
      <span class="material-icons">info</span>
    </label>
  </div>
</div>

<div class="padding-3">
  Main Content
</div>

<input type="checkbox" id="modal-sheet-toggle" class="side-sheet-toggle">
<div id="side-sheet-modal" class="side-sheet side-sheet--modal">
  <div class="side-sheet__container">
    <div class="padding-3">
      Sheet Content
    </div>
  </div>
  <label for="modal-sheet-toggle" class="side-sheet__scrim">
  </label>
</div>
{% endexample %}
